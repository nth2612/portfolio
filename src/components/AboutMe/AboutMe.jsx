import SectionName from "../General/SectionName"
import DialpadIcon from '@mui/icons-material/Dialpad'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import MapIcon from '@mui/icons-material/Map'
import AbcIcon from '@mui/icons-material/Abc'

const aboutMe = 'Hello, I am a student passionate about programming with the desire to become a Front-end Developer. I am currently a fourth-year student, majoring in Software Technology at Electric Power University. I enjoy creating web interfaces that are beautiful, smooth, and interact well with users.'
const AboutMe = ({ useRef }) => {
  return (
    <div ref={useRef} id="about" className="container" >
      <SectionName text='About me' />
      <div className="px-2 block lg:flex lg:flex-row-reverse justify-center bg-[#FDF6ED] dark:bg-[#1a1a1a] py-5 rounded-lg">
        <div className="max-w-screen-sm lg:max-w-none px-4 pb-10 lg:p-0 mx-auto lg:pr-2">
          <p className="dark:text-normal-dark text-xl">{aboutMe}</p>
        </div>
        <div className="max-w-screen-sm pb-10 px-4 mx-auto flex flex-col gap-4 justify-center shrink-0 lg:m-0 lg:pb-0 lg:pl-2 lg:pr-6 dark:[&_svg]:text-icon-dark dark:[&_span]:text-normal-dark">
          <p>
            <AbcIcon fontSize="large"/>
            <span className="font-bold ml-2 text-lg">Nishigi</span>
          </p>
          <p>
            <DialpadIcon fontSize="large"/>
            <span className="font-bold ml-2 text-lg">0971425728</span>
          </p>
          <p>
            <MapIcon fontSize="large"/>
            <span className="font-bold ml-2 text-lg">Dong Anh, Ha Noi</span>
          </p>
          <p>
            <AlternateEmailIcon fontSize="large"/>
            <span className="font-bold ml-2 text-lg">notihuli@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
