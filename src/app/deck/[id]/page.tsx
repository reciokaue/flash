import { AlignJustify, ChevronLeft, ChevronRight, Diamond } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface DeckPageProps {
  params: { id: string }
}

export default function DeckPage({ params }: DeckPageProps) {
  console.log(params)

  return (
    <main className="flex flex-col">
      <nav className="flex w-full items-center justify-start gap-4 px-10 py-4">
        <Button size="icon" variant="ghost" className="p-2">
          <AlignJustify />
        </Button>
        <div className="ml-2 mr-6 flex w-full gap-2">
          <Diamond />
          <h1 className="font-bold text-primary">Deck sem titulo</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost">
            <ChevronLeft />
          </Button>
          <Button size="icon" variant="ghost">
            <ChevronRight />
          </Button>
          <Button className="ml-8">Salvar</Button>
          <span className="ml-4 flex aspect-square h-8 w-8 items-center justify-center rounded-full bg-primary font-semibold text-secondary">
            K
          </span>
        </div>
      </nav>
      <div className="mx-auto flex w-full max-w-screen-xl flex-col px-10">
        <nav className="flex items-center justify-between py-6">
          <h1 className="font-semibold text-primary">Cards</h1>
          <div className="flex gap-2">
            {/* <Button size="icon" variant="ghost">
              <List />
            </Button>
            <Button size="icon" variant="ghost">
              <AArrowDown />
            </Button>
            <Button size="icon" variant="ghost">
              <File />
            </Button> */}
          </div>
        </nav>
        <section className="grid grid-cols-4 gap-4 pb-10"></section>
      </div>
    </main>
  )
}
