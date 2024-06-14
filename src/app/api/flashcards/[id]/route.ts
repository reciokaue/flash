import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params
  const flashcard = await prisma.flashCard.findUnique({
    where: { id: Number(id) },
  })
  return NextResponse.json(flashcard, { status: 200 })
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params
  const data = await req.json()
  try {
    const updatedFlashCard = await prisma.flashCard.update({
      where: { id: Number(id) },
      data,
    })
    return NextResponse.json(updatedFlashCard, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Failed to update flashcard' },
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
    await prisma.flashCard.delete({
      where: { id: Number(id) },
    })
    return NextResponse.json({ message: 'FlashCard deleted' }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Failed to delete flashcard' },
      { status: 400 },
    )
  }
}
