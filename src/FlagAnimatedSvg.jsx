import * as React from 'react';

const red = '#bf1238';
const white = '#ffffff';
const blue = '#002469';

const starSide = 0.0616;
const stripeHeight = 100.0 / 13;

const unionUnitX = (0.0633 * 100) / 1.9;
const unionUnitY = 0.0538 * 100;
const starTileWidth = unionUnitX * 2;
const starTileHeight = unionUnitY * 2;

// percentages relative to tile W & H
const starWidth = (starSide / (0.0633 * 2)) * 100;
const starHeight = (starSide / (0.0538 * 2)) * 100;
const starHorizontalPadding = (100 - starWidth) / 2.0;
const starVerticalPadding = (100 - starHeight) / 2.0;

const FlagStar = ({ x, y, width, height }) => {
  //
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 184.1 175.1"
      x={`${starHorizontalPadding}%`}
      y={`${starVerticalPadding}%`}
      width={`${starWidth}%`}
      height={`${starHeight}%`}
    >
      <path
        strokeWidth="0.9"
        d="m92.1 0c7.2 22.3 14.5 44.6 21.7 66.9 23.4 0 46.9 0 70.3 0-19 13.8-37.9 27.6-56.9 41.3 7.2 22.3 14.5 44.6 21.7 66.9C130 161.3 111 147.6 92.1 133.8 73.1 147.6 54.1 161.3 35.2 175.1 42.4 152.8 49.7 130.5 56.9 108.2 37.9 94.5 19 80.7 0 66.9 23.4 66.9 46.9 66.9 70.3 66.9 77.6 44.6 84.8 22.3 92.1 0Z"
        fill="orange"
      />
    </svg>
  );
};

const FlagStarsRow = ({ x, y, cols }) => {
  //
  return (
    <svg>
      {[...Array(cols).keys()].map((i) => {
        //
        return (
          <svg
            x={`${x + starTileWidth * i}%`}
            y={y}
            width={`${starTileWidth}%`}
            height={`${starTileHeight}%`}
          >
            <FlagStar />
          </svg>
        );
      })}
    </svg>
  );
};

const FlagStarsOuter = () => {
  //
  return (
    <svg fillOpacity="0">
      {[...Array(5).keys()].map((i) => {
        return <FlagStarsRow cols={6} x={0} y={`${starTileHeight * i}%`} />;
      })}
      <animate
        attributeType="XML"
        attributeName="fill-opacity"
        from="0"
        to="1"
        dur="1s"
        begin="1.5s"
        fill="freeze"
      />
    </svg>
  );
};

const FlagStarsInner = () => {
  //
  return (
    <svg fillOpacity="0">
      {[...Array(4).keys()].map((i) => {
        return (
          <FlagStarsRow
            cols={5}
            x={unionUnitX}
            y={`${unionUnitY + starTileHeight * i}%`}
          />
        );
      })}
      <animate
        attributeType="XML"
        attributeName="fill-opacity"
        from="0"
        to="1"
        dur="1s"
        begin="2.5s"
        fill="freeze"
      />
    </svg>
  );
};

const FlagStripes = ({ width, height, animateWidth }) => {
  //
  return (
    <svg>
      {[...Array(13).keys()].map((i) => {
        return (
          <rect
            key={`FlagStripes-stripe-${i}`}
            width="100%"
            height={`${stripeHeight}%`}
            y={`${i * stripeHeight}%`}
            fill={i % 2 === 0 ? red : white}
          >
            <animate
              attributeType="XML"
              attributeName="x"
              from={parseInt(i) % 4 ? -width : width}
              to="0"
              dur="1s"
              fill="freeze"
            />
          </rect>
        );
      })}
      <animate
        attributeType="XML"
        attributeName="width"
        dur="2s"
        values="100%;90%;85%;90%;100%"
        keyTimes="0;0.25;0.4;0.8;1"
        repeatCount="indefinite"
      />
    </svg>
  );
};

const FlagRectangle = ({ width, height }) => {
  //
  return (
    <rect width={width} height={height} fill={blue}>
      <animate
        attributeType="XML"
        attributeName="height"
        from="0%"
        to={height}
        dur="1s"
        fill="freeze"
      />
    </rect>
  );
};

