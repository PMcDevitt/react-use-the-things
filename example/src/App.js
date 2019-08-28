import React from 'react'
import { useMyHook } from '@pmcdevitt/react-use-the-things'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App