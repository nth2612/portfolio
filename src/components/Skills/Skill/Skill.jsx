const Skill = ({ nameSkill, imgSrc }) => {
  return (
    <div className='bg-[#f7f7f7] dark:bg-[#5c5c5c6f] w-40 h-40 px-6 pt-3 pb-2 text-center rounded-2xl' >
      <div className='w-28 h-28'>
        <img loading="lazy" src={imgSrc} alt="skills" />
      </div>
      <p className='mt-1 dark:text-normal-dark'>{nameSkill}</p>
    </div>
  )
}

export default Skill
