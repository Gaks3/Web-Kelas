'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { type CarouselApi } from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

export default function HeaderCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <Carousel
      opts={{
        loop: true,
      }}
      setApi={setApi}
    >
      <CarouselPrevious />
      <CarouselContent className='items-center'>
        {Array.from({ length: 5 }).map((_, index) => {
          return (
            <CarouselItem className='basis-3/4' key={index}>
              <div
                className={cn(
                  'h-[400px] lg:h-[450px] w-full transition-all duration-500 bg-white cursor-pointer',
                  current == index ? 'scale-100' : 'scale-90'
                )}
              >
                a
              </div>
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  )
}
