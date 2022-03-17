import * as React from 'react';

function ToggleLinks() {
  let hamburger = document.getElementById('hamburger');
  let links = document.getElementById('links');

  if (window.getComputedStyle(links).display === 'none') {
    links.style.display = 'flex';
  }

  else {
    links.style.display = 'none';    
  }
};

export default function Header() {
  return (
    <nav class=" w-full bg-red-500 shadow-lg relative">
      <div class="flex justify-between py-3.5 w-full px-3 md:w-2/3 md:px-0  m-auto">
        {/* Logo */}
        <a class="text-2xl font-semibold text-white hover:animate-pulse whitespace-nowrap"  href="/">GAME REVIEWS</a>


        <div class="flex"> {/* Container to prevent flex effecting both parents container */}
          {/* Page links */}
          <ul id="links" class="hidden h-40 lg:h-auto flex-col lg:flex lg:flex-row absolute lg:relative mt-10 lg:mt-0 right-0 lg:right-auto px-10 lg:px-0 bg-red-500 rounded-lg lg:rounded-none shadow-sm lg:shadow-none">
            <li class="m-5 lg:my-0 lg:mx-5">
              <a class="text-2xl text-white border-none hover:border-solid border-b-2 border-white" href="/">Home</a>
            </li>
            <li class="m-5 lg:my-0 lg:mx-5">
              <a class="text-2xl text-white border-none hover:border-solid border-b-2 border-white" href="/reviews">Reviews</a>
            </li>
          </ul>

          <div class="flex">
            {/* Search bar */}
            <div class="text-black ml-5 py-0.5 lg:py-0 flex border border-gray-400 border-1 rounded-md bg-white px-1">
              <input class="focus:outline-none" placeholder="Search"/>
              
              <div class="flex"> {/* Flex container to align the icon and bar */}
                <button type="submit">
                  <svg class="fill-current h-auto w-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> {/* ! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                    <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Hamburger */}
          <div id="hamburger" onClick={ToggleLinks} class=" space-y-2 ml-5 mt-1.5 block cursor-pointer lg:hidden">
            <div class="w-6 h-0.5 bg-white"></div>
            <div class="w-6 h-0.5 bg-white"></div>
            <div class="w-6 h-0.5 bg-white"></div>
          </div>
        </div>
      </div>
    </nav>
  )
}