import React from 'react';

export const SvgAi = () => {
    return (
        <div>
            <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <circle cx="37.5" cy="37.5" r="32.5" fill="#D9D9D9"/>
            <circle cx="37.5" cy="37.5" r="32.5" fill="url(#pattern0_11_4077)"/>
            <circle cx="37.5" cy="37.5" r="32.5" stroke="white" stroke-width="10"/>
            <defs>
            <pattern id="pattern0_11_4077" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_11_4077" transform="translate(-0.0128205) scale(0.0042735)"/>
            </pattern>
            <image id="image0_11_4077" width="240" height="234" xlinkHref="data:image/png;base64,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"/>
            </defs>
            </svg>
        </div>
    );
};
