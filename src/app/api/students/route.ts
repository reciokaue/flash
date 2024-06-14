import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  const students = await prisma.student.findMany()
  return NextResponse.json(students, { status: 200 })
}

export async function POST(req: NextRequest) {
  const data = await req.json()
  try {
    const newStudent = await prisma.student.create({
      data,
    })
    return NextResponse.json(newStudent, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Failed to create student' },
      { status: 400 },
    )
  }
}
