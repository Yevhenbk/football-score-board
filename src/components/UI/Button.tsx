import { ReactNode, MouseEventHandler } from 'react'

interface Props {
  children: ReactNode,
  onClick: MouseEventHandler,
  testId: string
}

const Button: React.FC<Props> = (props) => {
  return (
    <div
      className='btn min-w-40 h-12 bg-pink-500 
      text-white text-lg flex flex-row px-8
      justify-center items-center gap-4 m-0
      hover:bg-pink-600 cursor-pointer'
      onClick={props.onClick}
      data-testid={props.testId}
    >
      {props.children}  
    </div>
  )
}

export default Button