import { DefaultSeoProps, NextSeoProps } from "next-seo"

const defaultTitle = 'Enric Trillo • The Emtech Solopreneur'
const defaultTitleTemplate = 'Enric Trillo • %s'
const defaultDescription =
  "Enric Trillo is a 23 year old emerging technology solopreneur in the technology sector. He has leveraged his 8 years of experience to build the Reekoverse, an ecosystem of tools and platforms that enable users to solve their problems in the digital world."
const defaultImg = 'https://cdn.buildspace.so/images/buildspace-default-og.webp'
const defaultCardType = 'summary_large_image'

// type ogType = 'article' | 'book' | 'profile' | 'video' | 'product' | 'website'

// Base Config
export const config: DefaultSeoProps = {
  defaultTitle,
  titleTemplate: `%s | ${defaultTitle}`,
  description: defaultDescription,
  canonical: 'https://enrictrillo.com/',
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    type: 'website',
    locale: 'en_GB',
    url: process.env.NEXT_PUBLIC_VERCEL_URL,
    site_name: defaultTitle,
    images: [
      {
        url: defaultImg,
      },
    ],
  },
  twitter: {
    handle: '@0xreeko',
    site: process.env.NEXT_PUBLIC_VERCEL_URL,
    cardType: defaultCardType,
  },
}

// About 
export const aboutConfig: NextSeoProps = {
    title: 'About',
    titleTemplate: defaultTitleTemplate,
    description: "lorem ipsumsdoifjd sd spdfjspdofs ds dsdjfsoid fsoifjsd sdofjsdoifjsd[dokvsdijvhsiuhfdyv ",
    canonical: 'https://example.com/about',
    openGraph: {
      title: '',
      description: '',
      type: 'website',
      locale: 'en_GB',
      url: '',
      siteName: 'Example',
    },
    twitter: {
      handle: '@0xreeko',
      site: process.env.NEXT_PUBLIC_VERCEL_URL,
      cardType: defaultCardType,
    }
  }