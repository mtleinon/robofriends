import React from 'react';
import {Card} from "./Card";

export const CardList = ({robots}) =>
    <div>
        {
            robots.map((r) =>
                <Card key={r.id} id={r.id} name={r.name} email={r.email}/>)
        }
    </div>;
