import { ThemeBtn } from '@/components/theme-btn'
import { AccordionPreview } from './_components/accordion-preview'
import { ButtonPreview } from './_components/button-preview'
import { CardPreview } from './_components/card-preview'

export default function Home() {
  return (
    <main className="container py-4">
      <section className="text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Shadcn x Motion
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          A collection of motion UI components for Shadcn using Motion.
        </p>
      </section>

      <AccordionPreview />
      <ButtonPreview />
      <CardPreview />

      <ThemeBtn />
    </main>
  )
}
