import { createContext, useState } from 'react'
import { Match } from '../utils/Match'

export const Context = createContext<any>('')

interface Props {
  children: React.ReactNode
}

const ContextProvider: React.FC<Props> = (props) => {

  const [matches, setMatches] = useState<Match[]>([])

  const startGame = (homeTeam: string, awayTeam: string) => {
    const newMatch = {
      homeTeam: homeTeam,
      awayTeam: awayTeam,
      homeScore: 0,
      awayScore: 0
    }
    
    setMatches(prevMatches => [...prevMatches, newMatch])
  }

  const testingVariable: string = 'Hello World'

  return (
    <Context.Provider 
      value={{ testingVariable, matches, setMatches, startGame }}
    >
      {props.children}
    </Context.Provider>
  )  
}

export default ContextProvider