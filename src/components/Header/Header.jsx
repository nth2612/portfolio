import ButtonMobile from "./ButtonMobile/ButtonMobile"
import Logo from "./Logo/Logo"
import MenuTop from "./MenuTop/MenuTop"
import ThemeMode from "./ThemeMode/ThemeMode"

const Header = ({ setIsOpen, isOpen, mode, setMode }) => {
  return (
    <header>
      <div className="container flex justify-between p-2 items-center">
        <ButtonMobile setIsOpen={setIsOpen} isOpen={isOpen}/>
        <Logo/>
        <MenuTop/>
        <ThemeMode mode={mode} setMode={setMode}/>
      </div>
    </header>
  )
}

export default Header
