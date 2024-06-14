import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { z } from 'zod'

import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  const bodySchema = z.object({
    password: z.string().min(6).max(30),
    email: z.string().email(),
    name: z.string().max(50),
  })
  const { password, email, name } = bodySchema.parse(await req.json())

  const studentExists = await prisma.student.findUnique({
    where: { email },
  })
  if (studentExists)
    return Response.json(
      { message: 'Student already exists.' },
      { status: 400 },
    )

  const hashedPassword = await bcrypt.hash(password, 10)

  const student = await prisma.student.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  })

  const token = jwt.sign(
    { name: student.name, email, sub: student.id },
    'B9S1G094LXL',
    { expiresIn: '30 days' },
  )
  cookies().set('@feedback.view:auth-token', token)

  return Response.json(token, { status: 201 })
}
