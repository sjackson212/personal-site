import React from 'react';
import './index.css';
import gitHubIcon from '../../assets/social-github.png';
import liIcon from '../../assets/social-linkedin.png';
import twitterIcon from '../../assets/social-twitter.png';

// ContactIcons renders contact link icons
function ContactIcons() {
  const ghLink='https://github.com/sjackson212';
  const liLink='https://www.linkedin.com/in/samuel-jackson-4a0a42107';
  const twLink='https://twitter.com/stonedwallz';

  return (
    <div className="contact-icons-container">
      <a href={ghLink} target="_blank">
        <img
          className="contact-icon-image"
          src={gitHubIcon}
          alt=''
        />
      </a>
      <a href={liLink} target="_blank">
        <img
          className="contact-icon-image"
          src={liIcon}
          alt=''
        />
      </a>
      <a href={twLink} target="_blank">
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
