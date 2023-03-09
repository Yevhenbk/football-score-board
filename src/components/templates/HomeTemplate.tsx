import { useContext } from 'react'
import { Context } from '@store/context'
import Button from '../UI/Button'

const HomeTemplate: React.FC = () => {

  const { matches, startGame } = useContext(Context)

  return (
    <main 
      className='flex flex-col justify-start pt-12
      items-center w-[100%] h-[100vh] gap-12'
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

      <div>
        <h2 className='text-xl text-center'>Matches</h2>
        {matches.map((match: any, index: any) => (
          <div key={index} data-testid={match}>
            {match.homeTeam} {match.homeScore} - {match.awayTeam} {match.awayScore}
          </div>))}
      </div>
    </main>
  )
}

export default HomeTemplate