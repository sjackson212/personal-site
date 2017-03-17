import React from 'react';
import './index.css';
import gitHubIcon from '../../assets/social-github.png';
import liIcon from '../../assets/social-linkedin.png';
import twitterIcon from '../../assets/social-twitter.png';

// ContactIcons renders contact link icons
function ContactIcons() {
  const contactIconObjects = {
    gh: {
      key: 'gitHubIcon',
      link: 'https://github.com/sjackson212'
    },
    li: {
      key: 'linkedInIcon',
      link: 'https://www.linkedin.com/in/samuel-jackson-4a0a42107'
    },
    tw: {
      key: 'twitterIcon',
      link: 'https://twitter.com/stonedwallz'
    }
  };

  return (
    <div className="contact-icons-container">
      <a href={contactIconObjects.gh.link}>
        <img
          className="contact-icon-image"
          src={gitHubIcon}
          alt=''
        />
      </a>
      <a href={contactIconObjects.li.link}>
        <img
          className="contact-icon-image"
          src={liIcon}
          alt=''
        />
      </a>
      <a href={contactIconObjects.tw.link}>
        <img
          className="contact-icon-image"
          src={twitterIcon}
          alt=''
        />
      </a>
    </div>
  );
}

export default ContactIcons;
