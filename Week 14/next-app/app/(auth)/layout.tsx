'use client'
import { useState } from "react"
import Link from 'next/link';

export default function ({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <hr />
      <Link href='/signup'>Sign Up</Link>
      <br />
      <Link href='/signin'>Sign In</Link>
      <br />

      LAYOUT
      <br />
      {children}
      <button onClick={e => setCount(c => c += 1)}>LAYOUT Count: {count}</button>
      <hr />
    </div>
  )
} 
