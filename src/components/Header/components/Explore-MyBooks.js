import React from 'react'
import Link from 'next/link'
import Svg from '../../Svg/index'

function ExploreMyBooks() {
  return (
    <div className="content-center navbar-right text-1">
      <Link href='/explore'>
        <a>
          <div className='content-center font-a8'>
            <Svg svg='explore'/>
            <span>Explore Books</span>
          </div>
        </a>
      </Link>
      {/* <Link href='/my-books'>
        <a>
          <div className='content-center'>
            <Svg svg='my books'/>
            <span>My Books</span>
          </div>
        </a>
      </Link> */}
    </div>
  )
}

export default ExploreMyBooks
