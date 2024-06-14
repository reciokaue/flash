import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { z } from 'zod'

import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  const bodySchema = z.object({
    password: z.string().min(6).max(30),
    email: z.string().email(),
  })
  const { password, email } = bodySchema.parse(await req.json())

  const student = await prisma.student.findUnique({
    where: { email },
  })
  if (!student)
    return Response.json(
      { message: 'Student does not exist.' },
      { status: 400 },
    )

  const comparedPassword = await bcrypt.compare(password, student?.password)
  if (!comparedPassword)
    return Response.json({ message: 'Invalid Password.' }, { status: 400 })

  const token = jwt.sign(
    { name: student.name, email, sub: student.id },
    'B9S1G094LXL',
    { expiresIn: '30 days' },
  )
  cookies().set('@feedback.view:auth-token', token)

  return Response.json(token, { status: 200 })
}
