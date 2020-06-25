import * as React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

// import FlagStar from './FlagStar';

const Flag = ({ className }) => {
  //
  return (
    <div className={classnames('Flag', className)}>
      <div className="Flag-unionStars">
        {/* {[...Array(50).keys()].map(i => (
          <React.Fragment>
            {i !== 0 && <span className="gap" />}
            <FlagStar key={i} />
          </React.Fragment>
        ))} */}
      </div>
    </div>
  );
};
//   red: #bf1238
//   blue: #002469
// 6.5 15.3846
// 13 7.6923

// NOTE: define variables here:
const starPaddingX = 0.0633 - 0.5 * 0.0616;
const starPaddingY = 0.0538 - 0.5 * 0.0616;
const starDimensions = 0.0616;
const innerStarOffsetX = 0.0633;
const innerStarOffsetY = 0.0538;

const unionPaddingX = 0.0633;
const unionPaddingY = 0.0538;

const unionWidth = 0.76; // Union Fly
const unionHeight = 7 / 13.0; // Union Hoist
const unionWidthWithoutPadding = unionWidth - 2 * unionPaddingX;
const unionHeightWithoutPadding = unionHeight - 2 * unionPaddingY;

// star svg encoded into base64
const base64Svg =
  'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxODQuMSAxNzUuMSI+DQogICAgICAgIDxwYXRoDQogICAgICAgICAgc3Ryb2tlV2lkdGg9IjAuOSINCiAgICAgICAgICBkPSJtOTIuMSAwYzcuMiAyMi4zIDE0LjUgNDQuNiAyMS43IDY2LjkgMjMuNCAwIDQ2LjkgMCA3MC4zIDAtMTkgMTMuOC0zNy45IDI3LjYtNTYuOSA0MS4zIDcuMiAyMi4zIDE0LjUgNDQuNiAyMS43IDY2LjlDMTMwIDE2MS4zIDExMSAxNDcuNiA5Mi4xIDEzMy44IDczLjEgMTQ3LjYgNTQuMSAxNjEuMyAzNS4yIDE3NS4xIDQyLjQgMTUyLjggNDkuNyAxMzAuNSA1Ni45IDEwOC4yIDM3LjkgOTQuNSAxOSA4MC43IDAgNjYuOSAyMy40IDY2LjkgNDYuOSA2Ni45IDcwLjMgNjYuOSA3Ny42IDQ0LjYgODQuOCAyMi4zIDkyLjEgMFoiDQogICAgICAgICAgZmlsbD0ib3JhbmdlIg0KICAgICAgICAvPg0KICAgICAgPC9zdmc+';

// ${props => `${props.height * starDimensions}`}

