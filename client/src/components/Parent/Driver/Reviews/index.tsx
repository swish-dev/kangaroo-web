import styled from 'styled-components'
import { IDriverInfo } from '../../../Shared/interfaces/Driver.interface'
import ReviewCard from './Card'

export type ReviewsProps = Pick<IDriverInfo, 'reviews'>
export default function Reviews({ reviews }: ReviewsProps) {
  return (
    <Wrapper>
      <Title>Reviews</Title>
      {reviews?.map((v, i) => (
        <ReviewCard key={i} {...v} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Title = styled.p`
  height: 21px;
  width: 62px;

  font-family: Roboto;
  font-size: 1.8rem;

  font-weight: 700;
  line-height: 2.1rem;

  text-align: center;
  margin-left: 0.9rem;
  margin-bottom: 2rem;
`
