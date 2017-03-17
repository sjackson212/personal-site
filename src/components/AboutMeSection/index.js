import classNames from 'classnames';
import React, { PropTypes } from 'react';
import './index.css';

const propTypes = {
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isVideoGameSection: PropTypes.bool,
};
const defaultProps = {
  isVideoGameSection: false,
};

// AboutMeSection renders one part of the AboutMe section of the site
function AboutMeSection({img, description, isVideoGameSection}) {
  const imgClass = classNames('about-me-section-img', {
    'gamepad': isVideoGameSection
  });
  const containerClass = classNames({
    'video-games-section-container': isVideoGameSection,
    'about-me-section-container': !isVideoGameSection
  });

  return (
    <div className={containerClass}>
      <img
        src={img}
        className={imgClass}
        alt=""
      />
      <p className="about-me-section-content">
        {description}
      </p>
    </div>
  );
}

AboutMeSection.propTypes = propTypes;
AboutMeSection.defaultProps = defaultProps;

export default AboutMeSection;
