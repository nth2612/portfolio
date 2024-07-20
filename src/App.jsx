import MyProjects from './components/Projects/MyProjects'
import Header from './components/Header/Header'
import NavMobile from './components/Header/NavMobile/NavMobile'
import { useLayoutEffect, useState } from 'react'
import Overview from './components/Overview/Overview'

function App() {
  const [isOpen, setIsOpen] = useState(false)
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
      <NavMobile isOpen={isOpen} />
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
      <Overview/>
      {/* <video src={chotoiditheo} controls ></video> */}
      {/* <MyProjects/> */}
    </>
  )
}

export default App
