/**
 * Envío del formulario de afiliación.
 *
 * - Si existe la variable de entorno VITE_CONTACT_ENDPOINT (p. ej. Formspree,
 *   un endpoint propio, Netlify Functions, etc.), los datos se envían ahí vía POST JSON.
 * - Si no está configurada, se simula el envío para que la experiencia funcione
 *   en desarrollo. Cree un archivo `.env` con:
 *       VITE_CONTACT_ENDPOINT=https://su-endpoint.com/contacto
 */
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;

export async function submitAffiliation(data) {
  if (!ENDPOINT) {
    await new Promise((resolve) => setTimeout(resolve, 900));
    return { ok: true, simulated: true };
  }

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Error ${response.status}`);
  }
  return { ok: true, simulated: false };
}

