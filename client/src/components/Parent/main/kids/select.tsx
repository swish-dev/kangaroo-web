import { useState } from 'react'
import styled from 'styled-components'

export function Select({ kids }: any) {
  const [isSelected, setIsSelected] = useState(0)
  const handleClick = (i: number) => {
    setIsSelected(i)
  }
  return (
    <Wrapper>
      {kids?.map((v: any, i: number) => (
        <Kid
          onClick={() => {
            handleClick(i)
          }}
          selected={i === isSelected}
          key={i}
        >
          <P>{v.name}</P>
        </Kid>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  padding: 2.4rem 1.8rem;
  display: flex;
`

const Kid = styled.div<{ selected: boolean }>`
  width: fit-content;
  height: fit-content;
  padding: 1.2rem 2.4rem;
  ${(props) => props.selected && `background:#DFDFDF`};
  border-radius: 999px;
`
const P = styled.p`
  font-size: 1.6rem;
`
