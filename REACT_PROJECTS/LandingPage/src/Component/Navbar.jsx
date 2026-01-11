import React from 'react'
import { useState } from 'react'
import { Menu,X } from 'lucide-react';
const Navbar = () => {
  const [activelink,setactivelink]=useState("#home")
  const [isMenu,setisMenu]=useState(false)
  const navlinks=[
    {href:"#home",label:"Home"},
    {href:"#about",label:"About"},
    {href:"#services",label:"Our Services"},
    {href:"#testimonials",label:"Testimonials"},
  ]
  return (
    <nav className='fixed z-50 w-full border-b border-gray-200  top-0 left-0 bg-white/90 shadow-sm backdrop-blur-sm  '>
     <div className='w-full container mx-auto flex justify-between items-center  px-4 sm:px-6 md:h-20 h-16 lg:px-8 '>
      {/* logo */}
      <div className='flex gap-4 '>
        <div className='rounded-full w-4 h-4  bg-blue-600 opacity-75 hover:opacity-100 transition-opacity'></div>
       <div className='rounded-full w-4 h-4 -ml-5 bg-red-600 opacity-100 hover:opacity-75 transition-opacity'></div>
      </div>
      {/* mobilemenu button */}
      <button onClick={()=>setisMenu(!isMenu)} className='md:hidden p-2 ' >
       {
        !isMenu?<Menu className="size-7"/>:<X className='size-7' />
       }
      </button>
      {/* desktop navbar */}
      <div className='hidden md:flex gap-10 items-center'>
        {
          navlinks.map((item,id)=>(
            <ul key={id}  >
              <li  className=''><a onClick={()=>setactivelink(item.href)} className={`text-md font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${activelink===item.href ?"text-blue-600 after:w-full":"text-gray-600 hover:text-gray-900"}`} href={item.href}>{item.label}</a></li>
            </ul>
          ))
        }
      </div>
      {/* getin touch button */}
      <button className='hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shaow-blue-100'>Get In Touch</button>
      
     </div>
     {/* mobilemenu */}
        {
          isMenu  && (
            <div className='md:hidden bg-white border-t border-gray-100 py-8  '>
             <div className='contianer mx-auto px-4 space-y-4'>
               {
                navlinks.map((itm,id)=>(
                  <a  onClick={()=>{setactivelink(itm.href);
                    setisMenu(false)
                  }
                  }  className={`block px-4 py-4 ${activelink===itm.href?"text-blue-600 ":"text-gray-800"} font-medium text-sm`} key={id} href={itm.href}>{itm.label}</a>
                ))
              }
              <button className='w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shaow-blue-100'>Get In Touch</button>
             </div>
            </div>

          )
        }
    </nav>
  )
}

export default Navbar
