import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-900 overflow-hidden  ">
      <div class="flex flex-row flex-wrap text-white text-sm justify-around w-screen p-4 ">
        <div>
         <div className="font-bold">ABOUT US</div>
          <div className="mt-8">About SriLankan Airlines</div>
          <div className="mt-3">Right to Information Act</div>
          <div className="mt-3">Tender and GSA notices</div>
          <div className="mt-3">Advertise with us</div>
          <div className="mt-3">Sri lanka Tourism</div>
          <div className="mt-3">Media Center</div>
          <div className="mt-3">Careers</div>
        </div>
        <div>
        <div className="font-bold">HELP</div>
          <div className="mt-8">About SriLankan Airlines</div>
          <div className="mt-3">24 Hours Contact Center</div>
          <div className="mt-3">Online Chat Support</div>
          <div className="mt-3">FAQs</div>
          <div className="mt-3">SRI LANKAN DIRECT CONNECT</div>
          <div className="mt-3">Agent Registration</div>
        </div>
        <div>
        <div className="font-bold">ABOUT US</div>
          <div className="mt-8">MICE</div>
          <div className="mt-3">Cargo</div>
          <div className="mt-3">Training</div>
          <div className="mt-3">Ground Handling</div>
          <div className="mt-3">SriLankan Holidays</div>
          <div className="mt-3">SriLankan Catering</div>
        </div>
        <div>
        <div className="font-bold">TERMS & CONDITIONS</div>
          <div className="mt-8">Online Booking Terms of Use</div>
          <div className="mt-3">Conditionss of Carrige</div>
          <div className="mt-3">Notices for travel Agents</div>
          <div className="mt-3">Permissions Center</div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap lg:ml-10 lg:p-4 ">
        <div >
          <label
            for="small-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            SUBSCRIBE TO SPECIAL OFFERS
          </label>
        </div>
        <div className="flex flex-row flex-wrap">
          <div>
            <input
              type="text"
              id="small-input"
              class="block w-80 p-2 text-gray-900 border border-gray-300 rounded-lg bg-white-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter email address"
            />
          </div>
          <div>
            <input
              type="text"
              id="small-input"
              class="block w-80 p-2 ml-2 text-gray-900 border border-gray-300 rounded-lg bg-white-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Select departure"
            />
          </div>
          <div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded lg:ml-5">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
