import { useState } from 'react'
import styled from 'styled-components'

import MenuIcon from '../../../assets/icons/MenuIcon'
import MainDrawer from '../drawers/main'

export default function MainHeader() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Wrapper>
      <button onClick={handleOpen}>
        <MenuIcon />
      </button>
      <MainDrawer {...{ open, handleClose }} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 4.4rem;

  display: flex;
  align-items: center;
`
