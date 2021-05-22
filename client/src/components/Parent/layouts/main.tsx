import styled from 'styled-components'
import { MainHeader } from '../headers/main'

export default function MainLayout(props: any) {
  const { withoutHeader } = props
  return (
    <Wrapper>
      <Content>
        {!withoutHeader && <MainHeader />}
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
  padding-left: 1.8rem;
  padding-right: 1.8rem;
`
