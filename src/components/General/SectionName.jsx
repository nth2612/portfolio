const SectionName = ({ text }) => {
  return (
    <div className="section-name w-fit mx-auto text-3xl relative font-semibold after:bg-primary dark:after:bg-primary-dark dark:text-normal-dark my-10">
      {text}
    </div>
  )
}

export default SectionName
