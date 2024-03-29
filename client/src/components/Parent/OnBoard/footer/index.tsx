import styled, { css } from 'styled-components'
import { Color } from '../../../Shared/contant/color.enum'

interface Props {
  text: string
  onClick: () => void
}

export default function Footer({ text, onClick }: Props) {
  return (
    <Wrapper>
      <ButtonWrapper>
        <Button theme="outlined" onClick={onClick}>
          <P>{text}</P>
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
const Button = styled.div`
  display: flex;
  flex: 1;
  margin: 0 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 1.4rem;

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
`

const P = styled.p`
  font-size: 1.6rem;
  height: fit-content;
`
