import * as React from "react";

const red = "#bf1238";
const white = "#ffffff";
const blue = "#002469";

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
  const useStitches = true;
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
        {...(useStitches
          ? { stroke: "black", strokeDasharray: "5,10,2", strokeWidth: "6.9" }
          : {})}
      />
    </svg>
  );
};

const FlagStarsRow = ({ x, y, cols }) => {
  //
  return (
    <svg>
      {[...Array(cols).keys()].map(i => {
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
    <svg>
      {[...Array(5).keys()].map(i => {
        return <FlagStarsRow cols={6} x={0} y={`${starTileHeight * i}%`} />;
      })}
    </svg>
  );
};

const FlagStarsInner = () => {
  //
  return (
    <svg>
      {[...Array(4).keys()].map(i => {
        return (
          <FlagStarsRow
            cols={5}
            x={unionUnitX}
            y={`${unionUnitY + starTileHeight * i}%`}
          />
        );
      })}
    </svg>
  );
};

const FlagStripes = ({ width, height }) => {
  //
  const useStitches = true;
  const useGradient = false;
  return (
    <svg>
      <defs>
        <linearGradient id="GradientRed" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color={red} />
          <stop offset="20%" stop-color="white" stop-opacity="0.99" />
          <stop offset="100%" stop-color={red} />
        </linearGradient>
        <linearGradient id="GradientWhite" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color={white} />
          <stop offset="50%" stop-color="gray" stop-opacity="0.99" />
          <stop offset="100%" stop-color={white} />
        </linearGradient>
      </defs>
      {[...Array(13).keys()].map(i => {
        //
        return (
          <rect
            key={`FlagStripes-stripe-${i}`}
            width="100%"
            height={`${stripeHeight}%`}
            y={`${i * stripeHeight}%`}
            fill={i % 2 === 0 ? red : white}
            {...(useStitches
              ? { stroke: "black", strokeDasharray: "5,10,2" }
              : {})}
            {...(useGradient
              ? {
                  fill:
                    i % 2 === 0 ? "url(#GradientRed)" : "url(#GradientWhite)"
                }
              : {})}
          />
        );
      })}
    </svg>
  );
};

const FlagSvg = ({ height: heightProp }) => {
  //

  const unionWP = 40;
  const unionHP = (7 / 13.0) * 100;

  const useStitches = true;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={heightProp}
      width={heightProp * 1.9}
      transform="skewX(-20)"
    >
      {/* <rect width="100%" height="100%" fill={red} /> */}
      <FlagStripes />
      <rect
        width={`${unionWP}%`}
        height={`${unionHP}%`}
        fill={blue}
        {...(useStitches ? { stroke: "black", strokeDasharray: "5,10,2" } : {})}
      />
      <FlagStarsOuter />
      <FlagStarsInner />
    </svg>
  );
};

export default FlagSvg;