const StyledFlag = styled(Flag)`
  // https://www.apexflags.com/ExecutiveOrder10834.html
  height: ${(props) => `${props.height}px`};
  width: ${(props) => `${props.height * 1.9}px`};

  background: linear-gradient(to right, #002469, #002469),
    repeating-linear-gradient(to bottom, #bf1238, #bf1238 50%, white 50%, white);
  background-repeat: no-repeat, repeat;
  background-size: ${(props) =>
      `${props.height * 0.76}px ${(props.height * 7) / 13.0}px`},
    100% 15.3846%;

  .Flag-unionStars {
    width: ${(props) =>
      `${props.height *
        unionWidthWithoutPadding}px`}; // need to subtract horizontal padding since it gets added to background width
    height: ${(props) =>
      `${props.height *
        unionHeightWithoutPadding}px`}; // need to subtract vertical padding since it gets added to background height

    // background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxODQuMSAxNzUuMSI+DQogICAgICAgIDxwYXRoDQogICAgICAgICAgc3Ryb2tlV2lkdGg9IjAuOSINCiAgICAgICAgICBkPSJtOTIuMSAwYzcuMiAyMi4zIDE0LjUgNDQuNiAyMS43IDY2LjkgMjMuNCAwIDQ2LjkgMCA3MC4zIDAtMTkgMTMuOC0zNy45IDI3LjYtNTYuOSA0MS4zIDcuMiAyMi4zIDE0LjUgNDQuNiAyMS43IDY2LjlDMTMwIDE2MS4zIDExMSAxNDcuNiA5Mi4xIDEzMy44IDczLjEgMTQ3LjYgNTQuMSAxNjEuMyAzNS4yIDE3NS4xIDQyLjQgMTUyLjggNDkuNyAxMzAuNSA1Ni45IDEwOC4yIDM3LjkgOTQuNSAxOSA4MC43IDAgNjYuOSAyMy40IDY2LjkgNDYuOSA2Ni45IDcwLjMgNjYuOSA3Ny42IDQ0LjYgODQuOCAyMi4zIDkyLjEgMFoiDQogICAgICAgICAgZmlsbD0ib3JhbmdlIg0KICAgICAgICAvPg0KICAgICAgPC9zdmc+");
    // prettier-ignore
    // background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 184.1 175.1'><path strokeWidth='0.9' d='m92.1 0c7.2 22.3 14.5 44.6 21.7 66.9 23.4 0 46.9 0 70.3 0-19 13.8-37.9 27.6-56.9 41.3 7.2 22.3 14.5 44.6 21.7 66.9C130 161.3 111 147.6 92.1 133.8 73.1 147.6 54.1 161.3 35.2 175.1 42.4 152.8 49.7 130.5 56.9 108.2 37.9 94.5 19 80.7 0 66.9 23.4 66.9 46.9 66.9 70.3 66.9 77.6 44.6 84.8 22.3 92.1 0Z' fill='orange' /></svg>")
    // repeat content-box;
    // NOTE: this is an svg wrapped inside another svg to add spacing around the star - inner svg is smaller to add some space

    background: ${(props) =>
        `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><image width='${props.height *
          starDimensions}' height='${props.height *
          starDimensions}' x='${props.height *
          starPaddingX}' y='${props.height *
          starPaddingY}' xlink:href='image/svg+xml;base64,${base64Svg}'/></svg>")`},
      ${(props) =>
        `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><image width='${props.height *
          starDimensions}' height='${props.height *
          starDimensions}' x='${props.height *
          starPaddingX}' y='${props.height *
          starPaddingY}' xlink:href='image/svg+xml;base64,${base64Svg}'/></svg>")`};

    background-size: ${(props) =>
        `${props.height * 0.0633 * 2}px ${props.height * 0.0538 * 2}px`},
      ${(props) =>
        `${props.height * 0.0633 * 2}px ${props.height * 0.0538 * 2}px`};

    padding: ${(props) =>
      `${props.height * unionPaddingY}px ${props.height * unionPaddingX}px`};

    background-clip: content-box, padding-box;
    // background-origin: content-box, padding-box;

    background-position: ${(props) =>
        `${props.height * innerStarOffsetX}px ${props.height *
          innerStarOffsetY}px`},
      0 0;

    background-size: ${(props) =>
      `${props.height * 0.0633 * 2}px ${props.height * 0.0538 * 2}px`};

    // background-origin: content-box;
    // background-clip: content-box;
  }

  .FlagStar {
    height: ${(props) => `${props.height * 0.0616}px`};
    width: ${(props) => `${props.height * 0.0616}px`};
  }
`;

// background: ${props =>
//   `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><image width='${props.height *
//     starDimensions}' height='${props.height *
//     starDimensions}' x='${props.height * starPaddingX}' y='${props.height *
//     starPaddingY}' xlink:href='image/svg+xml;base64,${base64Svg}'/></svg>")`};

// NOTE below are the sizes for the stars -->> use the padded star instead
// background-size: ${props =>
//   `${props.height * 0.0616}px ${props.height * 0.0616}px`};
// paddings...
// padding: ${props =>
//   `${props.height * (0.0538 - 0.5 * 0.0616)}px ${props.height *
//     (0.0633 - 0.5 * 0.0616)}px`};

const FlagComponent = ({ height = 300 }) => {
  //
  return <StyledFlag height={height} />;
};
export default FlagComponent;

// padding: ${props =>
//   `${props.height * (0.0538 - 0.5 * 0.0616)}px ${props.height *
//     (0.0633 - 0.5 * 0.0616)}px`};
// // background: green; // #002469;
// width: ${props => `${props.height * 0.76}px`};
// height: ${props => `${(props.height * 7) / 13.0}px`};
// display: flex;
// flex-wrap: wrap;

// .gap {
//   width: ${props => `${props.height * (0.0633 * 2 - 0.0616)}px`};
// }

// &:after {
//   content: "★";
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 100;
//   font-size: ${props => `${props.height * 0.0616}px`};
// }
