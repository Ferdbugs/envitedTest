import React from "react";
import { useLocation } from "react-router-dom";
import Cake from "../assets/birthdaycake.png";
import { Link } from "react-router-dom";

const Event = (props) => {
  const data = props.location.state;
  console.log(data);
  return (
    <div className="w-full bg-white grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col justify-center items-center order-last">
        <img
          src={Cake}
          className="h-2/3 xm:max-w-[300px] md:max-w-[500px] lg:max-w-[700px]  object-cover rounded-xl "
          alt="/"
        />
      </div>
      <div className="flex flex-col justify-center items-center antialiased">
        <p className="uppercase font-bold text-3xl tracking-widest text-[#240D57] sm:mr-64 lg:mr-2">
          {data[0].eventName}
        </p>
        <p className="text-sm tracking-widest text-slate-600 sm:mr-52 lg:mr-2">
          Hosted By: {data[0].hostName}
        </p>
        <div className="flex mt-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
            />
          </svg>
          <span className="px-4">
            {data[0].startDate} to {data[0].endDate}
          </span>
        </div>
        <div className="flex mt-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>

          <span className="px-4">{data[0].eventAddress}</span>
        </div>
        <div className="max-w-[400px] p-4">
          <p className="text-xl py-4 tracking-widest text-slate-700">
            {data[0].eventDescription}
          </p>
        </div>
        <Link to={{ pathname: "/" }}>
          <button className="p-4 text-gray-100 mt-4">Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Event;
