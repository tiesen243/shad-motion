import { Button } from '@/components/motion-ui/button'
import { ThemeBtn } from '@/components/theme-btn'

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

      <section className="my-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Button
        </h2>

        <div className="my-4 flex flex-wrap items-center gap-4">
          <h3 className="basis-full scroll-m-20 text-2xl font-semibold tracking-tight">
            Variants
          </h3>
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
          <Button disabled>Disabled</Button>
        </div>

        <div className="my-4 flex flex-wrap items-center gap-4">
          <h3 className="basis-full scroll-m-20 text-2xl font-semibold tracking-tight">
            Sizes
          </h3>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">I</Button>
        </div>
      </section>

      <ThemeBtn />
    </main>
  )
}
