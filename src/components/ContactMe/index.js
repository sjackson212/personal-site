import React from 'react';
import './index.css';
import SiteSectionHeader from '../SiteSectionHeader/index.js';
import ContactIcons from '../ContactIcons/index.js';
import ContactMeBlurb from '../ContactMeBlurb/index.js';
// TODO: import images here

// ContactMe renders the contact section
function ContactMe() {
  const headerContent = 'Here’s my resume and contact information.';

  return (
    <div className="contact-me-container">
      <SiteSectionHeader content={headerContent} />
      <ContactMeBlurb />
      <ContactIcons />
    </div>
  );
}

export default ContactMe;
