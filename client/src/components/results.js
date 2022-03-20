import *  as React from 'react';
import { useParams } from "react-router-dom";
import { content } from "./reviews";
import { Link } from "react-router-dom";

export default function Results() {
    //Extracts ID from URL
    const {id} = useParams();

    //Maps element based index
    const items = content.map((content, index) =>
        index < 10 && (
            <Link to={content.link}>
                <a href={content.link}>
                    <div id="thumbnail" className="flex flex-row py-4 px-3 bg-white border-b-2 border-red-300 space-x-4">
                        <Link to={content.link} className="w-2/5 sm:w-1/3 lg:mr-0 rounded-sm">
                            <img src={content.image} alt="Review thumbnail"></img>
                        </Link>
                        <div className="md:flex md:flex-col space-y-2">
                            <h5 className="font-bold ">{content.heading}</h5>
                            <p>{content.text}</p>
                        </div>
                    </div>
                </a>
            </Link>
        )
    );

    return (
        <div className="mx-2 my-16 lg:w-[60%] lg:m-auto pt-0.5 lg:py-16 sm:px-3 bg-neutral-200">
            <h3 className="bg-red-500 font-bold text-white px-4 py-0.5">Showing results for: {id}</h3>

            {content
            //Filter through JSON
                .filter((content) => {
                    //If any input characters much object characters return corresponding object
                    if (
                        content.name.toLowerCase().includes(id.toLocaleLowerCase())
                    ) {
                        return items;
                    }
                })
                //Maps element based on the number of JSON objects
                .map((content) => {
                    return (
                        <div key={items}>{items}</div>
                    );
                })
            };
        </div>
    );
};
