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
  .chipoutline{
    display: inline-block;
    padding: 0 25px;
    height: 50px;
    font-size: 16px;
    line-height: 50px;
    border-radius: 25px;
    border:1px solid;
  }

  .chipsmall{
    display: inline-block;
    padding: 0px 25px;
    height: 40px;
    font-size: 10px;
    line-height: 40px;
    border-radius: 25px;
    background-color: #f1f1f1;
  }

  .avatar { 
    position: relative;
    border: 1px solid;
    font-size: 0.75rem;
    padding: 2px;
    background-color: #dad9d9;
    background-color: :grey;
    border-radius: 50%;
    right: 10px;
  }

  .primary{
    background-color: #FF0000;
    color: aliceblue;
  }

  .primaryout{
    border-color:#FF0000;
    color: #FF0000;
  }

  .secoundary{
    background-color: #41789e;
    color: aliceblue;
  }
  .secoundaryout{
    border-color: #41789e;
    color: #41789e;
  }
  .cross{
    position: relative;
    left: 10px;
  }


`

export default StyledChip;