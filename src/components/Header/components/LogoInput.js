import React from 'react'
import Svg from '../../Svg/index'

function TopNav(props) {

  return (
    <div className="content-center navbar-left">
      <div className='logo'>
        <a href="/">
          <img src="/images/navbar-logo.png" alt=""/>
        </a>
      </div>
      <div className="content-center navbar-input">
        <input
          type="text"
          value={props.val}
          onChange={(e)=> props.change(e.target.value)}
          onKeyPress={(e)=> props.keypress(e.code)}
          className='text-1 font-a6'
          placeholder="Enter book title or author"/>
        <button 
          onClick={()=> props.keypress('click')}
          className='content-center'>
          <span>
            <Svg svg='search'/>
          </span>
        </button>
      </div>
    </div>
  )
}

export default TopNav
