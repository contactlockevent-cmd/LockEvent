export default function sitemap() {
  const baseUrl = 'https://lockevent.fr'

  const routes = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'monthly' },
    { url: `${baseUrl}/produit`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${baseUrl}/tarifs`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${baseUrl}/marches`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/a-propos`, priority: 0.7, changeFrequency: 'yearly' },
    { url: `${baseUrl}/contact`, priority: 0.7, changeFrequency: 'yearly' },
  ]

  return routes.map((route) => ({
    ...route,
    lastModified: new Date(),
  }))
}
