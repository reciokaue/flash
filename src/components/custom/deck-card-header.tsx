import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'

interface DeckCardProps {
  image: string
  title: string
  description: string
}

export function DeckCardHeader({ image, title, description }: DeckCardProps) {
  return (
    <Card className="relative h-40 w-full cursor-pointer border-0 hover:opacity-80">
      <img className="absolute h-full w-full object-fill" src={image} alt="" />
      <CardHeader className="absolute bottom-2 left-2 right-2 rounded-sm bg-background p-3">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
