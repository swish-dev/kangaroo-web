import styled, { css } from 'styled-components'
import { Color } from '../../Shared/contant/color.enum'

const Button = styled.button<{ theme?: any; br?: number }>`
  ${(props) =>
    props.theme === 'outlined' &&
    css`
      border: 1px solid ${Color.main};
      color: ${Color.main};
    `};
  ${(props) =>
    props.theme === 'filled' &&
    css`
      background-color: ${Color.main};
    `};
  border-radius: ${(props) => props.br && props.br + 'px'};
  cursor: pointer;
`
export default Button
