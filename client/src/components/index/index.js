import * as React from 'react';
import Hero from './hero';
import Disclaimer from './disclaimer';
import Featured from './featured';
import RecentReviews from './recent-reviews';

export default function Index() {
    return (
        <>
            <Hero />
            <Disclaimer />
            <Featured />
            <RecentReviews />
        </>
    );
};