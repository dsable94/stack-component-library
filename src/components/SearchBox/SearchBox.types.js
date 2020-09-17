import React from "react";
import PropTypes from "prop-types";

const SearchBoxTypes= () => <>SearchBox</>;

SearchBoxTypes.propTypes={
    size: PropTypes.oneOf(['sm','md','lg']),
    placeholder: PropTypes.string,
    bg: PropTypes.string,
    borderRadius: PropTypes.string,
    children:PropTypes.node,
    onFocus:PropTypes.bool,
    icon:PropTypes.bool
};

SearchBoxTypes.defaultProps = {
    size: 'md',
    placeholder: 'Search',
    onFocus: false,
};

export default SearchBoxTypes;