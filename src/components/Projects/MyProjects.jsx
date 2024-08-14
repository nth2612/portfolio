import SectionName from "../General/SectionName"
import Project from "./Project"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"
import tdtt from '~/assets/theducthethao.png'
import trello from '~/assets/trello.png'
import mci from '~/assets/mci.png'
import voz from '~/assets/voz.png'
import todo from '~/assets/todo.png'
import epu from '~/assets/epu.png'

const listProjects = [
  {
    id: 1,
    namePrj: "E-commerce Website",
    description: "A static website is built with HTML, CSS, Javascript",
    imgSrc: tdtt,
    linkGit: 'https://github.com/nth2612/webtinh',
    linkWeb: 'https://nth2612.github.io/webtinh'
  },
  {
    id: 2,
    namePrj: "One page EPU Student Home",
    description: "Practice reactjs with a single page",
    imgSrc: epu,
    linkGit: 'https://github.com/nth2612/reacttrangsinhvienepu',
    linkWeb: 'https://reacttrangsinhvienepu.vercel.app'
  },
  {
    id: 3,
    namePrj: "Voz Forum",
    description: "Building the voz forum, currently suspended and will be restarted in the future",
    imgSrc: voz,
    linkGit: '#',
    linkWeb: 'https://forum-voz.vercel.app'
  },
  {
    id: 4,
    namePrj: "Todo list",
    description: "Learn typescript, redux-toolkit through building a todolist website",
    imgSrc: todo,
    linkGit: 'https://github.com/nth2612/Todo-list-with-redux',
    linkWeb: 'https://todo-list-with-redux-six.vercel.app'
  },
  {
    id: 5,
    namePrj: "MCI Solutions",
    description: "Clone homepage for interview test (failed)",
    imgSrc: mci,
    linkGit: 'https://github.com/nth2612/clone-mci-home',
    linkWeb: 'https://clone-mci-home.vercel.app'
  },
  {
    id: 6,
    namePrj: "Trello",
    description: "Create trello interface with Material UI, with drag and drop feature use DndKit library",
    imgSrc: trello,
    linkGit: 'https://github.com/nth2612/thuc-hanh-trello-ui',
    linkWeb: 'https://trello-ui-eight.vercel.app'
  }
]

const newList = listProjects.reverse()

const MyProjects = ({ useRef }) => {
  useEffect(() => {
    Aos.init({ once: true, duration: 900 })
  }, [])
  return (
    <div ref={useRef} id="projects" className="container px-2 !mb-[200px]">
      <SectionName text="Projects" />
      <h2 className="text-normal dark:text-normal-dark font-medium text-2xl mb-4 max-[767px]:text-center">Here are a few of my projects:</h2>
      {newList.map(prj => <Project key={prj.id} name={prj.namePrj} index={prj.id} description={prj.description} imageSrc={prj.imgSrc} linkCode={prj.linkGit} linkWeb={prj.linkWeb} />)}
    </div>
  )
}

export default MyProjects
