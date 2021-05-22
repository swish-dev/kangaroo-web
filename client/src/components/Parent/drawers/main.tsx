import { Drawer } from '@material-ui/core'
import styled from 'styled-components'
import { Color } from '../../Shared/contant/color.enum'

const Data = ["RESERVATION","PAYMENT","KIDS INFOS","SETTING"];

export type MainDrawerProps = {
  open: boolean
  handleClose: () => void
}

export default function MainDrawer({ open, handleClose }: MainDrawerProps) {
  return (
    <Drawer anchor="left" open={open} onClose={handleClose}>
      <Wrapper>
        {
          Data.map(v=><P key={v}>{v}</P>)
        }        
      </Wrapper>
    </Drawer>
  )
}

const Wrapper = styled.div`
  width: 283px;
  height: 100%;
  padding: 4rem 2rem;
  background-color: ${Color.g700};
`

const P = styled.p`
  font-size: 1.8rem;
    padding:2rem 0;
    color:white;
`
