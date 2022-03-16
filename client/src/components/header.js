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
    <nav class=" w-full bg-neutral-400">
      <div class="container flex items-center justify-between px-3 py-2.5">
        <a class="text-2xl" href="/">Logo</a>

        <div id="hamburger" onClick={ToggleLinks} class="mb-1 space-y-2 block md:hidden">
          <div class="w-6 h-0.5 bg-black"></div>
          <div class="w-6 h-0.5 bg-black"></div>
          <div class="w-6 h-0.5 bg-black"></div>
        </div>

        <ul id="links" class="hidden md:flex">
          <li class="mx-1">
            <a class="text-2xl" href="/">Home</a>
          </li>
          <li class="mx-1">
            <a class="text-2xl" href="/reviews">Reviews</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}