import React, {useState} from 'react'
import {Helpers} from '../../../utils/common/helpers'
import ChevArrows from '../../ChevsArrows/ChevArrows'
import MainBookoftheDay from '../../Books/MainBookoftheDay'

function BookDay(props) {
  const [current, setSlide] = useState(0)

  const shift = (scrl) =>{
    const b = document.querySelectorAll('.book-of-the-day')
    if(scrl === 'left') {
      if(current <= 0){
        Helpers.slideBooks(b[b.length-1], b[current])
        setSlide(b.length-1)
      } else {
        Helpers.slideBooks(b[current-1], b[current])
        setSlide(current-1)
      }
    } else {
      if(current >= b.length-1) {
        Helpers.slideBooks(b[0], b[current])
        setSlide(0)
      } else {
        Helpers.slideBooks(b[current+1], b[current])
        setSlide(current+1)
      }
    }
  }

  return (

    <div className='book-of-the-day-wrapper'>
      <div className='content-center book-of-the-day-title'>
        <span className='text-1 font-a3'>Books of the day</span>
      </div>
      <div className="book-of-the-day-container">
        <ChevArrows 
          click={(str)=>shift(str)}/>
        <MainBookoftheDay books={props.books}/>
      </div> 
    </div>
  )
}

export default BookDay
