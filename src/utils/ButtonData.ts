import { MouseEventHandler } from 'react'

export interface ButtonData {
  label: string
  onClick: MouseEventHandler
  testId: string
}