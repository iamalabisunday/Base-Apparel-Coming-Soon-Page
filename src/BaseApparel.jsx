import { useState } from "react";
import logo from "./images/logo.svg";
import DesktopImage from "./images/hero-desktop.jpg";
import MobileImage from "./images/hero-mobile.jpg";
import iconArrow from "./images/icon-arrow.svg";

export default function BaseApparel() {
  return (
    <main className="md:w-screen md:h-screen md:flex md:flex-row-reverse md:items-center md:justify-center md:bg-[url(./images/bg-pattern-desktop.svg)] md:bg-cover md:bg-no-repeat">
      {/* Logo for mobile view  */}
      <header className="p-8 w-full h-fit md:hidden">
        <img src={logo} alt="logo" className="w-[8rem]" />
      </header>
      {/* Hero Image For Small Screen Section */}
      <picture className="md:hidden">
        <img
          src={MobileImage}
          alt="hero image"
          className="object-cover w-full h-full"
        />
      </picture>
      {/* Hero Image For Lager Screen Section */}
      <picture className="hidden md:flex md:w-[100%] md:h-full md:justify-end">
        <img src={DesktopImage} alt="hero image" className="md:w-fit" />
      </picture>
      {/* Hero Text Section */}
      <section className="mt-[4rem] w-full flex flex-col items-center md:items-start justify-center text-center md:text-start">
        {/* Logo for desktop view  */}
        <header className="p-8 w-full h-fit hidden md:flex md:pl-[12rem] absolute md:top-6">
          <img src={logo} alt="logo" className="w-[30%] md:w-[9rem]" />
        </header>
        {/* Hero Text */}
        <h1 className="font-[600] uppercase text-4xl tracking-[0.5rem] text-[#3D3A3A] md:pl-[12rem] md:text-7xl">
          <span className="font-[300] text-[#DEA3A3]">We're</span>
          <br />
          coming <br /> soon
        </h1>
        <p className="w-[90%] text-[1rem] font-[350] mt-4 text-[#DEA3A3] md:pl-[12rem] md:max-w-[37rem] md:leading-[1.8rem]">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <article className="mt-6 mb-[4.5rem] w-[90%] md:w-[25rem] md:h-[3rem] flex items-center md:ml-[12rem] rounded-full border-1 border-[#DEA3A3] active:border-[#FB7D7D]">
          <input
            type="text"
            placeholder="Email Address"
            className="border-none w-full outline-none pl-5 pr-5 py-3 md:w-full placeholder:text-[0.85rem] placeholder:text-[#FFC8C8]"
          />
          <a
            href="#"
            className="pointer px-8 py-4 rounded-full flex items-center justify-center bg-[#FB7D7D]"
          >
            <img src={iconArrow} alt="arrow" className="w-full" />
          </a>
        </article>
      </section>
    </main>
  );
}
