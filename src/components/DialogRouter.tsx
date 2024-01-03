'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { AspectRatio } from './ui/aspect-ratio'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { Avatar, AvatarImage } from './ui/avatar'
import { useEffect, useState } from 'react'

export default function DialogRouter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (searchParams.get('member')) router.back()
  }, [open])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <AspectRatio ratio={1 / 1} asChild>
          <div
            className='w-full h-full bg-black'
            onClick={() => router.push('/?member=1', { scroll: false })}
          >
            a
          </div>
        </AspectRatio>
      </DialogTrigger>
      <DialogContent className='bg-card w-[300px] md:w-[450px] lg:w-[800px] lg:grid lg:grid-cols-2 lg:gap-10 h-max rounded-md'>
        {searchParams.get('member') && (
          <>
            <div className='hidden lg:block'>
              <AspectRatio ratio={1 / 1}>
                <Image
                  src={'/logo.png'}
                  alt='image'
                  fill
                  className='object-contain hidden lg:block bg-black rounded'
                  quality={100}
                />
              </AspectRatio>
            </div>
            <div className='lg:flex lg:flex-col lg:justify-between'>
              <div>
                <div className='flex flex-row gap-4 h-max items-center'>
                  <Avatar className='h-10 w-10 bg-black p-2'>
                    <AvatarImage
                      src='/logo.png'
                      className='object-top object-contain'
                    />
                  </Avatar>
                  <div className='flex flex-col'>
                    <p className='font-bold'>@gaks</p>
                    <p>Ade Bagas Wicaksono</p>
                  </div>
                </div>
                <div className='lg:hidden'>
                  <AspectRatio ratio={1 / 1}>
                    <Image
                      src={'/logo.png'}
                      alt='image'
                      fill
                      className='object-contain lg:hidden'
                    />
                  </AspectRatio>
                </div>
                <div>
                  <p className='font-semibold my-5'>
                    Hidup seperti Larry
                    <span className='text-muted-foreground font-normal'>
                      {' '}
                      - word by user
                    </span>
                  </p>
                </div>
              </div>
              <Button asChild>
                <Link href={'/blog'} className='w-full'>
                  My Blog
                </Link>
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
