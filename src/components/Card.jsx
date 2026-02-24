import { memo } from 'react'

function Card({ children, className = '', ...props }) {
  return (
    <div className={`card ${className}`} {...props}>
      {children}
    </div>
  )
}

export default memo(Card)
