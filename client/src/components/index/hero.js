import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <div class="w-full h-screen"> {/* Parent prevents background from shrinking */}
            <div class="bg-no-repeat bg-cover h-4/6 bg-hero-background flex flex-col px-5 md:px-32 pb-16 md:pb-10 justify-center">
                <h5 class="text-white md:text-3xl">My reviews on the</h5>
                <h1 class="text-white font-bold my-2 md:my-4 text-5xl md:text-7xl">Latest Games Released</h1>
                <Link to="/reviews"><button class="text-white flex mt-3 bg-red-500 ease-in-out duration-300 hover:bg-red-400 rounded-md whitespace-nowrap py-1 md:py-2 px-2 md:px-4 w-fit md:text-2xl">Read my recent reviews</button></Link> {/* Flex to align with other headings */}
            </div>
        </div>
    );
}