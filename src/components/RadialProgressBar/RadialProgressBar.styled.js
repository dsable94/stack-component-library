import styled, { css } from "styled-components";

const RadialProgressBar = styled.div`{
        .circle-background,
        .circle-progress {
            fill: none; 
        }
        .circle-background {
            stroke: #ddd;
        }
        .circle-text {
          font-weight: bold;
        }
  ${props =>
    props.strokeColor
      ? css`
        .circle-progress {
            stroke: ${props.strokeColor};
            background-position-x: initial;
            stroke-linecap: round;
            stroke-linejoin: round;
            animation: ${props => props.animate && css `progress ${props.animationDelay} ${props.animationType}`}
            
        }
        .stackui-radialProgress{
              border-radius: 50%;
              background: #fff;
              font-size: 18px;
              font-weight: 600;
              align-items: center;
              justify-content: center;
              display: flex;
              flex-direction: column;
          }
        `
        :
       css`
       `
  }
  ${props =>
    { 
      console.log(props)
      const { children : { props: { children: sizeVal }}} = props;
      let animateOffset;
      let dashArray;
      const strokeSize = sizeVal.map((item) => (item))
      for( var i =0; i < strokeSize.length; i++) {
        dashArray= strokeSize[i+1].props.style.strokeDasharray;
        animateOffset=strokeSize[i+1].props.style.strokeDashoffset

        return (
          `
          @keyframes progress {
            from {
            stroke-dashoffset: ${dashArray};
            }
            to {
            stroke-dashoffset: ${animateOffset};
            }
            }
          `
        )
      }
}
}
}`;
export default RadialProgressBar;
