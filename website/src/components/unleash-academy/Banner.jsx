import React from 'react';

const LinkBox = ({ level, header, description, link }) => {
    return (
        <article className={level.toLowerCase()}>
            <div className='header'>
                <span className='level'>{level}</span>
                <h3>{header}</h3>
            </div>
            <p>{description}</p>
            <a href={link}>Start learning</a>
        </article>
    );
};

const links = [
    {
        level: 'Beginners',
        header: 'Foundational',
        description:
            'For all roles working with Unleash - Developers, Product owners, Leaders',
        link: 'https://docs.google.com/forms/d/1iPUk2I0k5xMzicn9aLMcPF3b9ub3ZwdVjRxCxWxV7js/viewform',
    },
    {
        level: 'Advanced',
        header: 'Advanced for Developers',
        description:
            'For Developers only, after Foundational content has been reviewed',
        link: 'https://docs.google.com/forms/d/1NUL9hyO8Ys916TB6fPV3-jkvD97OmPXZ8_TO84Wjqgc/viewform',
    },
    {
        level: 'Advanced',
        header: 'Managing Unleash for DevOps/Admins',
        description:
            'For DevOps, Platform leads and Admins only after Foundational content has been reviewed',
        link: 'https://docs.google.com/forms/d/1JlIqmXI3P7dj0n-OiUs2IYsYXgmqw23BChaemlSgHJA/viewform',
    },
];

const Component = () => {
    return (
        <div className='banner-container'>
            <div className="banner">
                <p className="text">
Gain new skills, earn certifications, train your team, and advance your career.
                </p>
                <ul className="bullets">
                    <li>100% Free & online</li>
                    <li>Valuable certification</li>
                </ul>
                <div className="icon"></div>
                <a href="">Get certified</a>
            </div>
        </div>
    );
};

export default Component;