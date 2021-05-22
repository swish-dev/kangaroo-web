import { useHistory } from 'react-router'
import styled from 'styled-components'
import TouchBox from "../../components/TouchBox"

export type FavoriteItemProps = { name: string; imageUrl: string }

export default function FavoriteItem({ name, imageUrl }: FavoriteItemProps) {
  const history = useHistory();

  return (
    <TouchBox style={{marginRight:'2rem'}}>
      <Wrapper onClick={()=>{
        history.push('/onboard');
      }}>
        <Img src={`/images/favorites/${imageUrl}`} />
        <P>{name}</P>
      </Wrapper>
    </TouchBox>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  
`
const Img = styled.img`
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 999px;
  margin-bottom: 1.2rem;
`

const P = styled.p`
  width: 6.4rem;
  text-align: center;
  font-weight: bold;
  font-size: 1.1rem;
`
