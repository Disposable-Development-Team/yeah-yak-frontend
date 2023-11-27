import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const colorStyles = css`
  /*색상 */
  ${({ theme, color }) => {
    const selected = theme.colors[color];

    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
      ${props =>
        props.outline &&
        css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `}
    `;
  }}
`;

const sizeStyles = css`
  /*크기*/
  ${props =>
    props.size === 'large' &&
    css`
      height: 3rem;
      font-size: 1.25rem;
    `}
  ${props =>
    props.size === 'medium' &&
    css`
      height: 2.25rem;
      font-size: 1rem;
    `}
    ${props =>
    props.size === 'small' &&
    css`
      height: 1.75rem;
      font-size: 0.875rem;
    `}
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
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  &:not(:first-child) {
    margin-left: 1rem;
  }

  ${colorStyles}
  ${sizeStyles}
  ${fullWidthStyle}
`;

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

Button.defaultProps = {
  color: 'deepgreen',
  size: 'medium',
  outline: false,
};

export default Button;
