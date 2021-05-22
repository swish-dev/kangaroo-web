import styled from 'styled-components'

export function MainLayout(props: any) {
  return <Wrapper>{props.children}</Wrapper>
}

const Wrapper = styled.div`
  max-width: 600px;
  font-size: 10rem;
`
