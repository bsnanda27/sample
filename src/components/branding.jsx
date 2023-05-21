import React from 'react'
import PropTypes from 'prop-types'
import './branding.css'

const Branding = (props) => {
  return (
    <div className={`branding-branding ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="branding-image"
      />
      <svg viewBox="0 0 1024 1024" className="branding-icon">
        <path d="M128 128h768v768h-768z" className=""></path>
      </svg>
      <span className="branding-text">{props.text}</span>
    </div>
  )
}

Branding.defaultProps = {
  text: 'Sai Sena Impex',
  rootClassName: '',
  image_src: '../public/img/branding-image.jpg',
  image_alt: 'image',
}

Branding.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Branding