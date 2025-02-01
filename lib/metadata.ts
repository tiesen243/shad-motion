import type { Metadata } from 'next'

const baseUrl = 'https://tiesen.id.vn'

export const createMetadata = (
  override: Omit<Metadata, 'title'> & { title?: string },
): Metadata => {
  const siteName = 'Shad Motion'
  const title = override.title ? `${override.title} | ${siteName}` : siteName
  const description =
    override.description ??
    'A collection of animations components with Shadcn/ui and Framer Motion'

  return {
    title,
    description,
    openGraph: {
      images: [
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        ...((override.openGraph?.images as string[]) ?? []),
        { url: `${baseUrl}/api/og?title=${title}&description=${description}` },
      ],
      type: 'website',
      siteName,
    },
    icons: {
      icon: `${baseUrl}/favicon.ico`,
      shortcut: `${baseUrl}/favicon-16x16.png`,
      apple: `${baseUrl}/apple-touch-icon.png`,
    },
  }
}
