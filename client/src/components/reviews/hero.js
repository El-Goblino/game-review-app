import * as React from 'react';

export default function Hero() {
    return (
        <div class="w-full h-screen"> {/* Parent prevents background from shrinking */}
            <div class="bg-no-repeat bg-cover h-4/6 bg-hero-background flex flex-col px-5 md:px-32 pb-16 md:pb-10 justify-center">
                <h5 class="text-white md:text-3xl">My reviews on the</h5>
                <h1 class="text-white font-bold my-2 md:my-4 text-5xl md:text-7xl">Latest Games Released</h1>
            </div>
        </div>
    );
}