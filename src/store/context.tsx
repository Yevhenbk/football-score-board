import { createContext, useState } from 'react'

export const Context = createContext<any>('')

type Props = {
  children: React.ReactNode
}

type Match = {
  homeTeam: string
  awayTeam: string
  homeScore: number
  awayScore: number
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