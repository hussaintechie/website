import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://callboy.website/',
      lastModified: new Date(),
    },
    {
      url: 'https://callboy.website/about',
      lastModified: new Date(),
    },
    {
      url: 'https://callboy.website/services/hireCallBoyPage',
      lastModified: new Date(),
    },
    {
      url: 'https://callboy.website/services/hirecallgirl',
      lastModified: new Date(),
    },
     {
      url: 'https://callboy.website/services/callgirl',
      lastModified: new Date(),
    },
    
     {
      url: 'https://callboy.website/services/jioncallboy',
      lastModified: new Date(),
    },
     {
      url: 'https://callboy.website/contact',
      lastModified: new Date(),
    },
    
  ]
}