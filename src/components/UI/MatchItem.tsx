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
      className='flex flex-row w-[35rem] justify-between
      text-2xl bg-[#4444] items-center py-4 px-8 rounded-[3px]' 
      data-testid={props.testId}
    >
      <h6>
        {props.homeTeam}
      </h6>
      <h6>
        {props.homeScore}
      </h6>
      <h6>
        -
      </h6>
      <h6>
        {props.awayTeam}
      </h6>
      <h6>
        {props.awayScore}
      </h6>
    </div>
  )
}

export default MatchItem