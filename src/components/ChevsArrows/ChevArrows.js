import React from 'react'
import Svg from '../Svg'

function ChevArrows(props) {

  return (
    <>
      <span 
        className='chevleft'
        onClick={()=>props.click('left')}>
        <Svg svg='arrowleft'/>
      </span>
      <span 
        className='chevright'
        onClick={()=>props.click('right')}>
        <Svg svg='arrowright'/>
      </span>
    </>
  )
}

export default ChevArrows
