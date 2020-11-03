import React from "react";
import PropTypes from "prop-types";

const SocialMediaTypes= () => <>Social</>;

SocialMediaTypes.propTypes={
    size: PropTypes.string,
    url: PropTypes.string, 
    color: PropTypes.string,
    isRound: PropTypes.bool,
    bgColor: PropTypes.string,
    iconType: PropTypes.oneOf(['faceBook','twitter','gitHub','whatsApp','pInterest','gooGle','instaGram','share','linkedIn', 'youTube']),
};

SocialMediaTypes.defaultProps = {
    size: 'md',
    color: 'default color',
    isRound: 'false',
};

export default SocialMediaTypes;