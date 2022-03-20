import * as React from 'react';
import { Link } from "react-router-dom";

//Maps element based on the number of json objects
const content = [
    {link: "/review/elden-ring", image: './images/elden-ring-thumbnail.jpg', heading: 'text1', text: 'text1'},
    {link: "/review/elden-ring", image: './images/elden-ring-thumbnail.jpg', heading: 'text1', text: 'text1'},
    {link: "/review/elden-ring", image: './images/elden-ring-thumbnail.jpg', heading: 'text1', text: 'text1'},
    {link: "/review/elden-ring", image: './images/elden-ring-thumbnail.jpg', heading: 'text1', text: 'text1'},
    {link: "/review/elden-ring", image: './images/elden-ring-thumbnail.jpg', heading: 'text1', text: 'text1'},
    {link: "/review/elden-ring", image: './images/elden-ring-thumbnail.jpg', heading: 'text1', text: 'text1'},
    {link: "/review/elden-ring", image: './images/elden-ring-thumbnail.jpg', heading: 'text1', text: 'text1'},
    {link: "/review/elden-ring", image: './images/elden-ring-thumbnail.jpg', heading: 'text1', text: 'text1'},
    {link: "/review/elden-ring", image: './images/elden-ring-thumbnail.jpg', heading: 'text1', text: 'text1'},
];

const items = content.map((content) =>
    <Link to={content.link}>
        <a href={content.link}>
            <div id="thumbnail" className="flex flex-row py-4 px-3 bg-white border-b-2 border-red-300 space-x-4">
                <a href="#" className="w-2/5 sm:w-1/3 lg:mr-0 rounded-sm"><img src={content.image} alt="Lorem Impsum"></img></a>
                <div className="md:flex md:flex-col space-y-2">
                    <h5 className="font-bold ">{content.heading}</h5>
                    <p>{content.text}</p>
                </div>
            </div>
        </a>
    </Link>
);

export default function ReviewsPage() {
    return(
        <div className="mx-2 my-16 lg:w-[60%] lg:m-auto pt-0.5 lg:py-16 sm:px-3 bg-neutral-200">
            <h3 className="bg-red-500 font-bold text-white px-4 py-0.5">Reviews</h3>

            <>{items}</>
        </div>
    );
};