const FlagSvg = ({ height: heightProp, width, x, y, moveX }) => {
  //

  const unionWP = 40;
  const unionHP = (7 / 13.0) * 100;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={heightProp}
      width={heightProp * 1.9}
      x={x}
      y={y}
    >
      {/* <rect width="100%" height="100%" fill={red} /> */}
      <FlagStripes width={heightProp * 1.9} animateWidth />
      <FlagRectangle width={`${unionWP}%`} height={`${unionHP}%`} />
      <FlagStarsOuter />

      <FlagStarsInner />

      <animate
        attributeType="XML"
        attributeName="fill-opacity"
        from="0.5"
        to="1"
        dur="1s"
      />
      {moveX && (
        <animate
          attributeType="XML"
          attributeName="x"
          from="0"
          to="100"
          dur="2s"
          repeatCount="indefinite"
        />
      )}
    </svg>
  );
};

const FlagPole = () => {
  //
  return (
    <svg>
      <defs>
        <radialGradient
          id="Gradient1"
          r="1"
          cx="0.75"
          cy="0.25"
          fx="0.75"
          fy="0.25"
        >
          <stop offset="7%" stopColor="yellow" />
          <stop offset="10%" stopColor="gold" />
          <stop offset="95%" stopColor="brown" />
        </radialGradient>
        <linearGradient id="Gradient2" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="darkgray" />
          <stop offset="50%" stopColor="black" stopOpacity="0" />
          <stop offset="100%" stopColor="white" />
        </linearGradient>
        <linearGradient id="Gradient3" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="darkgray" />
          <stop offset="50%" stopColor="black" stopOpacity="0.2" />
          <stop offset="100%" stopColor="gray" />
        </linearGradient>
      </defs>
      <rect
        fill="gray"
        x="20"
        y="30"
        width="10"
        height="40"
        fill="url(#Gradient3)"
      />
      <rect
        fill="gray"
        x="10"
        y="70"
        width="30"
        height="100%"
        fill="url(#Gradient2)"
      />
      <circle fill="url(#Gradient1)" r="25" cx="25" cy="30" />
    </svg>
  );
};

const FlagSvgMoving = ({ height: heightProp, width, x, y, moveX }) => {
  //

  const unionWP = 40;
  const unionHP = (7 / 13.0) * 100;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={heightProp}
      width={heightProp * 1.9}
      x={x}
      y={y}
    >
      {/* <rect width="100%" height="100%" fill={red} /> */}
      <FlagStripes width={heightProp * 1.9} />
      <FlagRectangle width={`${unionWP}%`} height={`${unionHP}%`} />
      <FlagStarsOuter />

      <FlagStarsInner />

      <animate
        attributeType="XML"
        attributeName="fill-opacity"
        from="0.5"
        to="1"
        dur="1s"
      />
      {moveX && (
        <animate
          attributeType="XML"
          attributeName="x"
          from="-10"
          to={-width}
          dur="2s"
          repeatCount="indefinite"
        />
      )}
    </svg>
  );
};

const FlagCompound = ({ height, width }) => {
  // flag plus waves
  return (
    <svg>
      <FlagSvg height={height} x={50} y={50} />

      <svg width="150" height={height + 40} x={40} y={20}>
        <FlagSvgMoving height={height} width={width} x={-90} y={25} moveX />
        <animate
          attributeType="XML"
          attributeName="width"
          dur="2s"
          repeatCount="indefinite"
          values="0;150;150"
          keyTimes="0;0.25;1"
        />
        <animate
          attributeType="XML"
          attributeName="x"
          from="50"
          to={width + 50}
          dur="2s"
          repeatCount="indefinite"
        />
      </svg>
    </svg>
  );
};

const AnimatedFlag = ({ height }) => {
  const width = height * 1.9;
  return (
    <svg
      height={height + 100}
      width={width + 150}
      xmlns="http://www.w3.org/2000/svg"
    >
      <FlagPole />

      <FlagCompound height={height} width={width} />
      {/* <animate
        attributeName="transform"
        attributeType="XML"
        type="skew"
        from="0"
        to="20"
        dur="2s"
        repeatCount="indefinite"
      /> */}
      {/* <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="skewX"
        from="0"
        to="3"
        dur="1s"
        repeatCount="indefinite"
      /> */}
    </svg>
  );
};

{
  {
    /* <path
          d={`M40,20 L105,10 M105,30 L50,30 Z`}
          stroke="none"
          stroke-width="2"
          fill="none"
          id="theMotionPath"
        /> */
  }

  {
    /* <circle fill="purple" r="10" cx="0" cy="0">
          <animateMotion dur="6s" repeatCount="indefinite">
            <mpath href="#theMotionPath" />
          </animateMotion>
        </circle> */
  }

  /* <animateMotion dur="6s" repeatCount="indefinite">
            <mpath href="#theMotionPath" />
          </animateMotion> */
}

export default AnimatedFlag;
