import { FC } from 'react'

interface Props {
  homeTeam: string,
  awayTeam: string,
  homeScore: number,
  awayScore: number,
  testId: string
}

const MatchItem: FC<Props> = (props) => {
  return (
    <div
      className='flex' 
      data-testid={props.testId}
    >
      <p>
        {props.homeTeam} {props.homeScore} - {props.awayTeam} {props.awayScore}
      </p>
    </div>
  )
}

export default MatchItem