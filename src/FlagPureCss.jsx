import * as React from "react";
import styled from "styled-components";
import classnames from "classnames";

const Flag = ({ className }) => {
  return <div className={classnames("Flag", className)} />;
};

// NOTE: define variables here:
const starDimensions = 0.0616;
const starPaddingX = 0.0633 - 0.5 * starDimensions;
const starPaddingY = 0.0538 - 0.5 * starDimensions;

const borderRight = 1.14;
const borderBottom = 6 / 13.0;

const paddingLeft = 0.0633;
const paddingRight = 0.0633;
const paddingTop = 0.0538;
const paddingBottom = 0.0538;

const width = 1.9;
const height = 1;
const unionWidthWithoutPaddingAndMargin =
  width - paddingLeft - paddingRight - borderRight;
const unionHeightWithoutPaddingAndMargin =
  height - paddingTop - paddingBottom - borderBottom;

const red = "#bf1238";
const white = "#ffffff";
const blue = "#002469";

// star svg encoded into base64
const base64Svg =
  "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxODQuMSAxNzUuMSI+DQogICAgICAgIDxwYXRoDQogICAgICAgICAgc3Ryb2tlV2lkdGg9IjAuOSINCiAgICAgICAgICBkPSJtOTIuMSAwYzcuMiAyMi4zIDE0LjUgNDQuNiAyMS43IDY2LjkgMjMuNCAwIDQ2LjkgMCA3MC4zIDAtMTkgMTMuOC0zNy45IDI3LjYtNTYuOSA0MS4zIDcuMiAyMi4zIDE0LjUgNDQuNiAyMS43IDY2LjlDMTMwIDE2MS4zIDExMSAxNDcuNiA5Mi4xIDEzMy44IDczLjEgMTQ3LjYgNTQuMSAxNjEuMyAzNS4yIDE3NS4xIDQyLjQgMTUyLjggNDkuNyAxMzAuNSA1Ni45IDEwOC4yIDM3LjkgOTQuNSAxOSA4MC43IDAgNjYuOSAyMy40IDY2LjkgNDYuOSA2Ni45IDcwLjMgNjYuOSA3Ny42IDQ0LjYgODQuOCAyMi4zIDkyLjEgMFoiDQogICAgICAgICAgZmlsbD0ib3JhbmdlIg0KICAgICAgICAvPg0KICAgICAgPC9zdmc+";

const StyledFlag = styled(Flag)`
  // https://www.apexflags.com/ExecutiveOrder10834.html
  width: ${props => `${props.height * unionWidthWithoutPaddingAndMargin}px`};
  height: ${props => `${props.height * unionHeightWithoutPaddingAndMargin}px`};
  padding: ${props =>
    `${props.height * paddingTop}px ${props.height *
      paddingRight}px ${props.height * paddingBottom}px ${props.height *
      paddingLeft}px`};

  border-right: ${props => `${props.height * borderRight}px`} solid transparent;
  border-bottom: ${props => `${props.height * borderBottom}px`} solid
    transparent;

  background: ${props =>
      `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><image width='${props.height *
        starDimensions}' height='${props.height *
        starDimensions}' x='${props.height * starPaddingX}' y='${props.height *
        starPaddingY}' xlink:href='image/svg+xml;base64,${base64Svg}'/></svg>")`},
    ${props =>
      `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><image width='${props.height *
        starDimensions}' height='${props.height *
        starDimensions}' x='${props.height * starPaddingX}' y='${props.height *
        starPaddingY}' xlink:href='image/svg+xml;base64,${base64Svg}'/></svg>")`},
    linear-gradient(to right, ${blue}, ${blue}),
    repeating-linear-gradient(
      to bottom,
      ${red},
      ${red} 50%,
      ${white} 50%,
      ${white}
    );
  background-size: ${props =>
      `${props.height * 0.0633 * 2}px ${props.height * 0.0538 * 2}px`},
    ${props => `${props.height * 0.0633 * 2}px ${props.height * 0.0538 * 2}px`},
    auto auto, 100% 15.3846%;

  background-origin: padding-box, content-box, padding-box, border-box;
  background-clip: padding-box, content-box, padding-box, border-box;
`;

const FlagComponent = ({ height = 300 }) => {
  //
  return <StyledFlag height={height} />;
};
export default FlagComponent;
