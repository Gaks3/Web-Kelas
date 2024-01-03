'use client'

import { useEffect, useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from './ui/carousel'
import Image from 'next/image'

export default function MemoriesCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <Carousel
      opts={{
        loop: true,
      }}
      setApi={setApi}
    >
      <div className='absolute z-10 right-5 top-5 text-sm bg-black/80 text-white px-4 py-1 rounded-xl'>
        {current} / {count}
      </div>
      <CarouselContent>
        <CarouselItem>
          <div className='w-full h-[450px] relative'>
            <Image src={'/fotoku.jpg'} alt='gambar' fill />
            <div className='bg-gradient-to-b from-transparent via-black/70 to-black/90 w-full h-1/4 absolute bottom-0 flex items-end justify-center pb-5'>
              <p className='text-white'>abbbbbbbbbbbbbbbb</p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className='w-full h-[450px] relative'>
            <Image src={'/fotoku.jpg'} alt='gambar' fill />
            <div className='bg-gradient-to-b from-transparent via-black/70 to-black/90 w-full h-1/4 absolute bottom-0 flex items-end justify-center pb-5'>
              <p>a</p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className='w-full h-[450px] relative'>
            <Image src={'/fotoku.jpg'} alt='gambar' fill />
            <div className='bg-gradient-to-b from-transparent via-black/70 to-black/90 w-full h-1/4 absolute bottom-0 flex items-end justify-center pb-5'>
              <p>a</p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className='w-full h-[450px] relative'>
            <Image src={'/fotoku.jpg'} alt='gambar' fill />
            <div className='bg-gradient-to-b from-transparent via-black/70 to-black/90 w-full h-1/4 absolute bottom-0 flex items-end justify-center pb-5'>
              <p>a</p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className='w-full h-[450px] relative'>
            <Image src={'/fotoku.jpg'} alt='gambar' fill />
            <div className='bg-gradient-to-b from-transparent via-black/70 to-black/90 w-full h-1/4 absolute bottom-0 flex items-end justify-center pb-5'>
              <p>a</p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className='w-full h-[450px] relative'>
            <Image src={'/fotoku.jpg'} alt='gambar' fill />
            <div className='bg-gradient-to-b from-transparent via-black/70 to-black/90 w-full h-1/4 absolute bottom-0 flex items-end justify-center pb-5'>
              <p>a</p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className='w-full h-[450px] relative'>
            <Image src={'/fotoku.jpg'} alt='gambar' fill />
            <div className='bg-gradient-to-b from-transparent via-black/70 to-black/90 w-full h-1/4 absolute bottom-0 flex items-end justify-center pb-5'>
              <p>a</p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className='w-full h-[450px] relative'>
            <Image src={'/fotoku.jpg'} alt='gambar' fill />
            <div className='bg-gradient-to-b from-transparent via-black/70 to-black/90 w-full h-1/4 absolute bottom-0 flex items-end justify-center pb-5'>
              <p>a</p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className='w-full h-[450px] relative'>
            <Image src={'/fotoku.jpg'} alt='gambar' fill />
            <div className='bg-gradient-to-b from-transparent via-black/70 to-black/90 w-full h-1/4 absolute bottom-0 flex items-end justify-center pb-5'>
              <p>a</p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className='w-full h-[450px] relative'>
            <Image src={'/fotoku.jpg'} alt='gambar' fill />
            <div className='bg-gradient-to-b from-transparent via-black/70 to-black/90 w-full h-1/4 absolute bottom-0 flex items-end justify-center pb-5'>
              <p>a</p>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      {/* <div className='absolute flex gap-1 bottom-3 left-1/2 -translate-x-1/2'>
        {Array.from({ length: count > 5 ? 5 : count }).map((_, index) => {
          return (
            <div
              className={cn(
                'w-[6px] h-[6px] rounded-full transition-all duration-300',
                index == current
                  ? 'bg-primary w-[7px] h-[7px]'
                  : 'bg-muted-foreground/80'
              )}
              key={index}
            ></div>
          )
        })}
      </div> */}
    </Carousel>
  )
}
