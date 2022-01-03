import React from 'react'
import Link from 'next/link'
import Svg from '../../Svg'

function MenuBreadCrumb(props) {
  // console.log(props.cattitle)
  return (
    <div className="content-center menu-breadcrumb text-1">
      <Link href='/'><a className='font-a8'>Home</a></Link> <Svg svg={'chevright'} />
      <Link href={`/${props.menu.toLowerCase()}`}>
        <a className='font-a8'>{props.menu}</a>
      </Link> <Svg svg={'chevright'} />
      <Link href={`/${props.menu.toLowerCase()}/${props.cattitle.link}`}>
        <a className='font-a8'>{props.cattitle.name}</a>
      </Link>

    </div>
  )
}

export default MenuBreadCrumb
