import * as React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";

const content = [
    {link: '/review/elden-ring', name: 'Elden\nRing'},
    {link: '/review/', name: 'defg'},
    {link: '/review/', name: 'ghij'},
    {link: '/review/', name: 'jklm'},
]

export default function Search(event) {
    //For storing and setting search input
    const [query, setQuery] = useState("");
    
    //Clears search input and suggests on submit or suggestion click
    function clearSearch() {
        document.getElementById('searchInput').value = "";
        query.length = 0;
    }

    return (
        //Search input
        <div class="flex flex-col">
            <form class="text-black ml-5 py-0.5 lg:py-0 flex border-2 border-gray-400 rounded-md bg-white px-1">
                <input id="searchInput" class="focus:outline-none" type="text" placeholder="Search" name="search" onChange={event => {setQuery(event.target.value)}}/>
                
                <div class="flex mt-1.5"> {/* Flex container to align the icon and bar */}
                    <Link to="/error"> {/* Error handler as search is strick */}
                        <button type="submit" onClick={clearSearch}>
                            <svg class="fill-current h-auto w-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> {/* ! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                            <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
                            </svg>
                        </button>
                    </Link>
                </div>
            </form>

            {/* Search Suggestions */}
            <div class="ml-5 px-0.5">
                {/* Query must have length to prevent mapping by default */}
                {query.length > 0 && content.filter((content) => {
                    //If input return object
                    if (query == "") {
                        return content
                    }

                    //If any input characters much object characters return corresponding object
                    else if (content.name.toLowerCase().includes(query.toLocaleLowerCase())) {
                        return content
                    }

                })
                //Maps element based on the number of json objects
                .map((content) => {
                    return(
                        <div class="bg-white rounded-sm">
                            <Link to={content.link} onClick={clearSearch}><p>{content.name}</p></Link>
                        </div>
                    );
                })};
            </div>
        </div>
    );
};
