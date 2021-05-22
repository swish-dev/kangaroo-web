import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { Color } from '../../../Shared/contant/color.enum'

export default function Footer() {
  return (
    <Wrapper>
      <ButtonWrapper>
        <Button to="/schedule" theme="outlined">
          <P>schedule</P>
        </Button>
        <Button to="/place" theme="filled">
          <P>Call now</P>
        </Button>
      </ButtonWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 3.4rem;
  max-width: inherit;
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`
const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0 1.1rem;
`
const Button = styled(Link)`
  display: flex;
  flex: 1;
  margin: 0 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 1.4rem;

  ${(props) =>
    props.theme === 'outlined' &&
    css`
      background-color: ${Color.background};
      border: 1px solid ${Color.main};
      color: ${Color.main};
    `};
  ${(props) =>
    props.theme === 'filled' &&
    css`
      background-color: ${Color.main};
    `};
`

const P = styled.p`
  font-size: 1.6rem;
  height: fit-content;
`
