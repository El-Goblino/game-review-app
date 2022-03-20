import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Article(props) {
    return (
        <div class="my-5 mx-auto px-5 space-y-5 flex flex-col md:w-4/5 lg:w-3/5"> 
            {/* Return */}
            <div id="articleReturn" class="flex flex-row space-x-2">
                <Link to="/" class="text-red-500">Home</Link>
                    <svg class="h-4 mt-[0.3rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">{/*Attribution: ! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.*/}
                        <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/>
                    </svg>
                <Link to="/reviews" class="text-red-500">Reviews</Link>
            </div>

            <p>{props.paragraphOne}</p>
            <img src={props.imageOne} alt="Elden ring gameplay" class=""></img> {/* Attribution: https://www.trustedreviews.com/news/is-sure-sounds-like-elden-ring-will-be-adapted-for-tv-or-movies-4218187 */}

            <p>{props.paragraphTwo}</p>
            <img src={props.imageTwo} alt="Elden ring gameplay" class=""></img> {/* Attribution: https://www.trustedreviews.com/news/is-sure-sounds-like-elden-ring-will-be-adapted-for-tv-or-movies-4218187 */}

            {/* Scores */}
            <div class="flex flex-row items-center justify-between px-10 pt-5 border-t-2 border-red-500">
                <a title="CBS Interactive, Public domain, via Wikimedia Commons" href="https://www.metacritic.com/game/pc/elden-ring"> 
                    <img  class="w-1/2" alt="Metacritic logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Metacritic_logo.svg/512px-Metacritic_logo.svg.png"></img> {/* Attribution: https://commons.wikimedia.org/wiki/File:Metacritic_logo.svg */}
                </a>

                <h2 class="bg-green-500 text-white py-1.5 px-3 rounded-md">96</h2>
            </div>

            <div class="flex flex-row items-center justify-between px-10">
                <a title="Unknown authorUnknown author, Public domain, via Wikimedia Commons" href="https://store.steampowered.com/app/1245620/ELDEN_RING/">
                    <img class="w-1/2" alt="Steam logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Steam_logo.svg/512px-Steam_logo.svg.png"></img> {/* Attribution: https://commons.wikimedia.org/wiki/File:Steam_logo.svg */}
                </a>

                <h2 class="bg-green-500 text-white py-1.5 px-3 rounded-md whitespace-nowrap">Very Positive</h2>
            </div>

            <div class="flex flex-row items-center justify-between px-10 pb-5 border-b-2 border-red-500">
                <h1 class="font-bold hover:text-red-500">My Score:</h1>

                <h2 class="bg-green-500 text-white py-1.5 px-3 rounded-md">00</h2>
            </div>


            <p>{props.paragraphThree}</p>
        </div>
    );
};

