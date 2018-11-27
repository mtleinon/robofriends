import React from 'react';
import { Card } from "./Card";

export const CardList = ({robots}) =>
    <div>
        {
            robots.map((robot) =>
                    <Card key={robot.id} id={robot.id}
                    name={robot.name} email={robot.email}/>
            )
        }
    </div>;
