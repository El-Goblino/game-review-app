import * as React from 'react';

function ScrollTop() {
  document.documentElement.scrollTop = 0; //Set scroll distance to 0
}

export default function Footer() {
  return (
		<footer class="left-0 bottom-0 w-full bg-neutral-700">
			<div class="flex flex-col md:flex-row justify-between m-auto p-1 w-4/6 md:border-t-2 border-white">
				<div class="flex flex-col text-center md:text-left border-t-2 md:border-0 border-white"> 
					<h4 class="text-red-400">Pages</h4>

					<a class="text-white hover:text-neutral-300 md:pt-2" href="/">Home</a>
					<a class="text-white hover:text-neutral-300 md:pt-2" href="/projects">Reviews</a>
				</div>

				<div class="flex flex-col text-center md:text-left mt-1 md:mt-0"> 
					<h4 class="text-red-400">Recent Reviews</h4>

					<a class="text-white hover:text-neutral-300" href="/portfolio-project">REVIEW 1</a>
					<a class="text-white hover:text-neutral-300" href="/arduino-project">REVIEW 2</a>
					<a class="text-white hover:text-neutral-300" href="/student-survival-store-project">REVIEW 3</a>
				</div>

				<div class="flex flex-col md:justify-end text-center md:text-left"> 
					<a class="text-white hover:text-neutral-300" href="#">REVIEW 4</a>
					<a class="text-white hover:text-neutral-300" href="#">REVIEW 5</a>
					<a class="text-white hover:text-neutral-300" href="#">REVIEW 6</a>
				</div>
			</div>

			<div class="flex py-1 w-4/6 m-auto justify-between border-t-2 border-white">
        <a className="text-white hover:text-red-400" href="https://www.joshhaywood-portfolio.com/">© Josh Haywood {new Date().getFullYear()}</a>

				<button className="text-white hover:text-red-400" onClick={ScrollTop}>Back to top ↑</button>
			</div>
    </footer>
  )
}