import styled from 'styled-components'
import { MainHeader } from '../headers/main'

export function MainLayout(props: any) {
  return (
    <Wrapper>
      <Content>
        <MainHeader />
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
  min-height: 100vh;
  height: fit-content;
  font-size: 10rem;

  display: flex;
  flex-direction: column;
  flex: 1;
  align-self: center;
  border-left: 1px solid black;
  border-right: 1px solid black;
  position: relative;
`
