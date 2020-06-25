import React, { useState } from 'react';

import styled from 'styled-components';
import classnames from 'classnames';
// import App from '../src/App';

import FlagSimpleAnimation from '../src/FlagSimpleAnimation';
import FlagAnimatedSvg from '../src/FlagAnimatedSvg';
import Radar from '../src/Radar';

const animations = [
  //
  { id: 'flag', label: 'Flag' },
  { id: 'flagAnimated', label: 'Flagpole' },
  { id: 'radar', label: 'Radar' },
];

const StyledButton = styled.button`
  height: 40px;
  width: 100%;
  font-size: 24px;
  margin: 5px 0;
  border-radius: 15px;
  &:hover {
    color: green;
  }
  ${({ active }) => active && `background: orange`}
  transition: color 0.2s, background 0.4s
`;

const AnimationButtons = ({ className, onClick, activeAnimation }) => {
  return (
    <div className={classnames('AnimationButtons', className)}>
      {animations.map((animation) => (
        <StyledButton
          type="button"
          onClick={() => onClick(animation.id)}
          active={animation.id === activeAnimation}
        >
          {animation.label}
        </StyledButton>
      ))}
    </div>
  );
};

const StyledAnimationButtons = styled(AnimationButtons)`
  display: flex;
  flex-direction: column;
`;

const UnstyledNavigation = ({ className, onClick, activeAnimation }) => {
  return (
    <div className={classnames('Navigation', className)}>
      <h3>Animations</h3>
      <StyledAnimationButtons
        onClick={onClick}
        activeAnimation={activeAnimation}
      />
    </div>
  );
};

const Navigation = styled(UnstyledNavigation)`
  width: 200px;
  background: red;
  margin: 0 40px 0 0;
  padding: 0.5em;

  h3 {
    color: white;
    text-transform: uppercase;
  }
`;

const AnimationArea = styled.div`
  background: lightgray;
  min-width: 710px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AnimationOption = ({ name, selected, children }) => {
  return (
    <div style={{ display: 'flex', 'justify-content': 'space-around' }}>
      {name === selected && children}
    </div>
  );
};

const Examples = ({ className }) => {
  const [animation, setAnimation] = useState('flag');
  return (
    <div className={classnames('Examples', className)}>
      <Navigation onClick={setAnimation} activeAnimation={animation} />
      <AnimationArea>
        <AnimationOption name="flag" selected={animation}>
          <FlagSimpleAnimation height={300} />
        </AnimationOption>
        <AnimationOption name="flagAnimated" selected={animation}>
          <FlagAnimatedSvg height={300} />
        </AnimationOption>
        <AnimationOption name="radar" selected={animation}>
          <Radar height={400} />
        </AnimationOption>
      </AnimationArea>
    </div>
  );
};

const StyledExamples = styled(Examples)`
  display: flex;
  width: 1000px;
  height: 100%;
`;

export default StyledExamples;
