import React from 'react';
import useResponsive from '../../hooks/useResponsive';

// https://usehooks.com/useWindowSize/
const ResponsiveExampleThree = () => {
    const { windowSize, isDesktop, isMobile } = useResponsive();

    return (
        <div>
            <h1>Device Test!</h1>
            <p>Your resolution is: {windowSize.width}px</p>
            {isDesktop && (
                <>
                    <p>You are a desktop or laptop</p>
                </>
            )}
            {isMobile && <p>You are a tablet or mobile phone</p>}
        </div>
    );
};

export default ResponsiveExampleThree;
