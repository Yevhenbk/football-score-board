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

  const finishGame = (index: number) => {
    setMatches(prevMatches => [...prevMatches.slice(0, index), ...prevMatches.slice(index + 1)])
  }

  return (
    <Context.Provider 
      value={{ matches, setMatches, startGame, finishGame }}
    >
      {props.children}
    </Context.Provider>
  )  
}

export default ContextProvider