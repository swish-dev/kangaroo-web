import styled from 'styled-components'
import { IDriverInfo } from '../../../Shared/interfaces/Driver.interface'
import MbtisItem from './Item'

export type MbtisProps = Pick<IDriverInfo, 'mbtis'>

export default function Mbtis({ mbtis }: MbtisProps) {
  return (
    <Wrapper>
      <Row style={{ marginBottom: '2.2rem' }}>
        {mbtis.slice(0, 2).map((v, i) => (
          <MbtisItem key={i} {...v} />
        ))}
      </Row>
      <Row>
        {mbtis.slice(2, 5).map((v, i) => (
          <MbtisItem key={i} {...v} />
        ))}
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 5.8rem;
`

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`
