import React from "react";
import SliderImage from "../../assets/ExpSlider6.jpg";

const Cards = ({src,title}) => {
  return (
    <div class="flex flex-col lg:flex-row bg-gray-100  m-2 bg-white border border-gray-200 rounded-lg shadow-md text-black  ">
      <div href="#">
        <img
          class="rounded-t-lg hover:scale-105 transition-all duration-500 h-full object-cover "
          src={src}
          alt=""
        />
      </div>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-sky-800 ">
            {title}
          </h5>
        </a>
        <p class="mb-3 font-normal text-black">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <a
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Book Now
          <svg
            class="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
export default Cards;
