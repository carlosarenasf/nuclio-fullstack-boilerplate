import React from 'react';
import { useMediaQuery } from 'react-responsive/src';
import MediaQuery from 'react-responsive/src/Component';

// https://www.npmjs.com/package/react-responsive

const ResponsiveExampleTwo = ({ desktop, mobile }) => {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1224px)',
    });
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    return (
        <div>
            <h1>Device Test!</h1>
            {isDesktop && (
                <>
                    <p>You are a desktop or laptop</p>
                </>
            )}
            {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
            <MediaQuery minWidth={1224}>
                <p>Media query MIN width 1224 px</p>
            </MediaQuery>
            <MediaQuery maxWidth={1224}>
                <p>Media query MAX width 1224 px</p>
            </MediaQuery>
        </div>
    );
};

export default ResponsiveExampleTwo;
