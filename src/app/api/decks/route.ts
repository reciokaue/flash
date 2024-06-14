import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  const decks = await prisma.deck.findMany({
    include: { flashCards: true },
  })
  return NextResponse.json(decks, { status: 200 })
}

export async function POST(req: NextRequest) {
  const data = await req.json()
  try {
    const newDeck = await prisma.deck.create({
      data,
    })
    return NextResponse.json(newDeck, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Failed to create deck' },
      { status: 400 },
    )
  }
}
