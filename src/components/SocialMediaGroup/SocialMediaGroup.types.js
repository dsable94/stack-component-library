import React from "react";
import PropTypes from "prop-types";

const SocialMediaTypes= () => <>Social</>;

SocialMediaTypes.propTypes={
    size: PropTypes.string,
    url: PropTypes.string, 
    color: PropTypes.string,
    isRound: PropTypes.bool,
    bgColor: PropTypes.string,
    iconType: PropTypes.oneOf(['facebook','twitter','gitHub','whatsApp','pInterest','google','instaGram','share','linkedIn', 'youTube']),
    onClick: PropTypes.func,
    onChange: PropTypes.func,

};

SocialMediaTypes.defaultProps = {
    size: 'md',
    color: 'default color',
    isRound: 'false',
};

export default SocialMediaTypes;