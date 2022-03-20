import * as React from 'react';
import { Link } from "react-router-dom";
import { content } from '../reviews';

export default function Featured() {
    //Maps element based on index
    const items = content.map((content, index) =>
        index < 2 && (
            <Link to={content.link}>
                <div id="thumbnail" className="my-1 px-5 md:px-0 flex flex-col">
                    <img src={content.image} alt="Lorem Ipsum"></img> {/* Attribution: https://www.trustedreviews.com/news/is-sure-sounds-like-elden-ring-will-be-adapted-for-tv-or-movies-4218187 */}
                    <h6 className="bg-neutral-900 text-white py-1 px-2 font-semibold">{content.heading}</h6>
                </div>
            </Link>
        )
    );

    return (
        <div className="items-center xs:mx-2 bg-neutral-200 md:px-5">
            <h1 className="font-bold text-white mt-5 md:mt-9 bg-red-500 px-5 mx-1 md:px-3 md:m-auto">Featured</h1>
            {/* Thumbnails */}
            <div className="flex flex-col md:mt-5">
                <a href="/review/elden-ring">
                    <div id="thumbnail" className="my-1 px-5 md:px-0 flex flex-col">
                        <img src="./images/elden-ring-thumbnail.jpg" alt="Thumbnail of Elden ring gameplay"></img> {/* Attribution: https://www.trustedreviews.com/news/is-sure-sounds-like-elden-ring-will-be-adapted-for-tv-or-movies-4218187 */}
                        <h6 className="bg-neutral-900 text-white py-1 px-2 font-semibold">Elden ring game of the year contender?</h6>
                    </div>
                </a>

                <div className="md:flex md:flex-row md:m-auto md:my-4 md:justify-center md:space-x-3" key={items}>{items}</div>div>
            </div>
        </div>
    );
};