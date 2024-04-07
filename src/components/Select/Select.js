import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper style={{ '--radius': '8px' }}>
      <Mask aria-hidden="true">{displayedValue}</Mask>
      <Selector value={value} onChange={onChange}>{children}</Selector>
      <IconWrapper>
        <Icon id="chevron-down" size='22' strokeWidth="2"></Icon>
      </IconWrapper>
    </Wrapper >
  );
};


const Wrapper = styled.div`
  position: relative;
  max-width: max-content;
  border-radius: var(--radius);
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`

const Mask = styled.p`
  padding: 12px 52px 12px 16px;
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--radius);
`

const Selector = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  appearance: none; /* remove selector default icon */
  border-radius: var(--radius);

  &:hover {
    cursor: pointer;
  }
`

const IconWrapper = styled.div`
  pointer-events: none;
  color: inherit;
  right: 12px;
  /* vertically centered no matter the height */
  position: absolute;
  top: 0px;
  bottom: 0px;
  height: 20px;
  margin: auto;
`

export default Select;
