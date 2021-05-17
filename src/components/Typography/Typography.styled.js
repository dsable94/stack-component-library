import styled, { css } from "styled-components";

const Typography = styled.div`{
  display: block;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 0;
  ${props =>
    props.color
      ? css`
          color: ${props.color};
        `
      : css``}
  ${props =>
    props.textShadow
      ? css`
          text-shadow: ${props.textShadow};
        `
      : css``}
  ${props =>
    props.textAlign === "center"
      ? css`
          text-align: center;
        `
      : props.textAlign === "left"
      ? css`
          text-align: left;
        `
      : props.textAlign === "right"
      ? css`
          text-align: right;
        `
      : css``}
  ${props =>
    props.type === "heading"
      ? css`
          font-weight: bold;
        `
     
      : props.type === "light"
      ? css`
          font-weight: 300;
        `
      : css`
          font-weight: normal;
        `}
  
  ${props =>
    props.isBold
      ? css`
          font-weight: bold;
        `
      : css`
          font-weight: normal;
        `}

  ${props =>
    props.isItalic
      ? css`
          font-style: italic;
        `
      : css`
          font-style: normal;
        `}

  ${props =>
    props.as === "h1"
      ? css`
          font-size: 2em;
        `
      : props.as === "h2"
      ? css`
          font-size: 1.5em;
        `
      : props.as === "h3"
      ? css`
          font-size: 1.17em;
        `
      : props.as === "h4"
      ? css`
          font-size: 1em;
        `
      : props.as === "h5"
      ? css`
          font-size: 0.83em;
        `
      : props.as === "h6"
      ? css`
          font-size: 0.67em;
        `
      : props.as === "span"
      ? css`
          display: inline-block;
        `
      : css`
          font-size: 1em;
        `}
  ${props =>
    props.size
      ? css`
          font-size: ${props.size};
        `
      : css``}
  ${props =>
    props.semiBold
      ? css`
          font-weight: 600;
        `
      : css`
          font-weight: normal;
        `}
    ${props =>
      props.subHeading
        ? css`
            font-weight: 500;
          `
        : css`
            font-weight: normal;
          `}
}`;
export default Typography;
