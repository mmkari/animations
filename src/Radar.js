import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import classnames from 'classnames';

import {
  Noise,
  // NoiseMemoized
} from './svgPatterns';

const rotate = keyframes`
  0% {
    transform: rotate(0deg)
  }
  50% {
    transform: rotate(180deg)
  }
  100% {
    transform: rotate(359deg)
  }
`;

const blink = keyframes`
  0% {
    background: white
  }
  25% {
    background: lightgreen
  }
  50% {
    background: transparent
  }
  100% {
    background: transparent
  }
`;

// TODO add targets

const Circle = styled.div`
  width: ${({ radius }) => 2 * radius}px;
  height: ${({ radius }) => 2 * radius}px;
  // background: lightgreen;
  border: 1px solid lightgreen;
  border-radius: 50%;
  position: absolute;
  left: ${({ radius, height }) => height * 0.5 - radius - 1}px;
  top: ${({ radius, height }) => height * 0.5 - radius - 1}px;
`;

const Scanner = styled.div`
  transform-origin: bottom right;
  background: linear-gradient(0deg, transparent 0%, lightgreen);
  width: 50%;
  height: 50%;
  border-top-left-radius: 100%;
  animation: 4s ${rotate} linear infinite;
  border-right: solid red 1px;
  margin-left: -1px;
`;
const BaseMap = ({ className, children }) => {
  return <div className={classnames('Map', className)}>{children}</div>;
};
const Map = styled(BaseMap)`
  width: ${({ height }) => height}px;
  // width: 100px;
  height: ${({ height }) => height}px;
  // background: ${({ color }) => color};
  background: black;
`;

const RadarBox = styled.div`
  width: 100%;
  height: 100%;
  background: darkgreen;
  border-radius: 50%;
  position: relative;
`;
const Dot = styled.div`
  width: 4%;
  height: 4%;
  background: red;
  border-radius: 50%;
  // animation: 4s ${blink} linear infinite;
  position: absolute;
  left: ${({ x }) => x}px;
  top: ${({ y }) => y}px;
  z-index: 10;
`;
const DetectionPoint = styled.div`
  width: 4%;
  height: 4%;
  background: lightgreen;
  border-radius: 50%;
  animation: 4s ${blink} linear infinite;
  position: absolute;
  left: ${({ x }) => x}px;
  top: ${({ y }) => y}px;
  z-index: 11;
`;

const Noises = ({ className }) => {
  return (
    <div className={classnames('Noises', className)}>
      {[...Array(3).keys()].map((i) => {
        return (
          <Noise
            index={i}
            className={`noise-${i + 1}`}
            version={`version-${i}`}
            width={100}
            height={100}
          />
        );
      })}
    </div>
  );
};
const switchPattern = keyframes`
  0% {
    opacity: 1;
  }
  33% {
    opacity: 1;
  }
  34% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

const animationNoiseDuration = 2;
const StyledNoise = styled(Noises)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  .noise-1 {
    position: absolute;
    opacity: 0;
    animation: ${animationNoiseDuration}s ${switchPattern} linear infinite;
    animation-delay: 0s;
  }
  .noise-2 {
    position: absolute;
    opacity: 0;
    animation: ${animationNoiseDuration}s ${switchPattern} linear infinite;
    animation-delay: ${animationNoiseDuration / 3.0}s;
  }
  .noise-3 {
    position: absolute;
    opacity: 0;
    animation: ${animationNoiseDuration}s ${switchPattern} linear infinite;
    animation-delay: ${(animationNoiseDuration / 3.0) * 2}s;
  }
`;
const StyledNoiseMemoized = React.memo(() => {
  return <StyledNoise />;
});

const vMax = 3; // max velocity x or y
const rotationTime = 4000; // ms
const angularSpeed = 360.0 / rotationTime;
const dotSize = 4; // px width & height
const Radar = ({ height }) => {
  const [position, setPosition] = useState({ x: 30, y: 20 }); // Real-time position
  const [velocity, setVelocity] = useState({ x: 1, y: 0 }); // Real-time velocity

  const [detectedPosition, setDetectedPosition] = useState(null);
  // const [radarAngle, setRadarAngle] = useState(0);

  const [startMs, setStartMs] = useState(null);

  // effect to collect start ms Date into memory
  useEffect(() => {
    setStartMs(Date.now());
  }, []);

  // effect to move dot
  useEffect(() => {
    const moveDot = () => {
      const newX = position.x + velocity.x;
      const newY = position.y + velocity.y;
      const newPosition = {
        x: Math.abs(newX) > 100 ? Math.sign(newX) * 100 : newX,
        y: Math.abs(newY) > 100 ? Math.sign(newY) * 100 : newY,
      };
      setPosition(newPosition);
      // update velocity
      setVelocity({
        x: Math.floor(Math.random() * 2 * vMax + 1) - vMax,
        y: Math.floor(Math.random() * 2 * vMax + 1) - vMax,
      });
    };
    const interval = setInterval(moveDot, 500);

    return () => clearInterval(interval);
  });

  // effect to clear detected position
  useEffect(() => {
    // set time off to clear
    const interval = setInterval(() => {
      setDetectedPosition(null);
    }, 3000);

    return () => clearInterval(interval);
  }, [detectedPosition]);

  // effect to check when radar angle has passed dot angle
  useEffect(() => {
    // radar rotated every 10 ms
    const runCycle = () => {
      // update angle
      const radarAngle =
        (((Date.now() - startMs) % 4000) / 4000.0) * 2 * Math.PI;

      // dot angle is:
      let dotAngle = null;
      // if Q1 (dot y < 0, x > 50)
      if (position.y < 0 && position.x > 0) {
        dotAngle = Math.atan((1.0 * position.x) / Math.abs(position.y));
      }
      // Q4
      if (position.y > 0 && position.x > 0) {
        dotAngle = Math.PI / 2 + Math.atan((1.0 * position.y) / position.x);
      }
      // Q3
      if (position.y > 0 && position.x < 0) {
        dotAngle =
          Math.PI + Math.atan((1.0 * Math.abs(position.x)) / position.y);
      }
      // Q2
      if (position.y < 0 && position.x < 0) {
        dotAngle =
          1.5 * Math.PI +
          Math.atan((1.0 * Math.abs(position.y)) / Math.abs(position.x));
      }

      if (
        !detectedPosition &&
        radarAngle > dotAngle &&
        radarAngle - dotAngle < 0.5
      ) {
        setDetectedPosition(position);
      }
    };

    const interval2 = setInterval(runCycle, 100);

    return () => clearInterval(interval2);
  });

  return (
    <div>
      <Map height={height} color="red">
        <RadarBox>
          {[...Array(5).keys()].map((i) => {
            return (
              <Circle
                key={`circle_${i}`}
                radius={(i + 1) * height * 0.1}
                height={height}
              />
            );
          })}
          <Scanner />
          <Dot x={position.x + 0.5 * height} y={position.y + 0.5 * height} />

          {detectedPosition && (
            <DetectionPoint
              x={detectedPosition.x + 0.5 * height}
              y={detectedPosition.y + 0.5 * height}
            />
          )}
          <StyledNoiseMemoized />
        </RadarBox>
      </Map>
    </div>
  );
};
// <h4>TODO</h4>
// <ul>
//   <li>Might have to convert to svg first!</li>
// </ul>

export default Radar;
