import { useContext } from 'react'
import { Context } from '@store/context'
import Button from '../UI/Button'

const HomeTemplate: React.FC = () => {

  const { matches, startGame } = useContext(Context)

  return (
    <main 
      className='flex flex-col justify-center 
      items-center w-[100%] h-[100vh] gap-12'
    >
      <Button 
        onClick={() => startGame('Mexico', 'Canada')} 
        testId='start-mexico-canada'
      >
        <p>Mexico vs Canada</p>
      </Button> 

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