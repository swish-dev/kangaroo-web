import { useState } from 'react'
import styled from 'styled-components'
import MainDrawer from '../drawers/main'

export function MainHeader() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Wrapper>
      <button onClick={handleOpen}> d </button>
      <MainDrawer {...{ open, handleClose }} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 4.4rem;

  display: flex;
  padding: 0 2rem 0 2rem;
  align-items: center;
`
