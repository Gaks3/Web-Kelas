import { Avatar, AvatarImage } from './ui/avatar'
import DialogMember from './DialogMember'
import DialogRouter from './DialogRouter'

export default function Member() {
  return (
    <>
      <div className='mt-10'>
        <h2 className='font-bold px-5 lg:px-28'>Member of XI SIJA 1</h2>
        <div className='flex flex-row items-center gap-10 md:gap-16 lg:gap-16 my-5 px-5 lg:px-48'>
          <Avatar className='h-16 w-16 md:h-28 lg:h-28 md:w-28 lg:w-28 bg-black p-3 lg:p-4'>
            <AvatarImage
              src='/logo.png'
              className='object-top object-contain'
            />
          </Avatar>
          <div>
            <div className='flex flex-row gap-7 md:gap-14 lg:gap-14'>
              <div className='text-sm text-center'>
                <p className='font-bold'>36</p>
                <p>Members</p>
              </div>
              <div className='text-sm text-center'>
                <p className='font-bold'>4</p>
                <p>Year</p>
              </div>
              <div className='text-sm text-center'>
                <p className='font-bold'>1461</p>
                <p>Day</p>
              </div>
            </div>
            <div className='hidden md:block lg:block mt-5'>
              <p className='text-sm font-medium'>
                Sistem Informasi Jaringan dan Aplikasi
              </p>
              <p className='text-sm font-medium'>Angkatan 2026</p>
            </div>
          </div>
        </div>
        <div className='md:hidden lg:hidden'>
          <p className='text-sm font-medium px-5'>
            Sistem Informasi Jaringan dan Aplikasi
          </p>
          <p className='text-sm font-medium px-5'>Angkatan 2026</p>
        </div>
        <div className='grid grid-cols-3 gap-[2px] my-5 lg:mx-28'>
          <DialogMember />
          <DialogMember />
          <DialogMember />
          <DialogRouter />
          <DialogRouter />
          <DialogRouter />
        </div>
      </div>
    </>
  )
}
