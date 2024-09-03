import React ,{usestate} from 'react'
import './story.css'

export default function story({isVisible ,onClose}) {
  if(!isVisible)return null;

  return (
    <div className='storyshow'>story
      <button onClick={onClose}> x</button>
    </div>
  )
}
