import React from 'react'
import Link from 'next/link'

function Lists(props) {
  
  const menus = props.lists.map((list, i) => {
    return (
      <li key={i}>
        <Link href={`/${props.name.toLowerCase()}/[slug]`} 
          as={`/${props.name.toLowerCase()}/${list.link}`}>
          <a className='font-a9'>{list.name}</a>
        </Link>
      </li> )
    })

  return (
    <>
      {menus}
    </>
  )
}

export default Lists
