'use client'

import {
  AlignJustify,
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Diamond,
} from 'lucide-react'
import Link from 'next/link'

import { TextEditor } from '@/components/custom/text-editor'
import { Button } from '@/components/ui/button'
interface DeckPageProps {
  params: { id: string }
}

export default function DeckPage({ params }: DeckPageProps) {
  console.log(params)

  return (
    <main className="flex h-full flex-col bg-input/50">
      <nav className="flex w-full items-center justify-start gap-4 bg-background px-10 py-4">
        <Button size="icon" variant="ghost" className="p-2">
          <AlignJustify />
        </Button>
        <Link href="/" className="ml-2 mr-6 flex w-full gap-2">
          <Diamond />
          <h1 className="font-bold text-primary">Deck sem titulo</h1>
        </Link>
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
      <div className="mx-auto flex w-full max-w-screen-lg flex-col px-10">
        <header className="mb-4 mt-8 flex items-center justify-between">
          <Button
            variant="secondary"
            size="icon"
            className="h-10 w-10 border-none bg-background p-1"
          >
            <ArrowLeft />
          </Button>
          <div className="flex items-center justify-center gap-2">
            <span className="h-4 w-4 rounded-full bg-primary" />
            <span className="h-4 w-4 rounded-full bg-border" />
            <span className="h-4 w-4 rounded-full bg-border" />
            <span className="h-4 w-4 rounded-full bg-border" />
            <span className="h-4 w-4 rounded-full bg-border" />
          </div>
          <Button
            variant="secondary"
            size="icon"
            className="h-10 w-10 border-none bg-background p-1"
          >
            <ArrowRight />
          </Button>
        </header>
        <section className="flex w-full flex-col gap-4 pb-10">
          <h1 className="mt-2 text-2xl font-semibold">Frente</h1>
          <div className="flex min-h-52 w-full rounded-md bg-background p-5">
            <TextEditor
              content="<h2>Pergunta</h2>
      <p>Qual é a capital da França?</p>"
            />
          </div>
          <h1 className="mt-2 text-2xl font-semibold">Verso</h1>
          <div className="flex min-h-52 w-full rounded-md bg-background p-5">
            <TextEditor
              content={`<h2>Resposta</h2>
              <p>A capital da França é Paris.</p>`}
            />
          </div>
          <Button className="w-fit self-end p-4">Salvar</Button>
        </section>
      </div>
    </main>
  )
}
