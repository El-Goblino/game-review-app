import * as React from 'react';

export default function Error() {
    return (
        <div class="flex flex-col text-center justify-center h-screen space-y-8">
            <h1 class="text-red-500 text-6xl">This page does not exist</h1>
            <h5>The page you were looking for does not exist or has been remove</h5>
            <a href="/"><button class="bg-red-500 py-2 px-3.5 rounded-md text-white hover:bg-red-400">Return</button></a>
        </div>
    );
};