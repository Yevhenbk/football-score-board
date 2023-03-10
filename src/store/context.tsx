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

  const updateScore = (index: number, homeScore: number, awayScore: number) => {
    setMatches(prevMatches => [
      ...prevMatches.slice(0, index),
      {
        ...prevMatches[index],
        homeScore: homeScore,
        awayScore: awayScore
      },
      ...prevMatches.slice(index + 1)
    ])
  }

  const sortMatches = (matches: Match[]) => {
    return [...matches].sort((a, b) => {
      const aTotal = a.homeScore + a.awayScore
      const bTotal = b.homeScore + b.awayScore
  
      if (aTotal !== bTotal) {
        return bTotal - aTotal
      } else {
        return matches.indexOf(b) - matches.indexOf(a)
      }
    })
  }

  const sortedMatches = sortMatches(matches)

  return (
    <Context.Provider 
      value={{ matches, setMatches, startGame, finishGame, updateScore,
      sortedMatches }}
    >
      {props.children}
    </Context.Provider>
  )  
}

export default ContextProvider