import { AlignRight } from 'lucide-react'
import Link from 'next/link'
import { ModeToggle } from './ui/ModeToggle'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'

export default function Navbar() {
  return (
    <nav className='px-5 md:lg:px-10 py-4 flex flex-row items-center gap-12 border-b dark:border-b-neutral-800 border-b-neutral-300 sticky top-0 w-full backdrop-blur dark:bg-black/80 bg-white/80 z-20 justify-between'>
      <div className='flex flex-row gap-3 items-center'>
        <svg
          width='48'
          height='27'
          viewBox='0 0 74 63'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_3_348)'>
            <path
              d='M58.3049 36.4633L49.3158 36.2563L42.8579 26.0756L51.847 26.2796L58.3049 36.4633Z'
              fill='#F15A29'
            />
            <path
              d='M55.2832 63H17.8468L13.6048 55.7753L9.35985 63H0L4.24492 55.7753L4.68284 55.0334L8.92484 47.8057L9.35985 47.0667L13.6048 39.8391L14.0398 39.0971L18.2818 31.8725L22.5267 39.0971L22.9617 39.8391L18.7197 47.0667L18.2847 47.8057L14.0398 55.0334H41.2405L36.9985 47.8087L36.5635 47.0667L32.3186 39.8391L31.8836 39.0971L27.6416 31.8725L27.2037 31.1305L22.9617 23.9058L23.3967 23.1639L27.6416 15.9362L28.0766 15.1943L32.3186 7.96959L32.7536 7.22762L36.9985 0L41.2464 7.22762L41.6785 7.96959L45.9234 15.1943L46.3584 15.9362L50.6033 23.1639H41.2435L36.9985 15.9362L32.7565 23.1639L32.3186 23.9058L36.5635 31.1305L36.9985 31.8725L41.2435 39.0971L41.6785 39.8391L45.9234 47.0667L46.3584 47.8057L50.6004 55.0334L51.0383 55.7753L55.2832 63Z'
              className='fill-black dark:fill-white'
            />
            <path
              d='M74.0002 63H64.6404L60.3954 55.7753L59.9604 55.0334L55.7155 47.8057L55.2805 47.0667L51.0385 39.8391L50.6006 39.0971H59.9604L60.3954 39.8391L64.6404 47.0667L65.0754 47.8057L69.3174 55.0334L69.7553 55.7753L74.0002 63Z'
              className='fill-black dark:fill-white'
            />
          </g>
          <defs>
            <clipPath id='clip0_3_348'>
              <rect width='74' height='63' fill='white' />
            </clipPath>
          </defs>
        </svg>
        <h1 className='hidden md:lg:inline-block font-black text-xl bg-gradient-to-b dark:from-white dark:to-neutral-300 from-black to-neutral-500 text-transparent bg-clip-text'>
          1NFORMATHIX
        </h1>
      </div>
      <div className='flex flex-row gap-5 items-center'>
        <div className='hidden text-muted-foreground font-medium text-sm md:lg:flex items-center flex-row gap-5'>
          <Link
            href={'#blog'}
            className='dark:hover:text-white hover:text-black transition duration-200'
          >
            Blog
          </Link>
          <Link
            href={'#album'}
            className='dark:hover:text-white hover:text-black transition duration-200'
          >
            Album
          </Link>
          <Link
            href={'#about'}
            className='dark:hover:text-white hover:text-black transition duration-200'
          >
            About
          </Link>
        </div>
        <div className=''>
          <ModeToggle />
        </div>
        <div className='md:lg:hidden'>
          <Sheet>
            <SheetTrigger asChild>
              <AlignRight
                className='cursor-pointer p-2 rounded-md hover:bg-muted h-10 w-10'
                size={35}
              />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className='text-left'>Menu</SheetTitle>
              </SheetHeader>
              <div className='flex flex-col space-y-4 mt-4'>
                <div>Test</div>
                <div>Test</div>
                <div>Test</div>
                <div>Test</div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
