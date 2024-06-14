import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params
  const deck = await prisma.deck.findUnique({
    where: { id: Number(id) },
    include: { flashCards: true },
  })
  return NextResponse.json(deck, { status: 200 })
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params
  const data = await req.json()
  try {
    const updatedDeck = await prisma.deck.update({
      where: { id: Number(id) },
      data,
    })
    return NextResponse.json(updatedDeck, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Failed to update deck' },
      { status: 400 },
    )
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params
  try {
    await prisma.deck.delete({
      where: { id: Number(id) },
    })
    return NextResponse.json({ message: 'Deck deleted' }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Failed to delete deck' },
      { status: 400 },
    )
  }
}
