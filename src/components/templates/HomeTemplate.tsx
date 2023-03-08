import { useContext } from 'react'
import { Context } from '@store/context'

const HomeTemplate: React.FC = () => {

  const { testingVariable } = useContext(Context)

  return (
    <main 
      className='flex justify-center items-center w-[100%] h-[100vh]'
    >
      <h1>{testingVariable}</h1>  
    </main>
  )
}

export default HomeTemplate