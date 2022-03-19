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
    <div class="flex flex-row py-4 bg-white border-b-2 border-red-300 space-x-4">
        <a href="#" class="w-[26%] lg:mr-0 rounded-sm"><img src={content.image} alt="Lorem Impsum"></img></a>
        <div class="md:flex md:flex-col space-y-2">
            <h5 class="font-bold ">{content.heading}</h5>
            <p>{content.text}</p>
        </div>
    </div>
);

export default function Reviews() {
    return(
        <div class="mx-2 my-16 lg:w-[60%] lg:m-auto pt-0.5 lg:py-16 px-3 bg-neutral-200 ">
            <h3 class="bg-red-500 font-bold text-white px-4 py-0.5">Reviews</h3>

                <>{items}</>
        </div>
    );
};