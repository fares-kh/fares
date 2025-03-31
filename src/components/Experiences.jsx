import React from 'react';
import {styled} from 'styled-components';

import ExpandArrow from '../assets/icons/expand-arrow.svg?react';

const ExperiencesSection = styled.div`
    display: grid;
    gap: 2.5rem;
`;

const Subheader = styled.h2`
    color: #a4d8f4;
    font-family: 'Ginto', Helvetica, sans-serif;
    font-size: 12px;
    margin: 0 0 12px 0;
`;

const Experience = styled.p`
    color: #cccccc;
    font-family: 'Oracle', Helvetica, sans-serif;
    font-size: 16px;
    line-height: 125%;
    padding-bottom: 1vw;
    cursor: pointer;
    transition: color 0.2s ease;

    /* &:hover {
        background: linear-gradient(20deg, rgba(16,15,13,0) 45%, rgba(33,33,33,1) 65%, rgba(16,15,13,0) 85%);
    } */
`;

const Experiences = () => {
    const experiences = [
        { company: 'The Hut Group', period: "Sep '21 – Present" },
        { company: 'Dartford FC', period: "Sep '17 – Aug '21" },
        { company: 'Pearl Lemon Official', period: "May '20 – Oct '20" },
    ];

    // Event handler to log company details when clicked
    const handleClick = (company) => {
        console.log('Experience clicked:', company);
    };

    return (
        <div style={{paddingBottom: '1vw'}}>
            <Subheader>BACKGROUND</Subheader>
            <ExperiencesSection>
                {experiences.map((exp, index) => (
                    <Experience key={index} onClick={() => handleClick(exp.company)} style={{ cursor: 'pointer' }}>
                        {exp.company}<br />
                        {exp.period}
                        <ExpandArrow viewBox="0 0 24 24" style={{ fill: '#ffffff', width: '16px', height: '16px'}}/>
                    </Experience>
                ))}
            </ExperiencesSection>
        </div>
    );
};

export default Experiences;