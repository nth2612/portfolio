import SectionName from "../General/SectionName"
import Skill from "./Skill/Skill"
import htmllogo from '~/assets/html-removebg-preview.png'
import csslogo from '~/assets/css-logo.png'
import javascriptlogo from '~/assets/js-removebg-preview-removebg-preview.png'
import muilogo from '~/assets/mui-logo.png'
import gitlogo from '~/assets/Git-logo.png'
import typescriptlogo from '~/assets/typescript-logo.png'
import reactlogo from '~/assets/react.png'
import tailwindlogo from '~/assets/testda-removebg-preview.png'

const listSkills = [
  {
    id: 1,
    nameSkill: "HTML5",
    imgSrc: htmllogo
  },
  {
    id: 2,
    nameSkill: "CSS3",
    imgSrc: csslogo
  },
  {
    id: 3,
    nameSkill: "Javascript",
    imgSrc: javascriptlogo
  },
  {
    id: 4,
    nameSkill: "Typescript",
    imgSrc: typescriptlogo
  },
  {
    id: 5,
    nameSkill: "ReactJS",
    imgSrc: reactlogo
  },
  {
    id: 6,
    nameSkill: "Git",
    imgSrc: gitlogo
  },
  {
    id: 7,
    nameSkill: "Tailwind",
    imgSrc: tailwindlogo
  },
  {
    id: 8,
    nameSkill: "MUI",
    imgSrc: muilogo
  }
]

const Skills = () => {
  return (
    <div id="skills" className="container pb-10 px-2">
      <SectionName text="Skills" />
      <div className="grid-cols-2 gap-x-0 min-[420px]:gap-x-5 min-[576px]:grid-cols-3 md:grid-cols-4 min-[900px]:grid-cols-5 min-[1080px]:grid-cols-6 grid gap-y-5">
        {listSkills.map(skill => (
          <div key={skill.id} className="flex justify-center">
            <Skill nameSkill={skill.nameSkill} imgSrc={skill.imgSrc} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
