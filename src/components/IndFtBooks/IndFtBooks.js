import React, {useState} from 'react'
import MenuBreadCrumb from './components/MenuBreadCrumb'
import SideNav from './components/SideNavs'
import BookoftheDay from './components/BookoftheDay'
import {Helpers} from '../../utils/common/helpers'
import FeatCatBooks from './components/FeatCatBooks'

export default function IndFtBooks(props) {
  
  const [current, setSlide] = useState(0)

  const shift = (scrl) => {
    const b = document.querySelectorAll('.indvl-ft-book-of-the-day-cont')
    if (scrl === 'left') {
      if (current <= 0) {
        Helpers.slideBooks(b[b.length - 1], b[current])
        setSlide(b.length - 1)
      } else {
        Helpers.slideBooks(b[current - 1], b[current])
        setSlide(current - 1)
      }
    } else {
      if (current >= b.length - 1) {
        Helpers.slideBooks(b[0], b[current])
        setSlide(0)
      } else {
        Helpers.slideBooks(b[current + 1], b[current])
        setSlide(current + 1)
      }
    }
  }
  
  return (
    <div className="ind-ft-books">
      <MenuBreadCrumb 
        menu={props.book}/>
      <div className="content-center ind-ft-books-wrapper">
        <SideNav 
          menus={props.menus}
          title={`${props.book}`}/>

        <div className='indvl-ft-books'>
          <BookoftheDay 
            book={props.book}
            bookofday={props.bookofday}
            click={(str)=>shift(str)}/>
          <FeatCatBooks 
            book={props.book}
            ftcatbook={props.ftcatbook} />
        </div>
      </div>
    </div>
  )
}


