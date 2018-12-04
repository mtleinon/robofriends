import React from 'react';

export const Card = ({id, name, email}) =>
    <div className='tc bg-lightest-blue br3 pa3 dib ma2 grow bw2 shadow-5'>
        <img src={`https://robohash.org/${id}?size=200x200`} alt='robots'/>
        <div>
            <h2>{id}. {name}</h2>
            <p>{email}</p>
        </div>
    </div>;
