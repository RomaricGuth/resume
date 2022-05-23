function Achievement({text, skills, award}) {
  return (
    <div className="achievement">
      <div>
        {text}
      </div>
      {/*<div className="skills">
        {skills.join(', ')}
      </div>*/}
      <div className="award">
        {award}
      </div>
    </div>
  )
}

export default Achievement;
