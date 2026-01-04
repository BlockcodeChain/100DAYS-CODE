import React, { useEffect, useState } from 'react'
import { Copy, Sun, Moon } from 'lucide-react'
import Copied from './Copied'

const Todolist = () => {
  const [dark, setDark] = useState(false)
  const [input, setInput] = useState("")

  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('Items')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    // clear storage and save current items
    localStorage.clear()
    localStorage.setItem('Items', JSON.stringify(items))
  }, [items])

  const handleAdd = () => {
    if (!input.trim()) return
    setItems([...items, input])
    setInput("")
  }

  const handleRemove = (idx) => {
    setItems(items.filter((_, i) => i !== idx))
  }

  return (
    <div className={`flex justify-center min-h-screen relative px-4
      ${dark ? 'bg-slate-100 text-slate-900' : 'bg-slate-900 text-slate-100'}`}>
      
      {/* Theme toggle */}
      <div className='absolute top-4 right-4 rounded-3xl w-10 h-10 flex items-center justify-center bg-white text-black shadow-md'>
        <button onClick={() => setDark(!dark)}>
          {dark ? (
            <Sun className='cursor-pointer bg-yellow-400 rounded-3xl w-10 h-10 px-1 py-1 text-yellow-800 border border-orange-400' />
          ) : (
            <Moon className='cursor-pointer' />
          )}
        </button>
      </div>

      <div className='flex items-center flex-col w-full max-w-3xl'>
        <h1 className='text-5xl sm:text-6xl font-bold mt-10 text-center'>
          NOTES TODO APP
        </h1>

        <section className='flex items-center justify-center flex-col gap-10 sm:gap-20 w-full mt-12'>
          
          {/* Input area */}
          <div className={`flex flex-col sm:flex-row justify-between w-full gap-4 sm:gap-6 p-4 sm:p-6 rounded-3xl
            ${dark ? 'bg-slate-300' : 'bg-slate-800'} shadow-md`}>
            
            <div className='flex flex-1 gap-3'>
              <input
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Enter Your TODO'
                className={`border rounded-2xl w-full h-12 px-4 text-center focus:outline-none focus:ring-2
                  ${dark
                    ? 'bg-white text-black border-slate-400 placeholder:text-slate-500 focus:ring-sky-500'
                    : 'bg-slate-900 text-slate-100 border-slate-600 placeholder:text-slate-400 focus:ring-sky-400'
                  }`}
              />
              <Copied text={input} />
            </div>

            <button
              onClick={handleAdd}
              className='bg-sky-500 hover:bg-sky-600 transition px-6 sm:px-8 h-12 text-lg sm:text-xl font-bold rounded-2xl flex items-center justify-center'
            >
              ADD
            </button>
          </div>

          {/* Todo list */}
          <div className={`flex flex-col items-center gap-4 text-2xl rounded-3xl w-full max-h-80 overflow-y-auto p-4 sm:p-6
            ${dark ? 'bg-slate-200' : 'bg-slate-600'} shadow-md`}>
            
            {items.length === 0 ? (
              <h1 className='text-xl sm:text-2xl text-center'>✨ ADD ITEM ✨</h1>
            ) : (
              <ul className='w-full space-y-3'>
                {items.map((itm, idx) => (
                  <li key={idx} className='flex justify-between items-center bg-slate-800 text-white px-4 py-2 rounded-xl'>
                    <span className='w-8 h-8 flex items-center justify-center bg-sky-500 rounded-full text-white font-bold'>
                      {idx + 1}
                    </span>
                    <span className='flex-1 text-center truncate'>{itm}</span>
                    <button onClick={() => handleRemove(idx)}>❌</button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Todolist
