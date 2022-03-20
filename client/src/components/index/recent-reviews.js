import * as React from 'react';
import { Link } from "react-router-dom";
import { content } from '../reviews';

export default function RecentReviews() {
    //Maps element based on index
    const items = content.map((content, index) =>
        index < 6 && (
            <Link to={content.link}>
                {/* Review thumbnail */}
                <div id="thumbnail" className="flex flex-row lg:flex-col mx-5 lg:mx-2 lg:mt-0 my-5 pb-5 items-center md:items-start lg:bg-white border-b-2 border-red-300">
                    <a href="#" className="w-[26%] lg:w-full mr-5 lg:mr-0 rounded-sm">
                        <img src={content.image} alt="Lorem Impsum"></img>
                    </a>

                    <div className="md:flex md:flex-col lg:px-3">
                        <h6 className="font-bold lg:my-3">{content.heading}</h6>
                        <p className="hidden md:block my-2 lg:my-0">{content.text}</p>
                    </div>
                </div>
            </Link>
        )
    );

    return (
        <div className="pb-10 pt-0.5 bg-neutral-200 px-3">
            <h3 className="bg-red-500 font-bold text-white my-5 lg:my-0 px-4 py-0.5">Recent Reviews</h3>

            <div className="lg:grid grid-cols-3 grid-row-2" key={items}>{items}</div>
        </div>
    );
};