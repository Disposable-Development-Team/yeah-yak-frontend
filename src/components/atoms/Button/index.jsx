import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const defaultProps = {
  color: 'deepgreen',
  size: 'medium',
  $outline: false,
};

const colorStyles = css`
  /* 색상 */
  ${({ theme, color }) => {
    const selectedColor = theme.colors[color] || theme.colors[defaultProps.color];

    return css`
      background: ${selectedColor};
      &:hover {
        background: ${lighten(0.1, selectedColor)};
      }
      &:active {
        background: ${darken(0.1, selectedColor)};
      }

      ${props =>
        props.$outline &&
        css`
          color: ${selectedColor};
          background: none;
          border: 1px solid ${selectedColor};
          &:hover {
            background: ${selectedColor};
            color: white;
          }
        `}
    `;
  }}
`;

const sizeStyles = css`
  /*크기*/
  ${({ theme, size }) => {
    const selectedSize = theme.buttonSize[size] || theme.buttonSize[defaultProps.size];
    return css`
      ${selectedSize}
    `;
  }}
`;

const fullWidthStyle = css`
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      &:not(:first-child) {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
`;

export const StyledButton = styled.button`
  /*공통 스타일*/
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  font-family: inherit;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  &:not(:first-child) {
    margin-left: 1rem;
  }

  &:disabled {
    pointer-events: none;
    filter: opacity(30%);
  }

  ${colorStyles}
  ${sizeStyles}
  ${fullWidthStyle}
`;

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

Button.defaultProps = defaultProps;

export default Button;
