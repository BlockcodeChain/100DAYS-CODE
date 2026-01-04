import React, { useState } from 'react'
import { Copy} from 'lucide-react'
const Copied = ({ text }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    if (!text) return
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000) // tooltip disappears after 2s
    })
  }

  return (
    <button
      onClick={handleCopy}
      className='w-12 h-12 px-2 flex items-center justify-center bg-amber-500 hover:bg-amber-600 transition rounded-3xl relative'
    >
      <span className='text-white text-lg'><Copy/></span>
      {copied && (
        <div className='flex absolute top-20  items-center justify-center w-42 h-12 border-2 rounded-2xl border-slate-600'>
            <span className='absolute top-1 text-2xl text-yellow-600 font-semibold'>
          Copied!
        </span>
        </div>
        
      )}
    </button>
  )
}

export default Copied
