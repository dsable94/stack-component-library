/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import StyledCard from "./Card.styled";
import { StyledCardRight } from "./Card.styled";

const Card = props => {
  const {
    color,
    bgColor,
    children,
    cardTitle,
    width,
    alignText,
    alignCard,
    imgUrl,
    subTitle,
    imgPos,
    cardMenu,
    border,
    boxShadow,
    className
  } = props;
  if (imgPos === "middle") {
    return (
      <StyledCard
        imgUrl={imgUrl}
        color={color}
        bgColor={bgColor}
        border={border}
        className={className}
        {...props}
      >
        <StyledCard.Body>
          {cardTitle && (
            <StyledCard.Title as="h5">{cardTitle}</StyledCard.Title>
          )}
          <StyledCardRight>{cardMenu}</StyledCardRight>
          {subTitle && (
            <StyledCard.Subtitle as="h6">
              {subTitle}
            </StyledCard.Subtitle>
          )}
        </StyledCard.Body>
        {imgUrl && <img src={imgUrl} />}
        <StyledCard.Body>
          <StyledCard.Text>{children}</StyledCard.Text>
        </StyledCard.Body>
      </StyledCard>
    );
  } else if (imgPos === "top") {
    return (
      <StyledCard imgUrl={imgUrl} color={color} bgColor={bgColor} {...props}>
        {imgUrl && <img src={imgUrl} />}
        <StyledCard.Body>
          {cardTitle && (
            <StyledCard.Title as="h5">{cardTitle}</StyledCard.Title>
          )}
          <StyledCardRight>{cardMenu}</StyledCardRight>
          {subTitle && (
            <StyledCard.Subtitle as="h6">
              {subTitle}
            </StyledCard.Subtitle>
          )}
          <StyledCard.Text>{children}</StyledCard.Text>
        </StyledCard.Body>
      </StyledCard>
    );
  } else if (imgPos === "bottom") {
    return (
      <StyledCard imgUrl={imgUrl} color={color} bgColor={bgColor} {...props}>
        <StyledCard.Body>
          {cardTitle && (
            <StyledCard.Title as="h5">{cardTitle}</StyledCard.Title>
          )}
          <StyledCardRight>{cardMenu}</StyledCardRight>
          {subTitle && (
            <StyledCard.Subtitle as="h6">
              {subTitle}
            </StyledCard.Subtitle>
          )}
          <StyledCard.Text>{children}</StyledCard.Text>
        </StyledCard.Body>
        {imgUrl && <img src={imgUrl} />}
      </StyledCard>
    );
  } else if (imgPos === "bg") {
    return (
      <StyledCard imgUrl={imgUrl} color={color} bgColor={bgColor} {...props}>
        {imgUrl && <img src={imgUrl} />}
        <StyledCard.ImgOverlay>
          {cardTitle && (
            <StyledCard.Title as="h5">{cardTitle}</StyledCard.Title>
          )}
          <StyledCardRight>{cardMenu}</StyledCardRight>
          {subTitle && (
            <StyledCard.Subtitle as="h6">
              {subTitle}
            </StyledCard.Subtitle>
          )}
          <StyledCard.Text>{children}</StyledCard.Text>
        </StyledCard.ImgOverlay>
      </StyledCard>
    );
  } else {
    return (
      <>
        <StyledCard imgUrl={imgUrl} color={color} bgColor={bgColor} className={className} {...props}>
          <StyledCard.Body>
            {cardTitle && (
              <StyledCard.Title as="h5">{cardTitle}</StyledCard.Title>
            )}
            <StyledCardRight>{cardMenu}</StyledCardRight>
            {subTitle && (
              <StyledCard.Subtitle as="h6">{subTitle}</StyledCard.Subtitle>
            )}
            <StyledCard.Text>{children}</StyledCard.Text>
          </StyledCard.Body>
          {imgUrl && <img src={imgUrl} />}
        </StyledCard>
      </>
    );
  }
};

export default Card;
