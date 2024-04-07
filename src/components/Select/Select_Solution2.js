import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper
      style={{
        '--padding-left': "16px",
        '--padding-right': "52px",
      }}
    >
      <DynamicWidth aria-hidden="true">{displayedValue}</DynamicWidth>
      <Selector value={value} onChange={onChange} id="selectorX">
        {children}
      </Selector>
      <IconWrapper>
        <Icon id="chevron-down" size='24' strokeWidth="2"></Icon>
      </IconWrapper>
    </Wrapper >
  );
};


const Wrapper = styled.div`
  max-width: min-content; /* take the width from DynamicWidth child */
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`

const DynamicWidth = styled.div`
  /* this element defines the width of the parent */
  width: max-content;
  padding-left: var(--padding-left); /* same padding as Selector */
  padding-right: var(--padding-right); /* same padding as Selector */
  height:0px;
  color: transparent;
  user-select: none;
`

const Selector = styled.select`
  width: 100%; /* take width from parent */
  padding-left: var(--padding-left); /* same padding as Selector */
  padding-right: var(--padding-right); /* same padding as Selector */
  padding-top: 12px;
  padding-bottom: 12px;
  appearance: none; /* remove selector default icon */
  background-color: ${COLORS.transparentGray15};
  font-size: 1rem;
  border-radius: 8px;
  border: none;
  color: inherit;

  &:hover {
    cursor: pointer;
  }
`

const IconWrapper = styled.div`
  pointer-events: none;
  color: inherit;
  /* vertically centered no matter the height */
  position: absolute;
  top: 10px;
  right: 10px;
`

export default Select;
