import * as React from 'react';
import Search from './search';

function ToggleLinks() {
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
    <nav class=" w-full bg-red-500 shadow-lg relative max-h-[4.1rem]"> {/* Max height set to avoid search suggestions increasing header size */}
      <div class="flex justify-between py-3.5 w-full px-3 md:w-2/3 md:px-0  m-auto">
        {/* Logo */}
        <a class="text-2xl font-semibold text-white hover:animate-pulse whitespace-nowrap"  href="/">GAME REVIEWS</a>


        <div class="flex max-h-[3rem]"> {/* Container to prevent flex effecting both parents container */}
          {/* Page links */}
          <ul id="links" class="hidden h-40 lg:h-auto flex-col lg:flex lg:flex-row absolute lg:relative mt-10 lg:mt-0 right-0 lg:right-auto px-10 lg:px-0 bg-red-500 rounded-lg lg:rounded-none shadow-sm lg:shadow-none">
            <li class="m-5 lg:my-0 lg:mx-5">
              <a class="text-2xl text-white border-none hover:border-solid border-b-2 border-white" href="/">Home</a>
            </li>
            <li class="m-5 lg:my-0 lg:mx-5">
              <a class="text-2xl text-white border-none hover:border-solid border-b-2 border-white" href="/reviews">Reviews</a>
            </li>
          </ul>

          {/* Search bar */}
          <Search />

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