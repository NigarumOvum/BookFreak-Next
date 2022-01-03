import React from 'react'
import Svg from '../../Svg'

function BookHeader(props) {
  return (
    <div className="indvl-book-sel-header-wrapper text-2">
      <span className='title font-b2'>{`${props.cattitle} Books`}</span>
      <div className="content-center indvl-book-sel-desc">
        <p className='total-books font-b3'>{props.total} <span>Books</span></p>
        <div className='content-center grid-btn'>
          <div className="content-center btn-grid">
            <span className='font-b3'
              onClick={()=>props.click('grid')}>
              Grid
              <Svg 
                svg='grid'
                color={props.style === 'grid' ? 'F3BD36': 'B1B1B1'}/></span>
          </div>
          <div className="content-center btn-list">
            <span className='font-b3'
              onClick={()=>props.click('list')}>
              List
              <Svg 
                svg='list'
                color={props.style === 'list' ? 'F3BD36': 'B1B1B1'}/></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookHeader
