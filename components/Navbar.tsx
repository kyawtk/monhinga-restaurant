"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { FaBars, FaCross } from "react-icons/fa";
Link;
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="bg-white py-5 rounded-tl-md rounded-tr-md relative innerWidth ">
      <nav className="px-3 sm:px-10 md:px-20 flex justify-between items-center">
        <div className="uppercase font-semibold tracking-tighter md:flex gap-10 hidden ">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/chef">Chef</Link>
        </div>
        <Link href='/'>
          <div className="w-[200px]">
            <img
              src="/noodles.png"
              className="w-full h-full object-contain"
            ></img>
          </div>{" "}
        </Link>
        <div
          className=" md:hidden text-2xl  mr-5"
          onClick={(e) => setNavOpen(true)}
        >
          <FaBars></FaBars>
        </div>
        <div className="uppercase font-semibold tracking-tighter md:flex gap-10 hidden">
          <Link href="/reservations">Reservations</Link>
          <Link href="/location">Location</Link>
        </div>
      </nav>
      <AnimatePresence>
        {navOpen && (
          <motion.div
            transition={{ type: "tween", duration: 0.4 }}
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            exit={{ x: 700 }}
            className="absolute bg-[#FFE500] top-0 w-full h-screen"
          >
            <nav className="px-3 sm:px-10 md:px-20 flex flex-row gap-5  ">
              <div
                className="text-2xl bg-white h-fit p-5 font-bold"
                onClick={() => setNavOpen(false)}
              >
                X
              </div>
              <div
                className="mt-20 uppercase font-semibold text-2xl flex flex-col  tracking-tighter gap-10  "
                onClick={() => setNavOpen(false)}
              >
                <Link href="/">Home</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/chef">Chef</Link>

                <Link href="/reservations">Reservations</Link>
                <Link href="/location">Location</Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
