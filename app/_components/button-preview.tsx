import { UserIcon } from 'lucide-react'

import { Button } from '@/components/motion-ui/button'

export const ButtonPreview = () => (
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
      <Button isLoading>Loading</Button>
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

    <div className="my-4 flex flex-wrap items-center gap-4">
      <h3 className="basis-full scroll-m-20 text-2xl font-semibold tracking-tight">
        With Icon
      </h3>
      <Button icon={<UserIcon />}>Left icon</Button>
      <Button icon={<UserIcon />} iconPosition="right">
        Right icon
      </Button>
    </div>
  </section>
)
