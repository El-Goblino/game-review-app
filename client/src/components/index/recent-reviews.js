import * as React from 'react';

//Maps element based on the number of json objects
const content = [
    {'image': './images/elden-ring-thumbnail.jpg', 'heading': 'text1', 'text': 'text1'},
    {'image': './images/elden-ring-thumbnail.jpg', 'heading': 'text1', 'text': 'text1'},
    {'image': './images/elden-ring-thumbnail.jpg', 'heading': 'text1', 'text': 'text1'},
    {'image': './images/elden-ring-thumbnail.jpg', 'heading': 'text1', 'text': 'text1'},
    {'image': './images/elden-ring-thumbnail.jpg', 'heading': 'text1', 'text': 'text1'},
    {'image': './images/elden-ring-thumbnail.jpg', 'heading': 'text1', 'text': 'text1'},
];

const items = content.map((content) =>
    <div class="flex flex-row lg:flex-col mx-5 lg:mx-2 lg:mt-0 my-5 pb-5 items-center md:items-start lg:bg-white border-b-2 border-red-300">
        <a href="#" class="w-[26%] lg:w-full mr-5 lg:mr-0 rounded-sm"><img src={content.image} alt="Lorem Impsum"></img></a>
        <div class="md:flex md:flex-col lg:px-3">
            <h6 class="font-bold lg:my-3">{content.heading}</h6>
            <p class="hidden md:block my-2 lg:my-0">{content.text}</p>
        </div>
    </div>
);

export default function RecentReviews() {
    return (
        <div class="mx-1 lg:w-[60%] lg:m-auto">
            <h3 class="bg-red-500 font-bold text-white my-5 lg:my-0 px-4 py-0.5">Recent Reviews</h3>

            <div class="lg:grid grid-cols-3 grid-row-2">
                <>{items}</>
            </div>
        </div>
    );
};