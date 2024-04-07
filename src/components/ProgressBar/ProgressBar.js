/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    radius: 4,
    height: 8,
    spacing: 0,
  },
  medium: {
    radius: 4,
    height: 12,
    spacing: 0,
  },
  large: {
    radius: 8,
    height: 24,
    spacing: 4,
  },
}

const ProgressBar = ({ value, size }) => {

  const style = SIZES[size];
  if (!style) {
    throw new Error(`Invalid value passed to "size": {size}`)
  }

  return (
    <Wrapper
      style={{
        '--spacing': style.spacing + 'px',
        '--radius': style.radius + 'px',
      }}
    >
      <Padding>
        <Bar
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{
            '--height': style.height + 'px',
            '--percentage': value + '%',
          }}
        // aria-label="progressbar"
        // aria-busy={(value >= 0 && value < 100) ? true : false}
        >
          <VisuallyHidden>{value}%</VisuallyHidden>
        </Bar>
      </Padding>
    </Wrapper >
  )
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
`

const Padding = styled.div`
  border-radius: var(--radius);
  border: var(--spacing) solid transparent; /* Can't apply border directly to Wrapper because of box-shadow */
  overflow: hidden; /* Rounding corners at start and end */
`

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: var(--height);
  width: var(--percentage);
`

export default ProgressBar;
