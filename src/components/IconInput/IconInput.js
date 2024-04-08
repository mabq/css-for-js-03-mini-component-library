import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  // iconSize must be unitless because of the Icon component
  small: {
    '--iconSize': '16px',
    '--fontSize': (14 / 16) + 'rem',
    '--padding': '4px 10px 4px 24px',
    '--borderWidth': '1px'
  },
  large: {
    '--iconSize': '24px',
    '--fontSize': (18 / 16) + 'rem',
    '--padding': '8px 12px 7px 36px',
    '--borderWidth': '2px'
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const style = STYLES[size];
  style['--width'] = width + 'px';

  return (
    <Wrapper style={style}>
      <VisuallyHidden>
        <label>{label}</label>
      </VisuallyHidden>
      <IconWrapper>
        <Icon id={icon} size={parseInt(style.iconSize)}></Icon>
      </IconWrapper>
      <Input placeholder={placeholder}></Input>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: var(--width);
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  pointer-events: none;
  left: 0;
  width: var(--iconSize);
  /* Vertically centerd */
  position: absolute;
  top: 0;
  bottom: 0;
  height: var(--iconSize);
  margin: auto;
`

const Input = styled.input`
  width: 100%;
  padding: var(--padding);
  border: none;
  border-bottom: var(--borderWidth) solid ${COLORS.black};
  font-family: 'Roboto', sans-serif;
  font-size: var(--fontSize);
  font-weight: 700;
  appearance: none;
  outline-offset: 2px;
  color: inherit;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 500;
  }
`

export default IconInput;

