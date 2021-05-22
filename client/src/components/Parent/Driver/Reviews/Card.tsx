import styled from 'styled-components'
import { Color } from '../../../Shared/contant/color.enum'
import { getDate } from '../../../Shared/utils/parser'

export type ReviewCardProps = { text: string; createdAt: Date }

export default function ReviewCard({ text, createdAt }: ReviewCardProps) {
  return (
    <Wrapper>
      <Text>{text}</Text>
      <Date>{getDate(createdAt)}</Date>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  padding: 1.6rem 2.2rem;
  border-radius: 1.4rem;
  background-color: ${Color.g300};

  display: flex;
  justify-content: space-between;
  margin-bottom: 1.6rem;
`

const Text = styled.p`
  font-size: 1.5rem;
`

const Date = styled.p`
  font-size: 1.2rem;
`
