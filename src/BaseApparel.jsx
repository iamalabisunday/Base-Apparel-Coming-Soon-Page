import { useState } from "react";
import logo from "./images/logo.svg";
import DesktopImage from "./images/hero-desktop.jpg";
import MobileImage from "./images/hero-mobile.jpg";
import iconArrow from "./images/icon-arrow.svg";

export default function BaseApparel() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isValid, setIsValid] = useState(false); // To track overall validity

  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate as the user types
  const handleEmailChange = (event) => {
    const newEmail = event.target.value; // Corrected: Get value from event
    setEmail(newEmail); // Corrected: Update email state

    if (newEmail === "") {
      setErrorMessage(""); // Clear error if field becomes empty
      setIsValid(false);
    } else if (!emailRegex.test(newEmail)) {
      // Corrected: .test() method
      setErrorMessage("The email address is not formatted correctly"); // More specific message
      setIsValid(false);
    } else {
      setErrorMessage(""); // Clear error if format becomes correct
      setIsValid(true);
    }
  };

  // Submit-handler for the form
  const handleSubmit = (event) => {
    event.preventDefault(); // Always prevent default form submission

    // Perform final validation on submit
    if (email === "") {
      setErrorMessage("Email address cannot be empty."); // Specific error for empty
      setIsValid(false);
      return; // Stop submission
    } else if (!emailRegex.test(email)) {
      // Corrected: .test() method
      setErrorMessage("The email address is not formatted correctly"); // Specific error for format
      setIsValid(false);
      return; // Stop submission
    }

    // If we reach here, the email is valid and not empty
    setErrorMessage(""); // Clear any lingering error message
    setIsValid(true);
    console.log("Email submitted successfully:", email);

    // --- Here you would typically send the email to your backend/API ---

    // Clear the input field after successful submission
    setEmail("");
  };

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
      {/* Hero Image For Larger Screen Section */}
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
        {/* Input and Button Section */}
        <form
          // Corrected: onSubmit calls handleSubmit
          onSubmit={handleSubmit}
          className="mt-6 mb-[4.5rem] w-[90%] md:w-[25rem] md:h-[3rem] flex items-center md:ml-[12rem] rounded-full border-1 active:border-[#FB7D7D] hover:border-[#FB7D7D] relative"
          // Conditional border color based on error state
          style={{ borderColor: errorMessage ? "#FB7D7D" : "#DEA3A3" }} // Using style for dynamic border color
        >
          <input
            type="email"
            id="emailInput"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email Address"
            className="border-none w-full outline-none pl-5 pr-5 py-3 md:w-full placeholder:text-[0.85rem] placeholder:text-[#FFC8C8] rounded-full"
            // Adding red text and focus ring for error
            style={{ color: errorMessage ? "#FB7D7D" : "" }} // Text color for error
          />
          {/* Corrected: This should be a <button type="submit"> */}
          <button
            type="submit" // IMPORTANT: This makes it a submit button for the form
            aria-label="Submit" // For accessibility since there's no visible text
            // Styling and positioning for the arrow button
            className="px-8 py-4 rounded-full flex items-center justify-center bg-[#FB7D7D] hover:bg-[#fd8e8e] transition-colors duration-200"
          >
            <img src={iconArrow} alt="arrow" className="w-full" />
          </button>

          {/* Error Message Display */}
          {errorMessage && (
            <p className="absolute -bottom-8 left-0 text-[#FB7D7D] text-xs md:text-sm pl-5 font-semibold">
              {errorMessage}
            </p>
          )}
        </form>
      </section>
    </main>
  );
}
