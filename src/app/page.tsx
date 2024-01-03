import Header from '@/components/Header'
import Member from '@/components/Member'
import MemoriesCarousel from '@/components/MemoriesCarousel'
import { Avatar } from '@/components/ui/avatar'
import { MemoryStick } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Header />
      <Member />
      <div className='mt-20 px-0 lg:px-28'>
        <div className='flex flex-row items-center gap-5 mx-2 md:mx-0 lg:mx-0 my-5'>
          <Avatar className='bg-black flex items-center justify-center h-16 w-16'>
            <MemoryStick />
          </Avatar>
          <div>
            <h3 className='font-bold'>The memories of SIJA 1</h3>
            <p className='text-sm'>SMK N 2 Yogyakarta</p>
          </div>
        </div>
        <div>
          <MemoriesCarousel />
        </div>
      </div>
      <div className='h-screen'>a</div>
    </>
  )
}
