import { Drawer } from '@material-ui/core'
import styled from 'styled-components'

export type MainDrawerProps = {
  open: boolean
  handleClose: () => void
}

export default function MainDrawer({ open, handleClose }: MainDrawerProps) {
  return (
    <Drawer anchor="left" open={open} onClose={handleClose}>
      <Wrapper>
        <P>Reservation</P>
        <P>Reservation</P>
        <P>Reservation</P>
        <P>Reservation</P>
      </Wrapper>
    </Drawer>
  )
}

const Wrapper = styled.div`
  width: 283px;
  height: 100%;
  padding: 4rem 2rem;
`

const P = styled.p`
  font-size: 1.8rem;
`
