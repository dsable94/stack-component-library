import styled, {css} from "styled-components";


const StyledChip = styled.div`
.chip {
    display: inline-block;
    padding: 0 25px;
    height: 50px;
    font-size: 16px;
    line-height: 50px;
    border-radius: 25px;
    background-color: #f1f1f1;
  }
  
  .chip img {
    float: left;
    margin: 0 10px 0 -25px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }

  .primary{
    background-color: #FF0000;
    color: aliceblue;
  }

  .secoundary{
    background-color: #41789e;
    color: aliceblue;
  }


`

export default StyledChip;