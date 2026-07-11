export function buildWhatsAppUrl(phone: string, message: string): string {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${phone}?text=${encoded}`
}

export function buildContactWhatsAppMessage(
  name: string,
  email: string,
  message: string,
): string {
  return `Hi Soul Wave India,\n\nMy name is ${name}.\nEmail: ${email}\n\n${message}`
}

export function openWhatsApp(phone: string, message: string): void {
  window.open(buildWhatsAppUrl(phone, message), '_blank', 'noopener,noreferrer')
}
