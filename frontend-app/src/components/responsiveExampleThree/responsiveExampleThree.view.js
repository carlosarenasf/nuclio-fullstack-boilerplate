import React from 'react';
import useResponsive from '../../hooks/useResponsive';

//

const ResponsiveExampleThree = () => {
    const { windowSize, isDesktop, isMobile, isSmallDesktop } = useResponsive();

    return (
        <div>
            <h1>Device Test!</h1>
            <p>Your resolution is: {windowSize.width}px</p>
            {isDesktop && (
                <>
                    <p>You are a desktop or laptop</p>
                </>
            )}

            {isSmallDesktop && <p>You are smal desktop</p>}
            {isMobile && <p>You are a tablet or mobile phone</p>}
        </div>
    );
};

export default ResponsiveExampleThree;
