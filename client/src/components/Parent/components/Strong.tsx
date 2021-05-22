import styled from 'styled-components'
import { Color } from '../../Shared/contant/color.enum'

const Strong = styled.strong<{ fs?: number; fw?: string; color?: string }>`
  font-size: ${(props) => props.fs && props.fs};
  font-weight: ${(props) => props.fw && props.fw};
  color: ${(props) => (props.color ? props.color : Color.main)};
`

export default Strong
