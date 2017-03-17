import React from 'react';
import './index.css';
import AboutMeSection from '../AboutMeSection/index.js';
import SiteSectionHeader from '../SiteSectionHeader/index.js';
import coding from '../../assets/coding.svg';
import brain from '../../assets/brain.svg';
import earthGlobe from '../../assets/earth-globe.svg';
import musicPlayer from '../../assets/music-player.svg';
import gamepad from '../../assets/gamepad.svg';

// AboutMe renders the personal information section
function AboutMe() {
  const codingDescription = 'I’m a full-stack developer.';
  const brainDescription = 'I love to think and learn.';
  const worldDescription = 'I want to change the world.';
  const musicDescription = 'Music is nothing less than life.';
  const gamesDescription = 'Video games are amazing.';

  // defines the props for the AboutMeSection components below
  const aboutMeSectionProps = [
    {
      key: 'coding',
      img: coding,
      description: codingDescription
    },
    {
      key: 'brain',
      img: brain,
      description: brainDescription
    },
    {
      key: 'world',
      img: earthGlobe,
      description: worldDescription
    },
    {
      key: 'music',
      img: musicPlayer,
      description: musicDescription
    },
    {
      key: 'games',
      img: gamepad,
      description: gamesDescription,
      isVideoGameSection: true
    },
  ];

  const generateAboutMeSection = (sectionProps) => (
    <AboutMeSection
      {...sectionProps}
    />
  );

  const headerContent = 'Welcome to my personal site. Here’s me.';

  return (
    <div className="about-me-container">
      <SiteSectionHeader content={headerContent} />
      {aboutMeSectionProps.map(generateAboutMeSection)}
    </div>
  );
}

export default AboutMe;
