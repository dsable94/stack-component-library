import React from "react";
import PropTypes from "prop-types";

const SearchBoxTypes= () => <>SearchBox</>;

SearchBoxTypes.propTypes={
    size: PropTypes.oneOf(['sm','md','lg']),
    placeholder: PropTypes.string,
    bg: PropTypes.string,
    borderRadius: PropTypes.string,
    children:PropTypes.node,
    onFocus:PropTypes.string,
};

SearchBoxTypes.defaultProps = {
    size: 'md',
    placeholder: 'Search',

};

export default SearchBoxTypes;