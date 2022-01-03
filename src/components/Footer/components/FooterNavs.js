import React from 'react'
import Link from 'next/link'

function FooterNavs(props) {

  const lists = props.lists.map((list, i) => {
    return (
      <li key={i}>
        <Link href={list.link}>
          <a className={`${list.head ? 'footer-head-list' : ''} font-a7`}>
            {list.name}</a>
        </Link>
      </li>    
    )
  })

  return (
    <ul className='footer-menu-section'>
      {lists}
    </ul>
  )
}

export default FooterNavs
