import MyProjects from './components/Projects/MyProjects'
import Header from './components/Header/Header'
import NavMobile from './components/Header/NavMobile/NavMobile'
import { useState } from 'react'
import Overview from './components/Overview/Overview'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <NavMobile isOpen={isOpen} />
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
      <Overview/>
      {/* <MyProjects/> */}
    </>
  )
}

export default App
