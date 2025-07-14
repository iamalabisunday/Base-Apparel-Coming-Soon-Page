import { useState } from "react";
import "./App.css";
import logo from "./images/logo.svg";
import DesktopImage from "./images/hero-desktop.jpg";
import MobileImage from "./images/hero-mobile.jpg";
import iconArrow from "./images/icon-arrow.svg";

export default function App() {
  return (
    <>
      <main className="w-screen h-screen flex flex-row items-start justify-between relative">
        <div className="w-[10%] h-fit flex justify-center flex-col absolute top-20 left-[16%]">
          <img src={logo} alt="logo" />
        </div>
        <section
          className="max-w-[calc(100%-35%)] h-full bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: "url('./src/images/bg-pattern-desktop.svg')",
            width: "100%",
          }}
        >
          <article className="pl-[25%] h-full flex flex-col justify-center">
            <h1 className="text-6xl uppercase w-2 tracking-[0.3em] font-[500] leading-[4rem]">
              <span className="font-[200] text-[hsl(0_36%_70%)]">We're</span>
              <br />
              coming soon
            </h1>
            <p className="mt-6 max-w-[50%] leading-8 text-[hsl(0_36%_70%)]">
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>
            {/* Input Section */}
            <article className="mt-8 flex flex-row justify-between items-center rounded-full border-1 border-[hsl(0_36%_70%)] w-[60%]">
              <input
                type="text"
                placeholder="Email Address"
                className="placeholder:text-[hsl(0_36%_70%)] placeholder:font-[200] px-[2rem] py-2 w-[60%] outline-none"
              />
              <a
                href="#"
                className="bg-[hsl(0_36%_70%)] px-[3rem] py-4 rounded-full pointer"
              >
                <img src={iconArrow} alt="Arrow Icon" />
              </a>
            </article>
          </article>
        </section>
        {/* image Section */}
        <section className="w-[35%] h-full flex justify-end bg-red-900">
          <img
            src={DesktopImage}
            alt="Hero-Image"
            className="object-cover w-full"
          />
        </section>
      </main>
    </>
  );
}

//  We're coming soon

//

//   Email Address
