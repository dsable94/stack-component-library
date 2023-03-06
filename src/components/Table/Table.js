import React from "react";
import StyledTable from "./Table.styled";

const Table = (props) => {
  const { children, size, striped, bordered, hover, responsive, variant, bsPrefix, heights } = props;
  console.log(props)
  return (
    <StyledTable size={size} striped={striped} bordered={bordered} hover={hover} responsive={responsive} variant={variant} bsPrefix={bsPrefix}
      heights={heights}
    >
      {children}
    </StyledTable>
  );
}

export default Table;