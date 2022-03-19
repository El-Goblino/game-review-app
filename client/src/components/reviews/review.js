import * as React from 'react';
import { useParams } from "react-router-dom";
import Error from '../error';
import Hero from './hero';

export default function Review() {

    //Gets id from URL
    const {id} = useParams();

    //Cases for id
    switch (id) {
        case 'elden-ring':
            return (
                //Returns component with assigned props
                <Hero image={"../images/elden-ring-thumbnail.jpg"} tagline={"From Software"} heading={"Elden Ring"} />
            );

        default:
            //Defaults error handler
            return <Error />
    }
};