import styled from 'styled-components'
import MainHeader from '../headers/main'
import BackHeader from '../headers/back'
import { Color } from '../../Shared/contant/color.enum'

export default function MainLayout(props: any) {
  const { withoutHeader, isBackHeader } = props
  return (
    <Wrapper>
      <Content>
        {!withoutHeader && (isBackHeader ? <BackHeader /> : <MainHeader />)}
        {props.children}
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  max-width: 600px;
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  font-size: 10rem;

  display: flex;
  flex-direction: column;
  flex: 1;
  align-self: center;
  position: relative;
  padding-left: 1.6rem;
  padding-right: 1.6rem;

  background-color: ${Color.background};
  color: white;
  input {
    background-color: ${Color.g100};
    color: white;
  }
`
