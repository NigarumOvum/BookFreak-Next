import React from 'react'
import Link from 'next/link'
import {JSON} from '../../../utils/data'

function MiniNavs() {
  const navlist = JSON.links('mininavs')

  const mininavs = navlist.map((list, i) => {
    return (
      <Link key={i}
        href={`${list.link}/[slug]`} 
        as={`${list.link}/${list.name.toLowerCase()}`} >
        <a className='text-1 font-a8'>{list.name}</a>
      </Link>
    )
  })
  
  return (
    <div className='mini-navs'>
      <div className="content-center mini-navs-wrapper">
        {mininavs}
      </div>
    </div>
  )
}

export default MiniNavs
