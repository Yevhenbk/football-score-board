import { useContext, FC } from 'react'
import { Context } from '@store/context'
import Button from '@UI/Button'
import DotElement from '@UI/DotElement'
import MatchItem from '@UI/MatchItem'
import { Match } from '@utils/Match'
import { gameData, GameData } from '@utils/GameData'

const HomeTemplate: FC = () => {

  const { matches, startGame } = useContext(Context)

  return (
    <main 
      className='flex flex-col justify-start pt-12
      items-center w-[100%] h-[100vh] gap-16'
    >
      <div 
        className='flex flex-row rounded-[3px] overflow-hidden 
        bg-gradient-to-r from-[#cd6164] via-pink-500 to-[#5A3BF8]'
      >
        {gameData.map(({ teamA, teamB, testId, label }: GameData, index: number) => (
          <Button 
            key={index} 
            onClick={() => startGame(teamA, teamB)} 
            testId={testId}
          >
            <p>
              {label}
            </p>
          </Button>
        ))}
    </div>
      <div
        className='flex flex-col gap-8 items-center'
      >
        <h2 
          className='text-3xl text-center'
        >
          Matches
        </h2>
        <div 
          className='flex gap-4'
        >
          {[...Array(3)].map((_, index) => (
            <DotElement key={index} />
          ))}
        </div>
        {matches && matches.length > 0 ? 
          matches.map((match: Match, index: number) => (
            <MatchItem
              key={index} 
              testId={`match-${index}`}
              homeTeam={match.homeTeam}
              awayTeam={match.awayTeam}
              homeScore={match.homeScore}
              awayScore={match.awayScore}
            />)) : 
          <h5
            className='text-md text-center w-[35rem]'
          >
            Here you'll see a list of matches after adding each of them by pressing
            bottons from above
          </h5>
        }
      </div>
    </main>
  )
}

export default HomeTemplate