export const siteUrl =
  import.meta.env.VITE_SITE_URL?.replace(/\/$/, '') || 'https://smtechsolutions.in'
export const apiUrl = import.meta.env.VITE_API_URL?.replace(/\/$/, '') || ''
export const defaultOgImage =
  import.meta.env.VITE_OG_IMAGE ||
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&h=630&q=80'

export const company = {
  name: 'AASHA SM Technologies Private Limited',
  shortName: 'AASHA SM Technologies',
  email: 'filingexpert.sm@gmail.com',
  website: 'https://smtechsolutions.in',
  description:
    'Professional business registration, GST, trademark, Startup India, accounting, and compliance services across India—with dedicated experts in Maharashtra and Pune.',
  foundingDate: '2018',
  priceCurrency: 'INR',
  areaServed: ['India', 'Maharashtra', 'Pune'],
  sameAs: ['https://smtechsolutions.in'],
}

const defaultPhoneE164 = '919529998320'
export const phoneDisplay = import.meta.env.VITE_PHONE_DISPLAY || '9529998320'
export const whatsappE164 = import.meta.env.VITE_WHATSAPP_E164 || defaultPhoneE164
export const phoneE164 = import.meta.env.VITE_PHONE_E164 || defaultPhoneE164

export function whatsappHref(message = '') {
  if (!whatsappE164) {
    return `mailto:${company.email}?subject=${encodeURIComponent('Business compliance inquiry')}`
  }
  const text = message || `Hi, I need help with business registration/compliance from ${company.shortName}.`
  return `https://wa.me/${whatsappE164}?text=${encodeURIComponent(text)}`
}

export function telHref() {
  if (!phoneE164) return null
  return `tel:+${phoneE164}`
}
