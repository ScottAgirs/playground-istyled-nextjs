import React from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';

const StyledButton = styled.span`
  cursor: pointer;
  color: ${({ reversed, active }) =>
    reversed ? (active ? 'white' : '#aaa') : active ? 'black' : '#ccc'};
`;
const StyledIcon = styled.span`
  font-size: 24px;
  vertical-align: text-bottom;
`;
const StyledMenu = styled.div`
  & > * {
    display: inline-block;
  }
  & > * + * {
    margin-left: 15px;
  }
`;

export const Button = React.forwardRef(
  ({ className, active, reversed, ...props }, ref) => (
    <StyledButton
      active={active}
      reversed={reversed}
      {...props}
      ref={ref}
      className={className}
    />
  )
);

export const Icon = React.forwardRef(({ className, ...props }, ref) => (
  <StyledIcon {...props} ref={ref} className={className} />
));

export const Menu = React.forwardRef(({ className, ...props }, ref) => (
  <StyledMenu {...props} ref={ref} className={className} />
));

export const Portal = ({ children }) => {
  if (!process.browser) return '';
  return ReactDOM.createPortal(children, document.body);
};
