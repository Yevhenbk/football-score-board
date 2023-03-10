import { ReactNode, MouseEventHandler, FC } from 'react'

interface Props {
  children: ReactNode,
  onClick: MouseEventHandler,
  testId: string
}

const Button: FC<Props> = (props) => {
  return (
    <div
      className='btn min-w-32 h-12 bg-transparent
      text-white text-lg flex flex-row px-4
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