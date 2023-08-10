import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
  <footer className='flex flex-col items-center justify-center gap-10 bg-white pb-20 rounded-bl-md rounded-br-md'>
    <div className="uppercase flex flex-wrap gap-5  mt-[200px] text-2xl justify-center ">
        <Link className="underline decoration-slate-500" href="/menu">
          Menu
        </Link>
        -
        <Link className="underline decoration-slate-500" href="/chef">
          Chef
        </Link>
        -
        <Link className="underline decoration-slate-500" href="/reservations">
          Reservations
        </Link>
        -
        <Link className="underline decoration-slate-500" href="/location">
          Location
        </Link>
      </div>
      <p className="text-3xl underline decoration-amber-400">+95942069100</p>
      <p className="text-gray-600">
        Developed with 💖
        <a className="font-bold" href="https://github.com/kyawtk">
          {" "}
          by Kyaw Thant Khine
        </a>
      </p>
  </footer>
  )
}

export default Footer