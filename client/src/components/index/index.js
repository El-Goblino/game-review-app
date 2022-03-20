import * as React from 'react';
import Hero from './hero';
import Disclaimer from './disclaimer';
import Featured from './featured';
import RecentReviews from './recent-reviews';

export default function Index() {
    return (
        <>
            <Hero />
            <div class="md:w-4/5 lg:w-3/5 mx-auto">
                <Disclaimer />
                <Featured />
                <RecentReviews />
            </div>
        </>
    );
};