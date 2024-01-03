import HeaderCarousel from './HeaderCarousel'
import TypingAnimation from './TypingAnimation'

export default function Header() {
  return (
    <div className='h-screen'>
      <HeaderCarousel />
      <div className='p-4 flex flex-col items-center'>
        <TypingAnimation />
        <p className='text-muted-foreground text-center'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam illo,
          dolores alias eaque expedita quam explicabo suscipit doloremque sit
          sint.
        </p>
      </div>
    </div>
  )
}
