import {
  AArrowDown,
  AlignJustify,
  Diamond,
  File,
  List,
  Plus,
} from 'lucide-react'
import Link from 'next/link'

import { DeckCard } from '@/components/custom/deck-card'
import { DeckCardHeader } from '@/components/custom/deck-card-header'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex flex-col">
      <nav className="flex w-full items-center justify-start gap-4 px-10 py-4">
        <Button size="icon" variant="ghost" className="p-2">
          <AlignJustify />
        </Button>
        <Link href="/" className="ml-2 mr-6 flex w-full gap-2">
          <Diamond />
          <h1 className="font-bold text-primary">FLASH</h1>
        </Link>
        <span className="flex aspect-square h-8 w-8 items-center justify-center rounded-full bg-primary font-semibold text-secondary">
          K
        </span>
      </nav>
      <header className="flex bg-primary py-6">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col px-10">
          <h1 className="text-secondary">Decks Populares</h1>
          <section className="grid grid-cols-5 gap-4 py-4">
            <Link href={'/deck/1'}>
              <Button className="h-full w-full bg-background text-primary hover:bg-background/80">
                <Plus />
              </Button>
            </Link>
            <DeckCardHeader
              image="https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=400"
              title="Farmacologia"
              description="1"
            />
            <DeckCardHeader
              image="https://images.pexels.com/photos/3059751/pexels-photo-3059751.jpeg?auto=compress&cs=tinysrgb&w=400"
              title="Anatomia"
              description="Semestre 1"
            />
            <DeckCardHeader
              image="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400"
              title="Bioquímica"
              description="Semestre 1"
            />
            <DeckCardHeader
              image="https://images.pexels.com/photos/5427667/pexels-photo-5427667.jpeg?auto=compress&cs=tinysrgb&w=400"
              title="Fisiologia"
              description="Semestre 2"
            />
          </section>
        </div>
      </header>
      <div className="mx-auto flex w-full max-w-screen-xl flex-col px-10">
        <nav className="flex items-center justify-between py-6">
          <h1 className="font-semibold text-primary">Seus decks</h1>
          <div className="flex gap-2">
            <Button size="icon" variant="ghost">
              <List />
            </Button>
            <Button size="icon" variant="ghost">
              <AArrowDown />
            </Button>
            <Button size="icon" variant="ghost">
              <File />
            </Button>
          </div>
        </nav>
        <section className="grid grid-cols-4 gap-4 pb-10">
          <DeckCard
            image="https://images.pexels.com/photos/965345/pexels-photo-965345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Programação"
            description="Orientada a objetos"
          />
          <DeckCard
            image="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Gestão de projetos"
            description="Semestre 4"
          />
        </section>
      </div>
    </main>
  )
}
