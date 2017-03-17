import React from 'react';
import './index.css';

// ContactMeBlurb renders the text paragraph and link to resume
function ContactMeBlurb() {
  const resumeLink = 'https://www.dropbox.com/s/sac7hq627uxq792/Samuel%20Jackson%20Resume.pdf?dl=0';
  const noLinkContent = ' (you’ll find my email and phone number inside). Click below for my GitHub, LinkedIn, or Twitter.';

  const resumeElement = (
    <a
      className="resume-link"
      href={resumeLink}
    >
      Click here for my resume
    </a>
  );

  return (
    <div className="contact-me-blurb-container">
      {resumeElement}
      <p className="contact-me-blurb-content">
        {noLinkContent}
      </p>
    </div>
  );
}

export default ContactMeBlurb;
