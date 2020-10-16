import React from 'react';
import Header from '../components/element/Header.js';
import Hero from '../components/Hero';
import About from '../components/About';
import Experienced from '../components/Experienced.js';
import Skill from '../components/Skill.js';

export default function Home() {
    return (
        <div className="content">
            <Header></Header>
            <Hero></Hero>
            <About></About>
            <Experienced></Experienced>
            <Skill></Skill>
        </div>
    )
}
