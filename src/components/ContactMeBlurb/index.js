import React from 'react';
import './index.css';

// ContactMeBlurb renders the text paragraph and link to resume
function ContactMeBlurb() {
  const resumeLink = 'https://www.dropbox.com/s/5uhcyx8fvg57632/Samuel%20Jackson%20-%20Resume%20-%202017.pdf?dl=0';
  const noLinkContent = ' (you’ll find my email and phone number inside). Click below for my GitHub, LinkedIn, or Twitter.';

  const resumeElement = (
    <a
      className="resume-link"
      href={resumeLink}
      target="_blank"
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
