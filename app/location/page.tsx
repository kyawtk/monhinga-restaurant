import React from "react";

const Location = () => {
  return (
    <section className="innerWidth bg-white flex flex-col items-center justify-center gap-20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d122195.30309950892!2d96.16424959999999!3d16.846028799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smm!4v1691646436095!5m2!1sen!2smm"
        width='100%'
        height="450"
        style={{border:'0'}}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
       <h1 className="tracking-tight [word-spacing:20px] font-semibold leading-20 text-3xl sm:text-5xl md:text-[60px] lg:text-[80px] text-center">
        236 Shwedagon St. <br /> Yangon
      </h1>
      <div className="md:w-[30%] w-[50%]">
        <img src="/noodles.png" alt="logo" className="w-full h-full object-contain" />
      </div>
      <h1 className="tracking-tight [word-spacing:20px] leading-2 text-3xl sm:text-5xl md:text-[60px] lg:text-[80px] text-center font-semibold">
        6:00 AM to 10:00 PM <br />
        Everyday
      </h1>
    </section>
  );
};

export default Location;
