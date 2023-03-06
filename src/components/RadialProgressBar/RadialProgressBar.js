import React from 'react';
import RadialProgressBar from './RadialProgressBar.styled';

const RadialProgress = (props) => {
  const { sqsize, strokeWidth, percentage, className, strokeColor, animate, animationDelay, animationType } = props;
  const radius = (sqsize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqsize} ${sqsize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - dashArray * percentage / 100;


    return (
      <RadialProgressBar strokeColor={strokeColor} animate={animate} animationDelay={animationDelay} animationType={animationType}>
        <svg
          width={sqsize}
          height={sqsize}
          viewBox={viewBox}
          className={className}
        >
          <circle
            className="circle-background"
            cx={sqsize / 2}
            cy={sqsize / 2}
            r={radius}
            strokeWidth={`${strokeWidth}px`}
          />
          <circle
            className="circle-progress"
            cx={sqsize / 2}
            cy={sqsize / 2}
            
            r={radius}
            strokeWidth={`${strokeWidth}px`}
            transform={`rotate(-90 ${sqsize / 2} ${sqsize / 2})`}
            style={{
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset,
            }}
          />
                <text
                  className="circle-text"
                  x="50%"
                  y="49%"
                  dy=".3em"
                  textAnchor="middle"
                >
                  {`${percentage}`}
                </text>
          
        </svg>
      </RadialProgressBar>
    );
}

export default RadialProgress;
