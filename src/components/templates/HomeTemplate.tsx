import { useContext, FC } from 'react'
import { Context } from '@store/context'
import Button from '../UI/Button'
import DotElement from '../UI/DotElement'
import { Match } from '../../utils/Match'

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
        <Button 
          onClick={() => startGame('Mexico', 'Canada')} 
          testId='start-mexico-canada'
        >
          <p>Mexico vs Canada</p>
        </Button>
        <Button 
          onClick={() => startGame('Spain', 'Brazil')} 
          testId='start-spain-brazil'
        >
          <p>Spain vs Brazil</p>
        </Button>
        <Button 
          onClick={() => startGame('Germany', 'France')} 
          testId='start-germany-franc'
        >
          <p>Germany vs France</p>
        </Button>
        <Button 
          onClick={() => startGame('Uruguay', 'Italy')} 
          testId='start-uruguay-italy'
        >
          <p>Uruguay vs Italy</p>
        </Button>
        <Button 
          onClick={() => startGame('Argentina', 'Australia')} 
          testId='start-argentina-ausralia'
        >
          <p>Argentina vs Australia</p>
        </Button>
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
          <DotElement />
          <DotElement />
          <DotElement />
        </div>
        {matches && matches.length > 0 ? 
          matches.map((match: Match, index: number) => (
            <div key={index} data-testid={match}>
              {match.homeTeam} {match.homeScore} - {match.awayTeam} {match.awayScore}
            </div>)) : 
          <h5
            className='text-md'
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