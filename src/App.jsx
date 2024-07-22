import MyProjects from './components/Projects/MyProjects'
import Header from './components/Header/Header'
import NavMobile from './components/Header/NavMobile/NavMobile'
import { useLayoutEffect, useState } from 'react'
import Overview from './components/Overview/Overview'
import AboutMe from './components/AboutMe/AboutMe'
import Skills from './components/Skills/Skills'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  if (isOpen) {
    document.body.style.overflow = "hidden"
  }
  else {
    document.body.style.overflow = "auto"
  }
  const [mode, setMode] = useState(() => localStorage.getItem("theme"))
  useLayoutEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light")
    }
    else if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark")
      document.body.style.backgroundColor = "#101204"
    }
  }, [])
  return (
    <>
      <NavMobile isOpen={isOpen} mode={mode} />
      <Header setIsOpen={setIsOpen} isOpen={isOpen} mode={mode} setMode={setMode} />
      <Overview/>
      <AboutMe/>
      <Skills/>
      {/* <MyProjects/> */}
    </>
  )
}

export default App
