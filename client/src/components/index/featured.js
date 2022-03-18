import * as React from 'react';

export default function Featured() {
    return (
        <div>
            <h1 class="font-bold text-white mt-5 md:mt-9 bg-red-500 px-2 md:w-4/5 md:m-auto">Featured</h1>
            {/* Thumbnails */}
            <div class="flex flex-col">
                <div class="my-1 px-1 flex flex-col md:w-4/5 md:m-auto">
                    <img src="./images/elden-ring-thumbnail.jpg" alt="Thumbnail of Elden ring gameplay"></img> {/* Attribution: https://www.trustedreviews.com/news/is-sure-sounds-like-elden-ring-will-be-adapted-for-tv-or-movies-4218187 */}
                    <p class="bg-neutral-900 text-white py-1 px-2 font-semibold">Elden ring game of the year contender?</p>
                </div>

                {/* Container for row flexing on medium screens */}
                <div class="md:flex md:flex-row md:m-auto md:my-4 md:justify-center md:space-x-3 md:w-4/5">
                    <div class="my-1 px-1 flex flex-col">
                        <img src="./images/elden-ring-thumbnail.jpg" alt="Lorem Ipsum"></img> {/* Attribution: https://www.trustedreviews.com/news/is-sure-sounds-like-elden-ring-will-be-adapted-for-tv-or-movies-4218187 */}
                        <p class="bg-neutral-900 text-white py-1 px-2 font-semibold">Lorem Ipsum</p>
                    </div>

                    <div class="my-1 px-1 flex flex-col">
                        <img src="./images/elden-ring-thumbnail.jpg" alt="Lorem Ipsum"></img> {/* Attribution: https://www.trustedreviews.com/news/is-sure-sounds-like-elden-ring-will-be-adapted-for-tv-or-movies-4218187 */}
                        <p class="bg-neutral-900 text-white py-1 px-2 font-semibold">Lorem Ipsum</p>
                    </div>
                </div>
            </div>
        </div>
    );
};