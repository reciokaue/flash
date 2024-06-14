import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  const flashcards = await prisma.flashCard.findMany()
  return NextResponse.json(flashcards, { status: 200 })
}

export async function POST(req: NextRequest) {
  const data = await req.json()
  try {
    const newFlashCard = await prisma.flashCard.create({
      data,
    })
    return NextResponse.json(newFlashCard, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Failed to create flashcard' },
      { status: 400 },
    )
  }
}
