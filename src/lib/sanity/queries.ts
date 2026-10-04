import { groq } from 'next-sanity';

export const homePageQuery = groq`*[_type == "homePage"][0] {
  hero {
    title,
    subtitle,
    "imageUrl": image.asset->url
  },
  featuredProducts[]->{
    title,
    slug,
    "imageUrl": image.asset->url,
    price
  }
}`;

// Additional queries can be added here
