import React from 'react'
import Link from 'next/link'
import Lists from './components/Lists'

function Explore(props) {

  const menulists = props.menulists.books.map((menu, i) => {
    return <div key={i}
      className="explore-menu-wrapper text-1">
      <span>
        <Link href={`/${menu.name.toLowerCase()}`}>
          <a className='font-a5'>{menu.name}</a>
        </Link>
      </span>
      <ul>
        <Lists 
          lists={menu.lists}
          name={menu.name}/>
      </ul>
    </div>
  })
  

  return (
    <div className="content-center explore-container">
      {menulists}      
    </div>
  )
}

export default Explore
