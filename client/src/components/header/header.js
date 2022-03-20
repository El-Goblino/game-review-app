import * as React from 'react';
import Search from './search';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  //State to toggle navlinks on small screens
  const [state, setState] = useState(false)

  return (
    <nav class=" w-full bg-red-500 shadow-lg relative max-h-[4.1rem]"> {/* Max height set to avoid search suggestions increasing header size */}
      <div class="flex justify-between py-3.5 w-full px-3 md:w-2/3 md:px-0  m-auto">
        {/* Logo */}
        <Link class="text-2xl font-semibold text-white hover:animate-pulse whitespace-nowrap"  to="/">GAME REVIEWS</Link>

        <div class="flex max-h-[3rem]"> {/* Container to prevent flex effecting both parents container */}
          {/* Links */}
          {!state && (
            <ul id="links" class=" h-40 lg:h-auto flex-col flex lg:flex-row absolute lg:relative mt-10 lg:mt-0 right-0 lg:right-auto px-10 lg:px-0 bg-red-500 rounded-lg lg:rounded-none shadow-sm lg:shadow-none">
              <li class="m-5 lg:my-0 lg:mx-5">
                <Link class="text-2xl text-white border-none hover:border-solid border-b-2 border-white" to="/">Home</Link>
              </li>
              <li class="m-5 lg:my-0 lg:mx-5">
                <Link class="text-2xl text-white border-none hover:border-solid border-b-2 border-white" to="/reviews">Reviews</Link>
              </li>
            </ul>
          )}

          {/* Search bar */}
          <Search />

          {/* Hamburger */}
          <div id="hamburger" onClick={() => setState(!state)} class=" space-y-2 ml-5 mt-2 block cursor-pointer lg:hidden">
            <div class="w-6 h-0.5 bg-white"></div>
            <div class="w-6 h-0.5 bg-white"></div>
            <div class="w-6 h-0.5 bg-white"></div>
          </div>
        </div>
      </div>
    </nav>
  )
}