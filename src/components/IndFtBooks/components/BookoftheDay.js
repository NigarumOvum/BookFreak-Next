import React from 'react'
import CatBookoftheDay from '../../Books/CatBooksoftheDay'
import ChevArrows from '../../ChevsArrows/ChevArrows'

function BookoftheDay(props) {
  return (

    <>
      <div className="content-center indvl-ft-book-of-the-day-title text-1">
        <span className='font-a3'>{`${props.book} Books of the Day`}</span>
      </div>

      <div className="indvl-ft-book-of-the-day text-1">
        <CatBookoftheDay books={props.bookofday}/>
        <ChevArrows 
          click={(str)=>props.click(str)}/>
      </div>
    </>
  )
}

export default BookoftheDay
