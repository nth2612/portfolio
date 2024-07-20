import { useEffect, useState } from "react"
import anhtoi from '~/assets/anhtoi.png'
import zawarudo from '~/assets/zawarudo.gif'
import myResume from '~/assets/Nguyen_Tuan_Hai_Resume_Intern_Front-end.pdf'
import Button from "../General/Button"
import GitHubIcon from '@mui/icons-material/GitHub'
import YouTubeIcon from '@mui/icons-material/YouTube'

const Overview = () => {
  const [showMe, setShowMe] = useState(false)
  const [showGif, setShowGif] = useState(false)
  const handleZaWarudo = () => {
    setShowGif(true)
    setShowMe(true)
  }
  useEffect(() => {
    if (showMe) {
      const timeId = setTimeout(() => {
        setShowGif(false)
      }, 2300)
      return () => clearTimeout(timeId)
    }
  }, [showMe])
  return (
    <div className="container px-2 block lg:flex justify-between items-center !mt-10">
      <div className="px-2 relative flex-1 self-stretch flex justify-center items-center">
        <div className="text-center">
          <p className="font-extrabold text-[50px] text-normal dark:text-red-400" >Hi there, I&apos;m</p>
          <span className={`text-7xl select-none font-black ${showMe && !showGif ? 'text-primary dark:text-primary-dark' : 'text-transparent'}`} >Nguyen Tuan Hai</span>
          <p className={`text-4xl select-none mb-4 mt-6 ${showMe && !showGif ? 'text-normal' : 'text-transparent'}`} >An Intern Web Frontend Developer &lt;/&gt;</p>
          {!showMe && <Button text='Show who this guy is' onClick={handleZaWarudo} />}
          {(showMe && !showGif)
            ? <a href={myResume} download>
              <Button text='Download resume' />
            </a>
            : <div className="w-16 h-10 bg-white"></div>}
          <div className="flex justify-center gap-4 mt-6">
            <div className="w-10 h-10 rounded-full shadow-circlebtn overflow-hidden group bg-[#3b5997] hover:bg-primary">
              <a href="https://www.facebook.com/nthresol" target="_blank" rel="noreferrer" className="block h-full p-[10px] text-white">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1.25rem" width="1.25rem" xmlns="http://www.w3.org/2000/svg">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                  </path>
                </svg>
              </a>
            </div>
            <div className="w-10 h-10 rounded-full shadow-circlebtn overflow-hidden group bg-[#1f2328] hover:bg-primary">
              <a href="https://github.com/nth2612" target="_blank" rel="noreferrer" className="block h-full p-2 text-white">
                <GitHubIcon/>
              </a>
            </div>
            <div className="w-10 h-10 rounded-full shadow-circlebtn overflow-hidden group bg-[#f00] hover:bg-primary">
              <a href="https://www.youtube.com/@nishigitakakata" target="_blank" rel="noreferrer" className="block h-full p-2 text-white">
                <YouTubeIcon/>
              </a>
            </div>
          </div>
        </div>
        {showGif &&
        <div className="absolute inset-0">
          <img src={zawarudo} alt="" className="w-full h-full" />
        </div>
        }
      </div>
      <div className="mx-auto mt-10 lg:m-0 rounded-lg" style={{ width: 300, height: 420, overflow: 'hidden', backgroundColor: 'red' }} >
        <img src={anhtoi} alt="" />
      </div>
    </div>
  )
}

export default Overview
