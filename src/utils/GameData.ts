export interface GameData {
  teamA: string
  teamB: string
  testId: string
  label: string
}

export const gameData: GameData[] = [
  { teamA: 'Mexico', teamB: 'Canada', testId: 'start-mexico-canada', label: 'Mexico vs Canada' },
  { teamA: 'Spain', teamB: 'Brazil', testId: 'start-spain-brazil', label: 'Spain vs Brazil' },
  { teamA: 'Germany', teamB: 'France', testId: 'start-germany-franc', label: 'Germany vs France' },
  { teamA: 'Uruguay', teamB: 'Italy', testId: 'start-uruguay-italy', label: 'Uruguay vs Italy' },
  { teamA: 'Argentina', teamB: 'Australia', testId: 'start-argentina-ausralia', label: 'Argentina vs Australia' },
]