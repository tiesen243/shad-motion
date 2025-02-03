import { Accordion } from '@/components/motion-ui/accordion'

export const AccordionPreview: React.FC = () => {
  const items = [
    {
      id: '1',
      title: 'Section 1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: '2',
      title: 'Section 2',
      content:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    },
    {
      id: '3',
      title: 'Section 3',
      content:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.',
    },
  ]
  return (
    <section className="my-4">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Accordion
      </h2>

      <div className="my-4 grid grid-cols-2 gap-4">
        <div>
          <h3 className="basis-full scroll-m-20 text-2xl font-semibold tracking-tight">
            Single
          </h3>
          <Accordion type="single" items={items} />
        </div>

        <div>
          <h3 className="basis-full scroll-m-20 text-2xl font-semibold tracking-tight">
            Multiple
          </h3>

          <Accordion type="multiple" items={items} />
        </div>
      </div>
    </section>
  )
}
