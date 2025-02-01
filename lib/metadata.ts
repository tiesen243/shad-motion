import type { Metadata } from 'next'

export const createMetadata = (
  override: Omit<Metadata, 'title'> & { title?: string },
): Metadata => {
  const siteName = 'Shad Motion'
  return {
    title: override.title ? `${override.title} | ${siteName}` : siteName,
    description:
      override.description ??
      'A collection of animations components with Shadcn/ui and Framer Motion',
  }
}
