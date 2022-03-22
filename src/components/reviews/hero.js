import * as React from 'react';

export default function Hero(props) {
    return (
        <div className="relative bg-black z-100">
            {/* Image and not a background CSS image used here so the src can be made a prop to make it dynamic */}
            <img src={props.image} alt="Elden ring gameplay" className="object-cover w-screen h-[651px] opacity-80"></img> {/* Attribution: https://www.trustedreviews.com/news/is-sure-sounds-like-elden-ring-will-be-adapted-for-tv-or-movies-4218187 */}

            <div className="absolute top-[40%] px-5 md:px-32 space-y-2"> {/* Container for position text over image */}
                <h6 className="text-red-500 md:text-3xl">{props.tagline}</h6>
                <h1 className="text-white font-bold text-5xl md:text-7xl">{props.heading}</h1>
            </div>
        </div>
    );
}