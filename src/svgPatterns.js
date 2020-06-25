import * as React from 'react';

const Checkers = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100">
      <pattern
        id="pattern-checkers"
        x="0"
        y="0"
        width="20"
        height="20"
        patternUnits="userSpaceOnUse"
      >
        <rect width="10" height="10" x="0" y="0" fill="orange" />
        <rect width="10" height="10" x="10" y="10" fill="orange" />
      </pattern>

      <rect width="100%" height="100%" fill="url(#pattern-checkers)" />
    </svg>
  );
};

const Noise = ({ className, version }) => {
  const dim = 20;
  const maxOpacityPercentage = 25;
  const arr = new Array(dim * dim)
    .fill()
    .map(() => Math.round(Math.random() * maxOpacityPercentage) / 100.0);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      className={className}
    >
      <pattern
        id={`pattern-noise-${version}`}
        x="0"
        y="0"
        width={dim}
        height={dim}
        patternUnits="userSpaceOnUse"
      >
        {arr.map((op, i) => {
          return (
            <rect
              width="1"
              height="1"
              x={i % dim}
              y={i / dim}
              fill="lightgreen"
              fillOpacity={op}
            />
          );
        })}
      </pattern>
      <text x="20" y="20" fill="red">
        {version} {Math.floor(Math.random() * 100)}
      </text>
      <rect
        width="100%"
        height="100%"
        fill={`url(#pattern-noise-${version})`}
      />
    </svg>
  );
};

const NoiseMemoized = React.memo((props) => {
  return <Noise {...props} />;
});

export default Checkers;
export { Noise, NoiseMemoized };
