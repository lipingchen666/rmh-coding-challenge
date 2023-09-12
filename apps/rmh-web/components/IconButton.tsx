import React from 'react'

interface IconButtonProps {
    onClick?: () => void
}
export const IconButton = ({
    onClick
}: IconButtonProps) => {
  return (
    <button type="button" onClick={onClick}>
        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 2V14H3.17L2 15.17V2H18ZM18 0H2C0.9 0 0 0.9 0 2V17.59C0 18.48 1.08 18.93 1.71 18.3L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0Z" fill="#6B6F7B"/>
        </svg>
        <span className="sr-only">Icon description</span>
    </button>
  )
}
