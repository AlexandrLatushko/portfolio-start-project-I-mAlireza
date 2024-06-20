// @flow 
import * as React from 'react';
type Props = {
    
};
export const SvgFigma = (props: Props) => {
    return (
        <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
            <circle cx="37.5" cy="37.5" r="32.5" fill="#D9D9D9"/>
            <circle cx="37.5" cy="37.5" r="32.5" fill="url(#pattern0_11_4085)"/>
            <circle cx="37.5" cy="37.5" r="32.5" fill="url(#pattern1_11_4085)"/>
            <circle cx="37.5" cy="37.5" r="32.5" stroke="white" stroke-width="10"/>
            <defs>
            <pattern id="pattern0_11_4085" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_11_4085" transform="translate(-0.0128205) scale(0.0042735)"/>
            </pattern>
            <pattern id="pattern1_11_4085" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image1_11_4085" transform="translate(-0.0128205) scale(0.0042735)"/>
            </pattern>
            <image id="image0_11_4085" width="240" height="234" xlinkHref="data:image/png;base64,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"/>
            <image id="image1_11_4085" width="240" height="234" xlinkHref="data:image/png;base64,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"/>
            </defs>
        </svg>

    );
};