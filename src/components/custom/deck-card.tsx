import { Play, SquareStack } from 'lucide-react'

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'

interface DeckCardProps {
  image: string
  title: string
  description: string
}

export function DeckCard({ image, title, description }: DeckCardProps) {
  return (
    <Card className="w-fit border-0 hover:opacity-80">
      <img className="w-full object-fill" src={image} alt="" />
      <CardHeader className="py-4">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="items- flex justify-start gap-2 pb-2 text-primary/70">
        <div className="flex gap-2">
          <SquareStack size={20} /> 12
        </div>
        <div className="flex gap-2">
          <Play size={20} /> 12
        </div>
      </CardFooter>
    </Card>
  )
}
