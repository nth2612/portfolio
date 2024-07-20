import ButtonMobile from "./ButtonMobile/ButtonMobile"
import Logo from "./Logo/Logo"
import MenuTop from "./MenuTop/MenuTop"
import ThemeMode from "./ThemeMode/ThemeMode"

const Header = ({ setIsOpen, isOpen }) => {
  return (
    <header>
      <div className="container flex justify-between p-2 items-center dark:bg-bg-dark">
        <ButtonMobile setIsOpen={setIsOpen} isOpen={isOpen}/>
        <Logo/>
        <MenuTop/>
        <ThemeMode/>
      </div>
    </header>
  )
}

export default Header
