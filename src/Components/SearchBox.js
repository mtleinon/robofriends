import React from 'react';

export const SearchBox = ({searchChange}) =>
    <div className='pa2'>
        <input aria-label='search robots'
               className='pa3 ba bg-light-yellow'
               type='search'
               placeholder='Search robots'
               onChange={searchChange}/>;
    </div>;