import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <div className="flex flex-col text-center justify-center h-screen space-y-8 pb-20"> {/* Padding to negate headers margin */}
            <h1 className="text-red-500 text-6xl">This page does not exist</h1>
            <h5>The page you were looking for does not exist or has been remove</h5>
            <Link to="/"><button className="bg-red-500 py-2 px-3.5 rounded-md text-white hover:bg-red-400">Return</button></Link>
        </div>
    );
};