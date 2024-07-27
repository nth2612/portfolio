import { useEffect, useState } from "react"
import ButtonMobile from "./ButtonMobile/ButtonMobile"
import Logo from "./Logo/Logo"
import MenuTop from "./MenuTop/MenuTop"
import ThemeMode from "./ThemeMode/ThemeMode"

const Header = ({ setIsOpen, isOpen, mode, setMode, skillRef, aboutRef, contactRef, projectRef }) => {
  const [hasShadow, setHasShadow] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true)
      }
      else {
        setHasShadow(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <header className={`fixed z-50 dark:bg-bg-dark bg-white top-0 w-full ${hasShadow ? 'shadow-nav' : undefined}`}>
      <div className="container flex justify-between p-2 items-center">
        <ButtonMobile setIsOpen={setIsOpen} isOpen={isOpen}/>
        <Logo/>
        <MenuTop skillRef={skillRef} aboutRef={aboutRef} contactRef={contactRef} projectRef={projectRef}/>
        <ThemeMode mode={mode} setMode={setMode}/>
      </div>
    </header>
  )
}

export default Header
