import { FC, ReactNode } from 'react'

interface Props {
  homeTeam: string,
  awayTeam: string,
  homeScore: number,
  awayScore: number,
  testId: string,
  children: ReactNode
}

const MatchItem: FC<Props> = (props) => {
  return (
    <div
      className='flex flex-col w-[35rem] justify-center
      text-2xl bg-[#4444] items-center py-4 px-8 rounded-[3px]' 
      data-testid={props.testId}
    >
      <div
        className='flex flex-row justify-between
        items-center w-[100%]'
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
      <div
        className='flex flex-row justify-between
        items-center w-[100%]'
      >
        {props.children}
      </div>
    </div>
  )
}

export default MatchItem