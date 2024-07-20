import MyProjects from './components/Projects/MyProjects'
import Header from './components/Header/Header'
import NavMobile from './components/Header/NavMobile/NavMobile'
import { useEffect, useState } from 'react'
import Overview from './components/Overview/Overview'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light")
    }
  }, [])
  return (
    <>
      <NavMobile isOpen={isOpen} />
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
      <Overview/>
      {/* <video src={chotoiditheo} controls ></video> */}
      {/* <MyProjects/> */}
    </>
  )
}

export default App
