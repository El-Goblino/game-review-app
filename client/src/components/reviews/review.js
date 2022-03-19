import * as React from 'react';
import { useParams } from "react-router-dom";
import Hero from './hero';

export default function Review() {

    const { id } = useParams();

    if(id === "elden-ring") {
        return (
            <Hero />
        );
    }
};