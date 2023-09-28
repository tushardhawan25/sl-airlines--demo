import React, { useState } from "react";

const Navbar = () => {
  const [mobileNavMenus, setmobileNavMenus] = useState(false);
  console.log(mobileNavMenus);
  return (
    <>
      <nav class="bg-white">
        <div class="mx-auto max-w-9xl px-3 sm:px-6 lg:px-9">
          <div class="relative flex h-16 items-center justify-between">
            <div class=" inset-y-0 flex items-center sm:hidden">
              <button
                onClick={() => setmobileNavMenus(!mobileNavMenus)}
                type="button"
                class="relative inline-flex items-center justify-center rounded-md p-2 text-blue-800 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open main menu</span>

                <svg
                  class="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  class="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="flex flex-0 items-center justify-center ">
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>

            <div class="flex flex-1 items-center justify-center sm:items-stretch xl:justify-center">
              <div class="hidden sm:ml-8 sm:block">
                <div class="flex space-x-10">
                  <a
                    href="#"
                    class="text-sky-600  hover:text-sky-800 rounded-md px-3 py-2 text-sm font-bold"
                  >
                    PLAN & BOOK
                  </a>
                  <a
                    href="#"
                    class="text-sky-600  hover:text-sky-800 rounded-md px-3 py-2 text-sm font-bold"
                  >
                    TRAVEL INFORMATION
                  </a>
                  <a
                    href="#"
                    class="text-sky-600  hover:text-sky-800 rounded-md px-3 py-2 text-sm font-bold"
                  >
                    EXPERIENCE
                  </a>
                  <a
                    href="#"
                    class="text-sky-600  hover:text-sky-800 rounded-md px-3 py-2 text-sm font-bold"
                  >
                    FLYSMILES
                  </a>
                </div>
              </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                class="relative rounded-full bg-white  p-2 text-black border-2 hover:text-white focus:outline-none focus:ring-3 focus:ring-black focus:ring-offset-2 "
              >
                <span class="absolute -inset-1.5"></span>
                <span class="sr-only">View notifications</span>
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>

              <div class="relative ml-3">
                <div>
                  <button
                  
                    type="button"
                    class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span class="absolute -inset-1.5"></span>
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {mobileNavMenus && (
          <div class="sm:hidden flex justify-center  " id="mobile-menu">
            <div class="space-y-1 px-2 pb-3 pt-2 transition ease-in-out delay-300 duration-300 hover:-translate hover:scale-100 ...">
              <a
                href="#"
                class="text-sky-600  hover:text-sky-800 block rounded-md px-3 py-2 text-base font-medium"
                aria-current="page"
              >
                Dashboard
              </a>
              <a
                href="#"
                class="text-sky-600  hover:text-sky-800 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Team
              </a>
              <a
                href="#"
                class="text-sky-600  hover:text-sky-800 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Projects
              </a>
              <a
                href="#"
                class="text-sky-600  hover:text-sky-800hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Calendar
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
export default Navbar;
