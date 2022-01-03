import React from 'react'
import Link from 'next/link'
import {JSON} from '../../../utils/data'

function MidMenu() {
  const menu = JSON.links('midmenu')
  
  const midmenu = menu.map((m, i) => {
    return (
      <Link  href={m.link} as={m.link}key={i}>
        <a className='content-center text-1'>
          <img src={`/images${m.link}.svg`} alt={`${m.name.toLowerCase()} icon`}/>
          <span>{m.name}</span>
        </a>
      </Link>
    )
  })

  return (
    <div className='content-center mid-menu'>
      {midmenu}
    </div>
  )
}

export default MidMenu
