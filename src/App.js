import React from 'react';
import Accordion from  './components/Accordion.js';

const items  = [
    {
        title: 'What is react?2',
        content: 'Blanedendedned e duende db ewdebd '
    },
    {
        title: 'What is react?3',
        content: 'Blanedendedned e duende db ewdebd '
    },
    {
        title: 'What is react?4',
        content: 'Blanedendedned e duende db ewdebd '
    }
];

export default () => {
    return <div>
        <Accordion items={items}/>
    </div>;
};

