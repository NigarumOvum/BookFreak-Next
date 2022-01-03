import React from 'react'
import Svg from '../../Svg'
import Link from 'next/link'
import {JSON} from '../../../utils/data/index'

function BurgerBtn(props) {
  const menulists = JSON.getAllLists()
  
  // function to toggle burger menu
  const toggleBtn = () => {
    const burgermenu = document.querySelector('.burger-menulist-wrapper')
    burgermenu.classList.toggle('hide-btn')
  }
  
  const navlists = () => {
    return menulists.books.map((list, i) => {
      return (
        <div className="burger-navlist text-2 font-b3" key={i}>
          <div className="burger-navlist-wrapper">
            <div className="content-center burger-navlist-header">
              <Link href={`/${list.name.toLowerCase()}`}>
                <a>{list.name}</a>
              </Link>
              <img src='/images/arrow-right.svg' alt="arrow right icon"/>
            </div>
            <div className="burger-navlist-items">
              {list.lists.map((item, n) => {
                return (
                  <Link 
                    key={n}
                    href={`/${list.name.toLowerCase()}/${item.link}`}>
                    <a>{item.name}</a>
                  </Link>
                )
              })}
            </div>
          </div>

        </div>
      )
    })
  }


  return (
    <div className="burger-nav">
      <div className="burger-btn">
        <img 
          onClick={()=>toggleBtn()}
          src="/images/burger-btn.svg" alt=""/>
      </div>
      <div className="burger-menulist-wrapper">
        <div className="close-btn">
          <span onClick={()=>toggleBtn()}>
            <Svg svg='close'/>
          </span>
        </div>


         <div className="content-center burger-input">
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

          {navlists()}

      </div>
    </div>
  )
}

export default BurgerBtn
