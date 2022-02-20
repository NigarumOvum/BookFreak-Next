import React from 'react'
import Link from 'next/link'
import {JSON} from '../../../utils/data'

function FooterLinks() {
  const links = JSON.links('ftrlinks')

  const socialIcons = links.map((l, i) => {
    return (
    <Link href={l.link} key={i}>
      <a>
        <span>
          <img src={`/images/${l.name}.svg`} alt={`${l.name} icon`}/>
        </span>
      </a>
    </Link> )
  })

  return (
    <div className='content-center footer-links'>
      <span className='text-project font-a9'>
        A project for fun learning and creativity.
      </span>
      <div className="content-center footer-social-links">
        {socialIcons}
      </div>
      <span className='text-copyright font-a9'>
        © Brealy padron Rodriguez 2021.
      </span>
    </div>
  )
}

export default FooterLinks
