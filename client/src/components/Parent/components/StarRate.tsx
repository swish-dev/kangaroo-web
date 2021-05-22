import { CSSProperties } from 'react'
import styled from 'styled-components'

import { Color } from '../../Shared/contant/color.enum'
import StarHalfIcon from '../../../assets/icons/StarHalfIcon'

export type StarRateProps = {
  score: number
  size?: string
  mb?: string
  offset?: string
  wrapperStyle?: CSSProperties
}

export default function StarRate({
  score,
  size = '1.8rem',
  mb,
  offset = '0.8rem',
  wrapperStyle,
}: StarRateProps) {
  return (
    <Wrapper style={wrapperStyle} mb={mb}>
      {[...Array(5)].map((_, index) => (
        <StarWrapper key={index}>
          <StarHalfIcon
            style={{
              width: size,
              height: size,
              marginRight: offset,
            }}
            fillLeft={index < score ? Color.main : Color.g1000}
            fillRight={index + 0.5 < score ? Color.main : Color.g1000}
          />
        </StarWrapper>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div<{ mb: any }>`
  display: flex;
  width: fit-content;
  justify-content: center;
  margin-bottom: ${(props) => props.mb && props.mb};
`

const StarWrapper = styled.div`
  position: relative;
  display: flex;
  width: fit-content;
  height: fit-content;
`
