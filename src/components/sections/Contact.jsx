import { useRef, useState } from 'react';
import { CircleAlert, CircleCheck, LoaderCircle, Mail, MapPin, Phone, Send, UserCheck } from 'lucide-react';
import { Reveal } from '../animations.jsx';
import { MEMBERSHIP_TYPES, MEMBER_BENEFITS, SITE } from '../../data/content.js';
import { submitAffiliation } from '../../services/contact.js';

function InstagramIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const INITIAL = {
  nombre: '',
  organizacion: '',
  email: '',
  telefono: '',
  tipo: '',
  mensaje: '',
  consentimiento: false,
};

const FIELD_ORDER = ['nombre', 'email', 'telefono', 'tipo', 'mensaje', 'consentimiento'];

function validate(values) {
  const errors = {};
  const nombre = values.nombre.trim();
  if (!nombre) errors.nombre = 'Ingrese su nombre completo.';
  else if (nombre.length < 3) errors.nombre = 'El nombre debe tener al menos 3 caracteres.';

  const email = values.email.trim();
  if (!email) errors.email = 'Ingrese su correo electrónico.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = 'Ingrese un correo electrónico válido.';

  const digits = values.telefono.replace(/\D/g, '');
  if (values.telefono.trim() && !(digits.length === 10 || (digits.length === 11 && digits.startsWith('1')))) {
    errors.telefono = 'Ingrese un teléfono válido de 10 dígitos, ej. (787) 555-1234.';
  }

  if (!values.tipo) errors.tipo = 'Seleccione el tipo de afiliación.';

  const mensaje = values.mensaje.trim();
  if (!mensaje) errors.mensaje = 'Cuéntenos brevemente sobre su interés.';
  else if (mensaje.length < 20) errors.mensaje = `El mensaje debe tener al menos 20 caracteres (${mensaje.length}/20).`;

  if (!values.consentimiento) errors.consentimiento = 'Debe autorizar el uso de sus datos para ser contactado.';

  return errors;
}

