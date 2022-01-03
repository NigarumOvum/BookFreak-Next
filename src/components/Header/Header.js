import React, {useState} from 'react'
import {useRouter} from 'next/router'
import ExploreMenu from './components/Explore-MyBooks'
import LogoInput from './components/LogoInput'
import BurgerBtn from './components/BurgerBtn'
import Mininavs from './components/MiniNavs'
import BookDay from './components/BookDay'
import {Helpers} from '../../utils/common/helpers'
import MidMenu from './components/MidMenu'

function Header(props) {
  const router = useRouter()
  const [value, setValue] = useState('')

  const search = (e) => {
    if (e === 'Enter' || e === 'click') {
      if (!/^\s*$/.test(value)) {
        router.replace('/search/title-and-author/[slug]',
        `/search/title-and-author/${Helpers.setTextToUrl(value)}`)
      }
    }
  }
  
  return (
    <header>
      <div className="content-center navbar">
        <LogoInput 
          value={value}
          change={(val)=> setValue(val)}
          keypress={(code)=> search(code)} />
        <BurgerBtn 
          value={value}
          change={(val)=> setValue(val)}
          keypress={(code)=> search(code)} />
        <ExploreMenu />
      </div>
      <Mininavs />
      {props.booksoftheday ? 
        <BookDay books={props.books}/> : null}
      <MidMenu />
    </header>
  )
}

export default Header
