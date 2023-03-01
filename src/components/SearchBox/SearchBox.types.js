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
    icon:PropTypes.string,
    onClick:PropTypes.func,
    isError:PropTypes.bool,
    disabled:PropTypes.bool,
     /**
   * Search box assistive text
   */
    hint: PropTypes.string,
     /**
   * The width of the SearchBox
   */
    width: PropTypes.string,
    /** 
     * The custom class name of the SearchBox
     * */
    className: PropTypes.string,
     /** 
     * The search icon of the SearchBox
     * */
    searchIcon: PropTypes.bool,
     /** 
     * On changes function
     * */
      onChange: PropTypes.func,
     /** 
     * On Key Down event
     * */
    onKeyDown: PropTypes.func,
};

SearchBoxTypes.defaultProps = {
    size: 'md',
    placeholder: 'Search',
    onFocus: false,
    isError: false,
    disabled: false,
};

export default SearchBoxTypes;