function formatPhone(value) {
  const d = value.replace(/\D/g, '').slice(0, 10);
  if (d.length < 4) return d;
  if (d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

const inputBase =
  'w-full rounded-xl border bg-cream px-4 py-3 text-base text-navy placeholder:text-navy/50 transition-colors focus:bg-white focus:outline-none focus:ring-4';
const inputState = (hasError) =>
  hasError
    ? 'border-red-600 focus:border-red-600 focus:ring-red-600/15'
    : 'border-navy/20 focus:border-tropical focus:ring-tropical/15';

function Field({ id, label, required, error, hint, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-bold text-navy">
        {label}
        {required ? (
          <span className="text-red-700" aria-hidden="true"> *</span>
        ) : (
          <span className="font-medium text-navy/70"> (opcional)</span>
        )}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-navy/70">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 flex items-center gap-1.5 text-sm font-semibold text-red-700">
          <CircleAlert className="h-4 w-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [submittedName, setSubmittedName] = useState('');
  const formRef = useRef(null);

  const visibleError = (name) => (touched[name] ? errors[name] : undefined);

  const update = (name, value) => {
    const next = { ...values, [name]: value };
    setValues(next);
    if (touched[name]) setErrors(validate(next));
  };

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    if (type === 'checkbox') update(name, checked);
    else if (name === 'telefono') update(name, formatPhone(value));
    else update(name, value);
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(values));
  };

  const describedBy = (name, hasHint = false) => {
    if (visibleError(name)) return `${name}-error`;
    return hasHint ? `${name}-hint` : undefined;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validate(values);
    setErrors(validation);
    setTouched(Object.fromEntries(FIELD_ORDER.map((f) => [f, true])));

    const firstInvalid = FIELD_ORDER.find((f) => validation[f]);
    if (firstInvalid) {
      formRef.current?.querySelector(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus('submitting');
    try {
      await submitAffiliation({
        ...values,
        nombre: values.nombre.trim(),
        email: values.email.trim(),
        mensaje: values.mensaje.trim(),
        enviadoEn: new Date().toISOString(),
      });
      setSubmittedName(values.nombre.trim().split(' ')[0]);
      setStatus('success');
      setValues(INITIAL);
      setTouched({});
      setErrors({});
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="unete" aria-labelledby="unete-title" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-2xl shadow-navy/10 lg:grid-cols-12">
            {/* Panel informativo */}
            <div className="relative isolate overflow-hidden bg-gradient-to-br from-navy via-navy to-tropical p-8 text-white sm:p-12 lg:col-span-5">
              <div aria-hidden="true" className="absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
              <p className="mb-5 inline-flex rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-gold-light">
                Contacto y Afiliación
              </p>
              <h2 id="unete-title" className="font-serif text-3xl font-bold leading-tight sm:text-4xl">
                Únete a la Liga
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/85">
                Si eres empresario, profesional, gestor cultural, estudiante o institución vinculada al turismo, tu
                participación fortalece el futuro de nuestro destino.
              </p>

              <ul className="mt-8 space-y-4">
                {MEMBER_BENEFITS.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-white/90 sm:text-base">
                    <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold-light" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-10 space-y-4 border-t border-white/15 pt-8 text-sm sm:text-base">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                  <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-gold-light">
                    <UserCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                    {SITE.presidentRole}
                  </p>
                  <p className="mt-1 font-serif text-lg font-bold text-white">
                    {SITE.presidentName}
                  </p>
                </div>

                <a href={`tel:${SITE.presidentPhoneTel}`} className="flex items-center gap-3 text-white/90 hover:text-gold-light">
                  <Phone className="h-5 w-5 shrink-0 text-gold-light" aria-hidden="true" />
                  <span>{SITE.presidentPhone}</span>
                </a>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-white/90 hover:text-gold-light">
                  <Mail className="h-5 w-5 shrink-0 text-gold-light" aria-hidden="true" />
                  <span className="break-all">{SITE.email}</span>
                </a>
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/90 hover:text-gold-light"
                >
                  <InstagramIcon className="h-5 w-5 shrink-0 text-gold-light" />
                  <span>@{SITE.instagramHandle}</span>
                </a>
                <p className="flex items-center gap-3 text-white/90">
                  <MapPin className="h-5 w-5 shrink-0 text-gold-light" aria-hidden="true" />
                  {SITE.location}
                </p>
              </div>
            </div>

            {/* Formulario */}
            <div className="p-8 sm:p-12 lg:col-span-7">
              {status === 'success' ? (
                <div role="status" className="flex h-full flex-col items-center justify-center py-12 text-center">
                  <span className="mb-6 grid h-20 w-20 place-items-center rounded-full bg-tropical/10 text-tropical">
                    <CircleCheck className="h-10 w-10" aria-hidden="true" />
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-navy sm:text-3xl">
                    ¡Gracias{submittedName ? `, ${submittedName}` : ''}!
                  </h3>
                  <p className="mt-3 max-w-md text-base text-navy/80">
                    Hemos recibido su solicitud. Un miembro de la Liga de Turismo de Puerto Rico, Inc. se comunicará con
                    usted muy pronto.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-8 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-tropical"
                  >
                    Enviar otra solicitud
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-navy">Solicitud de información o afiliación</h3>
                    <p className="mt-1 text-sm text-navy/75">
                      Los campos marcados con <span className="font-bold text-red-700">*</span> son requeridos.
                    </p>
                  </div>

                  {status === 'error' && (
                    <div role="alert" className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-800">
                      <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                      No pudimos enviar su solicitud. Intente nuevamente o escríbanos a {SITE.email}.
                    </div>
                  )}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="nombre" label="Nombre completo" required error={visibleError('nombre')}>
                      <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        autoComplete="name"
                        value={values.nombre}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-required="true"
                        aria-invalid={!!visibleError('nombre')}
                        aria-describedby={describedBy('nombre')}
                        placeholder="María del Carmen Ortiz"
                        className={`${inputBase} ${inputState(visibleError('nombre'))}`}
                      />
                    </Field>

                    <Field id="organizacion" label="Empresa u organización">
                      <input
                        id="organizacion"
                        name="organizacion"
                        type="text"
                        autoComplete="organization"
                        value={values.organizacion}
                        onChange={handleChange}
                        placeholder="Parador, agencia, municipio…"
                        className={`${inputBase} ${inputState(false)}`}
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="email" label="Correo electrónico" required error={visibleError('email')}>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        inputMode="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-required="true"
                        aria-invalid={!!visibleError('email')}
                        aria-describedby={describedBy('email')}
                        placeholder="correo@ejemplo.com"
                        className={`${inputBase} ${inputState(visibleError('email'))}`}
                      />
                    </Field>

                    <Field id="telefono" label="Teléfono" error={visibleError('telefono')} hint="Formato: (787) 555-1234">
                      <input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        autoComplete="tel-national"
                        inputMode="tel"
                        value={values.telefono}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={!!visibleError('telefono')}
                        aria-describedby={describedBy('telefono', true)}
                        placeholder="(787) 555-1234"
                        className={`${inputBase} ${inputState(visibleError('telefono'))}`}
                      />
                    </Field>
                  </div>

                  <Field id="tipo" label="Tipo de afiliación" required error={visibleError('tipo')}>
                    <select
                      id="tipo"
                      name="tipo"
                      value={values.tipo}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-required="true"
                      aria-invalid={!!visibleError('tipo')}
                      aria-describedby={describedBy('tipo')}
                      className={`${inputBase} ${inputState(visibleError('tipo'))} ${values.tipo ? '' : 'text-navy/70'}`}
                    >
                      {MEMBERSHIP_TYPES.map((o) => (
                        <option key={o.value} value={o.value} disabled={!o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field id="mensaje" label="Mensaje" required error={visibleError('mensaje')}>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={4}
                      value={values.mensaje}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-required="true"
                      aria-invalid={!!visibleError('mensaje')}
                      aria-describedby={describedBy('mensaje')}
                      placeholder="Cuéntenos sobre su empresa o iniciativa y cómo desea colaborar con la Liga."
                      className={`${inputBase} ${inputState(visibleError('mensaje'))} resize-y`}
                    />
                  </Field>

                  <div>
                    <label className="flex cursor-pointer items-start gap-3 text-sm text-navy/85">
                      <input
                        type="checkbox"
                        name="consentimiento"
                        checked={values.consentimiento}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-required="true"
                        aria-invalid={!!visibleError('consentimiento')}
                        aria-describedby={describedBy('consentimiento')}
                        className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-navy/30 accent-tropical"
                      />
                      <span>
                        Autorizo a la Liga de Turismo de Puerto Rico, Inc. a utilizar mis datos para contactarme sobre
                        esta solicitud. <span className="font-bold text-red-700" aria-hidden="true">*</span>
                      </span>
                    </label>
                    {visibleError('consentimiento') && (
                      <p id="consentimiento-error" role="alert" className="mt-1.5 flex items-center gap-1.5 text-sm font-semibold text-red-700">
                        <CircleAlert className="h-4 w-4 shrink-0" aria-hidden="true" />
                        {visibleError('consentimiento')}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-tropical px-6 py-4 text-base font-bold text-white shadow-md transition-all hover:bg-navy disabled:cursor-wait disabled:opacity-80"
                  >
                    {status === 'submitting' ? (
                      <>
                        <LoaderCircle className="h-5 w-5 animate-spin" aria-hidden="true" />
                        Enviando…
                      </>
                    ) : (
                      <>
                        Enviar solicitud
                        <Send className="h-5 w-5 text-gold-light" aria-hidden="true" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

