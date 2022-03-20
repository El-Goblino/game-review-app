import *  as React from 'react';
import { useParams } from "react-router-dom";

export default function Results() {
    const {search} = useParams();

    return (
        <h1>Showing results for: {search}</h1>
    );
};
