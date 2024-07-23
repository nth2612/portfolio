import SectionName from "../General/SectionName"
import Project from "./Project"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"
import tdtt from '~/assets/theducthethao.png'

const listProjects = [
  {
    id: 1,
    namePrj: "E-commerce Website",
    description: "A static website is built with HTML, CSS, Javascript",
    imgSrc: tdtt,
    linkGit: '',
    linkWeb: ''
  },
  {
    id: 2,
    namePrj: "",
    description: "",
    imgSrc: tdtt,
    linkGit: '',
    linkWeb: ''
  },
  {
    id: 3,
    namePrj: "",
    description: "",
    imgSrc: tdtt,
    linkGit: '',
    linkWeb: ''
  },
  {
    id: 4,
    namePrj: "",
    description: "",
    imgSrc: tdtt,
    linkGit: '',
    linkWeb: ''
  },
  {
    id: 5,
    namePrj: "",
    description: "",
    imgSrc: tdtt,
    linkGit: '',
    linkWeb: ''
  }
]

const MyProjects = () => {
  useEffect(() => {
    Aos.init({ once: true, duration: 900 })
  }, [])
  return (
    <div id="projects" className="container px-2 !mb-[200px]">
      <SectionName text="Projects" />
      <h2 className="text-normal dark:text-normal-dark font-medium text-2xl mb-4">Here are a few of my projects:</h2>
      {listProjects.map(prj => <Project key={prj.id} name={prj.namePrj} index={prj.id} description={prj.description} imageSrc={prj.imgSrc} />)}
    </div>
  )
}

export default MyProjects
