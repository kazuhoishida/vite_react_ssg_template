import TestImg from '../assets/test.png'

export default function Home() {
  return (
    <>
      <h1 className='text-2xl text-red-500'>Home</h1>
      <p>This is vite react ssg template.</p>
      <img src={TestImg} alt="default image" className='w-20 h-20 object-contain' />
    </>
  )
}
