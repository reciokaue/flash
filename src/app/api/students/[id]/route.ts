import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params
  const student = await prisma.student.findUnique({
    where: { id: Number(id) },
  })
  return NextResponse.json(student, { status: 200 })
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params
  const data = await req.json()
  try {
    const updatedStudent = await prisma.student.update({
      where: { id: Number(id) },
      data,
    })
    return NextResponse.json(updatedStudent, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Failed to update student' },
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
    await prisma.student.delete({
      where: { id: Number(id) },
    })
    return NextResponse.json({ message: 'Student deleted' }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Failed to delete student' },
      { status: 400 },
    )
  }
}
