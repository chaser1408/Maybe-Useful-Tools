import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const About = () => {
    const { project } = useLoaderData();

    return (
        <div>
            <Link to="/">Home</Link>
        </div>
    );
};

export default About;