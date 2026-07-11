import { useEffect } from 'react'
import { siteConfig } from '../config/siteConfig'

interface SEOProps {
  title?: string
  description?: string
  path?: string
}

function setMeta(name: string, content: string, property = false) {
  const attr = property ? 'property' : 'name'
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function SEO({
  title = 'Soul Wave India | Tarot, Healing & Psychology Guidance',
  description = 'Personalized tarot readings, holistic healing, and psychology-guided wellness. Find clarity through intuition and evidence-informed guidance.',
  path = '/',
}: SEOProps) {
  const url = `${siteConfig.url}${path}`

  useEffect(() => {
    document.title = title
    setMeta('description', description)
    setMeta('og:title', title, true)
    setMeta('og:description', description, true)
    setMeta('og:url', url, true)
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url

    const schemaId = 'soul-wave-schema'
    let script = document.getElementById(schemaId) as HTMLScriptElement | null
    if (!script) {
      script = document.createElement('script')
      script.id = schemaId
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          name: siteConfig.brand,
          description,
          url: siteConfig.url,
          email: siteConfig.contact.email,
          telephone: siteConfig.whatsapp.display,
          image: `${siteConfig.url}/images/hero/hero-portrait.jpg`,
          priceRange: '₹₹',
          address: { '@type': 'PostalAddress', addressCountry: 'IN' },
        },
        {
          '@type': 'ProfessionalService',
          name: siteConfig.brand,
          description,
          url: siteConfig.url,
          serviceType: ['Tarot Reading', 'Holistic Healing', 'Moonology', 'Psychology Guidance'],
          provider: {
            '@type': 'Person',
            name: siteConfig.reader.name,
            jobTitle: siteConfig.reader.title,
          },
        },
      ],
    })
  }, [title, description, url])

  return null
}
