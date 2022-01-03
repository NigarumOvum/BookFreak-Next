import React from 'react'
import Link  from 'next/link'

function FooterHead() {
  return (
    <div className="content-center footer-header">
      <Link href="/">
        <a>
          <img src="/images/navbar-logo.png" alt="book worm logo"/>
        </a>
      </Link>
      
        <a href='https://developers.google.com/books' 
          rel="noopener noreferrer"
          target='_blank'>
          <img src="/images/google-books.png" alt="google books logo"/>
        </a>
    </div>
  )
}

export default FooterHead
