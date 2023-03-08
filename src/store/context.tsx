import { createContext } from 'react'

export const Context = createContext<any>('')

type Props = {
  children: React.ReactNode
}

const ContextProvider: React.FC<Props> = (props) => {

  const testingVariable: string = 'Hello World'

  return (
    <Context.Provider value={{ testingVariable }}>
      {props.children}
    </Context.Provider>
  )  
}

export default ContextProvider