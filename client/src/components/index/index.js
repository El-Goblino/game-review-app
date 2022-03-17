import * as React from 'react';
import Hero from './hero';
import Disclaimer from './disclaimer';
import Featured from './featured';

export default function Index() {
    return (
        <>
            <Hero />
            <Disclaimer />
            <Featured />
        </>
    );
};