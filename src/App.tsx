import { useState } from 'react'

export default function App() {
  const [name, setName] = useState('React')

  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-6 font-serif'>
      <a href="https://github.com/mancuoj/rt" className='text-4xl font-bold hover:text-gray-500'>
        Hello, {name}!
      </a>
      <input type="text" className='w-48 rounded border px-3 py-2 text-lg' value={name} onChange={e => setName(e.target.value)}/>
    </div>
  )
}
