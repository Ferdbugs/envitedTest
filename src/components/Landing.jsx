import { Link } from "react-router-dom";
import Event from "../assets/envitedImg.svg";
import React from "react";

const Pricing = () => {
  return (
    <div id="main" className="w-full bg-[#F6F2FF]">
      <div className="lg:grid grid-cols-2 w-full h-full mx-auto">
        <div className="flex flex-col justify-center items-center pt-4 antialiased lg:order-last">
          <h1 className="text-5xl font-semibold my-4">
            Imagine If <br />
            <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8]">
              Snapchat
            </span>
            <br /> had events.
          </h1>
          <p className="font-light text-slate-700 my-4">
            Easily host and share events with your friends <br /> accross any
            social media.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={Event} className="h-2/3 object-cover rounded-xl" alt="/" />
          <Link to="/create">
            <button className="p-4 my-4">🎉 Create My Event</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
