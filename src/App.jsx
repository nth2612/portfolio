import { useState } from 'react'
import MyProjects from './components/Projects/MyProjects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyProjects/>
    </>
  )
}

export default App
