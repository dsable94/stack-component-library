import React from "react";
import PropTypes from "prop-types";

const AdvanceTableTypes= () => <>AdvanceTableTypes</>;

AdvanceTableTypes.propTypes={
     /**
   * The Title displayed in the Table Header.
   */
    title:PropTypes.string,
     /**
   * The column configuration.
   */
    columns:PropTypes.array,
     /**
   * It's highly recommended that your data have a unique identifier (keyField). 
   * The default keyField is id. If you need to override this value then see keyField.
   */
    data:PropTypes.array,
     /**
   * Your data should have a unique identifier. By default, React Data Table looks for an id.
   */
    keyField:PropTypes.string,
     /**
   * stripe color the odd rows.
   */
    striped: PropTypes.bool,
     /**
   * if rows are to be highlighted on hover.
   */
    highlightOnHover: PropTypes.bool,
     /**
   * if rows show a point icon on hover.
   */
    pointerOnHover: PropTypes.bool,
     /**
   * A custom component to display when there are no records to display.
   */
    noDataComponent:PropTypes.bool,
     /**
   * 	override the className on the Table wrapper.
   */
    className:PropTypes.string,
     /**
   * disables the Table section.
   */
    disabled:PropTypes.bool,
     /**
   * callback to access the row, event on row click.
   */
    onRowClicked:PropTypes.func,
     /**
   * callback to access the row, event on row double click.
   */
    onRowDoubleClicked:PropTypes.func,
};

AdvanceTableTypes.defaultProps = {
    title: '',
    columns: null,
    data: null,
    keyField:'',
    striped: false,
    highlightOnHover: false,
    pointerOnHover: false,
    noDataComponent: false,
    className: null,
    disabled:false,

};

export default AdvanceTableTypes;