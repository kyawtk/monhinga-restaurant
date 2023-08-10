import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="py-[100px] sm:py-[150px] lg:py-[200px] bg-white innerWidth flex flex-col items-center justify-center gap-8 sm:gap-10 md:gap-[12] lg:gap-20 ">
      <h1 className="tracking-tight [word-spacing:20px] font-semibold leading-20 text-3xl sm:text-5xl md:text-[60px] lg:text-[80px] text-center">
        236 Shwedagon St. <br /> Yangon
      </h1>
      <div className="w-[90%] md:w-1/2 shadow-lg rounded-full">
        <img
          src="/monhinga.jpg"
          alt="monhinga noodle boul"
          className="w-full h-full object-contain"
        />
      </div>
      <h1 className="tracking-tight [word-spacing:20px] leading-2 text-3xl sm:text-5xl md:text-[60px] lg:text-[80px] text-center font-semibold">
        6:00 AM to 10:00 PM <br />
        Everyday
      </h1>
      
    </section>
  );
}
