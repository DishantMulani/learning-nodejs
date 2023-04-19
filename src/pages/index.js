import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen justify-around">
      <Link href='./avatar' className='text-4xl'>Avatar</Link>
      <Link href='./card' className='text-4xl'>Card</Link>
    </main>
  )
}
  