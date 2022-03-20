import * as React from 'react';

export default function Disclaimer() {
    return (
        //-margin to prevent gap between hero 
        <p className="-mt-[19.5rem] md:-mt-72 text-xs px-2">
            Disclaimer: All views are my own any statistics gathered are freely available from thier corresponding sites.
            They are not studies I conducted and were up to date at time of review. Any media used was gathered under Creative Commons licensing and attributions have been included in the source code.
            For any discrepancies please contact me <a className="text-xs underline" href="https://mail.google.com/mail/?view=cm&fs=1&to=joshhaywood025@gmail.com">here.</a>
        </p>
    );
};