import React, { PropTypes } from 'react';
import './index.css';

const propTypes = {
  content: PropTypes.string.isRequired
};

// SiteSectionHeader renders the header for a major section of the site
function SiteSectionHeader(props) {
  return (
    <div className="site-section-header-container">
      <p className="site-section-header-content">
        {props.content}
      </p>
    </div>
  );
}

SiteSectionHeader.propTypes = propTypes;

export default SiteSectionHeader;
