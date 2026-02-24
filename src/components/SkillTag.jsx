import { memo } from 'react'

function SkillTag({ children }) {
  return (
    <span className="skill-tag">
      {children}
    </span>
  )
}

export default memo(SkillTag)
