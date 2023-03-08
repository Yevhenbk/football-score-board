import { createContext } from 'react'

export const Context = createContext<any>('')

type Props = {
  children: React.ReactNode
}

export const ContextProvider = (props: Props) => {

  const testingVariable: string = 'Hello World'

  return (
    <Context.Provider value={{ testingVariable }}>
      {props.children}
    </Context.Provider>
  )  
}