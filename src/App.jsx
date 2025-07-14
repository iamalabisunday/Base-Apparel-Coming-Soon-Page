import { useState } from "react";
import "./App.css";
import logo from "./images/logo.svg";
import DesktopImage from "./images/hero-desktop.jpg";
import MobileImage from "./images/hero-mobile.jpg";
import backgroundPattern from "./images/bg-pattern-desktop.svg";
import iconArrow from "./images/icon-arrow.svg";

export default function App() {
  return (
    <>
      <main className="w-screen h-screen flex flex-row items-start justify-between relative">
        <div className="w-[10%] h-fit flex justify-center flex-col absolute top-20 left-40">
          <img src={logo} alt="logo" />
        </div>
        <section
          className="ml-40 w-full h-full flex flex-col justify-center"
          style={{
            backgroundImage: `url(${backgroundPattern})`,
          }}
        >
          <h1 className="text-6xl uppercase w-2 tracking-[0.3em] font-[500] leading-[4rem]">
            <span className="font-[200] text-[hsl(0_36%_70%)]">We're</span>
            <br />
            coming soon
          </h1>
          <p className="mt-6 max-w-[70%] leading-8 text-[hsl(0_36%_70%)]">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          {/* Input Section */}
          <article className="mt-8 flex flex-row justify-between items-center rounded-full border-1 border-[hsl(0_36%_70%)]">
            <input
              type="text"
              placeholder="Email Address"
              className="placeholder:text-[hsl(0_36%_70%)] placeholder:font-[200] px-[2.5rem] py-4  w-[60%]"
            />
            <a href="#">
              <img
                src={iconArrow}
                alt="Arrow Icon"
                className="bg-[hsl(0_36%_70%)] px-[2.5rem] py-4 rounded-full top-[6%] right-[0%] pointer"
              />
            </a>
          </article>
        </section>
        {/* image Section */}
        <section className="w-full h-full flex justify-end">
          <img src={DesktopImage} alt="Hero-Image" />
        </section>
      </main>
    </>
  );
}

//  We're coming soon

//

//   Email Address
