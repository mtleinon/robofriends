import React from 'react';

export const Scroll = ({children}) =>
        <div style={{overflowY: 'scroll',
                     border: '1px solid black',
                     height: '340px'}}>
            { children }
        </div>;