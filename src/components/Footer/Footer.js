import React from 'react'
import FooterHead from './components/FooterHead'
import FooterNavs from './components/FooterNavs'
import FooterLinks from './components/FooterLinks'
import {JSON} from '../../utils/data'

function Footer() {
  const lists = JSON.links('ftrnavs')
  const navlists = lists.map((list, i) => {
    return <FooterNavs lists={list} key={i}/>
  })
    
  return (
    <footer className='text-1'>
      <FooterHead />
      <div className="footer-menu">
        {navlists}
      </div>
      <FooterLinks />
    </footer>
  )
}

export default Footer
