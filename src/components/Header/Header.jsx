import ButtonMobile from "./ButtonMobile/ButtonMobile"
import Logo from "./Logo/Logo"
import MenuTop from "./MenuTop/MenuTop"
import ThemeMode from "./ThemeMode/ThemeMode"

const Header = () => {
  return (
    <header>
      <div className="container flex justify-between p-2 items-center">
        <ButtonMobile/>
        <Logo/>
        <MenuTop/>
        <ThemeMode/>
      </div>
    </header>
  )
}

export default Header
