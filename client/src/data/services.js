export const serviceCategories = [
  {
    id: 'incorporation',
    title: 'Business incorporation',
    description:
      'End-to-end incorporation for companies, LLPs, trusts, and partnerships—with clear timelines and documentation support.',
    items: [
      { name: 'Shop Act Registration', price: 499, slug: 'shop-act-registration' },
      { name: 'Udyam Registration', price: 399, slug: 'udyam-registration' },
      { name: 'Private Limited Company Registration', price: 12500, slug: 'private-limited-company-registration' },
      { name: 'LLP Registration', price: 12500, slug: 'llp-registration' },
      { name: 'OPC Registration', price: 12500, slug: 'opc-registration' },
      { name: 'Nidhi Company Registration', price: 18000, slug: 'nidhi-company-registration' },
      { name: 'Section 8 Company Registration', price: 15500, slug: 'section-8-company-registration' },
      { name: 'Trust Registration', price: 11500, slug: 'trust-registration' },
      { name: 'Partnership Registration', price: 9999, slug: 'partnership-registration' },
    ],
  },
  {
    id: 'registration',
    title: 'Registration services',
    description:
      'Statutory registrations including GST, PF, ESI, labour, and digital certificates—aligned with current portal requirements.',
    items: [
      { name: 'GST Registration', price: 699, slug: 'gst-registration' },
      { name: 'PF Registration', price: 799, slug: 'pf-registration' },
      { name: 'ESI Registration', price: 799, slug: 'esi-registration' },
      { name: 'MLWF Registration', price: 799, slug: 'mlwf-registration' },
      { name: 'PT Registration', price: 799, slug: 'pt-registration' },
      { name: 'GeM Registration', price: 1999, slug: 'gem-registration' },
      { name: 'DSC Registration', price: 1499, slug: 'dsc-registration' },
      { name: 'FSSAI Registration', price: 1100, slug: 'fssai-registration' },
      { name: '12A & 80G Registration', price: 4999, slug: '12a-80g-registration' },
      { name: 'NGO Darpan Registration', price: 4999, slug: 'ngo-darpan-registration' },
    ],
  },
  {
    id: 'certification',
    title: 'Certification services',
    description:
      'Strategic certifications that unlock procurement, exports, IP protection, and startup benefits.',
    items: [
      { name: 'Import Export Code (IEC)', price: 1900, slug: 'iec-registration' },
      { name: 'Startup India Certification', price: 3300, slug: 'startup-india-certification' },
      { name: 'Trademark Registration', price: 9900, slug: 'trademark-registration' },
    ],
  },
  {
    id: 'taxation',
    title: 'Taxation & filing',
    description:
      'Accurate periodic filings with reconciliations, reminders, and expert review before submission.',
    items: [
      { name: 'GST Return Filing', price: 500, slug: 'gst-return-filing' },
      { name: 'TDS Return Filing', price: 1500, slug: 'tds-return-filing' },
      { name: 'Professional Tax Return Filing', price: 999, slug: 'professional-tax-return-filing' },
      { name: 'ESIC Return Filing', price: 599, slug: 'esic-return-filing' },
      { name: 'PF Return Filing', price: 599, slug: 'pf-return-filing' },
      { name: 'MLWF Return Filing', price: 599, slug: 'mlwf-return-filing' },
    ],
  },
  {
    id: 'accounting-low',
    title: 'Accounting — turnover below ₹20 lakh',
    description: 'Lean bookkeeping and compliance for early-stage businesses and micro enterprises.',
    items: [
      { name: 'Monthly Accounting', price: 1670, slug: 'monthly-accounting-below-20l' },
      { name: 'Yearly Accounting', price: 19999, slug: 'yearly-accounting-below-20l' },
    ],
  },
  {
    id: 'accounting-high',
    title: 'Accounting — higher turnover',
    description: 'Scaled accounting support for growing businesses with higher transaction volumes.',
    items: [
      { name: 'Monthly Accounting', price: 5000, slug: 'monthly-accounting-high-turnover' },
      { name: 'Yearly Accounting', price: 60000, slug: 'yearly-accounting-high-turnover' },
    ],
  },
]

export const allPricedItems = serviceCategories.flatMap((c) =>
  c.items.map((i) => ({ ...i, category: c.title, categoryId: c.id })),
)

export function formatInr(n) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(n)
}
