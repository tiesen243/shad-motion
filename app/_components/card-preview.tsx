import { Card, CardImage } from '@/components/motion-ui/card'
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const CardPreview = () => (
  <section className="my-4">
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Card
    </h2>

    <div className="my-4 flex flex-wrap items-center gap-4">
      <h3 className="basis-full scroll-m-20 text-2xl font-semibold tracking-tight">
        Variants
      </h3>

      <Card className="basis-1/3">
        <CardHeader>
          <CardTitle>Default Card</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </CardContent>
      </Card>

      <Card className="basis-1/3" isPressable>
        <CardHeader>
          <CardTitle>Pressable Card</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </CardContent>
      </Card>

      <Card className="basis-1/3">
        <CardHeader>
          <CardTitle>Image Card Top</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardImage
          src="https://tiesen.id.vn/api/og?uwu=true"
          alt="Card Image"
          position="bottom"
        />
      </Card>

      <Card className="basis-1/3">
        <CardImage
          src="https://tiesen.id.vn/api/og?uwu=true"
          alt="Card Image"
          position="top"
        />
        <CardHeader>
          <CardTitle>Image Card Top</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
      </Card>
    </div>
  </section>
)
