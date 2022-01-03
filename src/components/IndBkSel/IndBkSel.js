import React, {useState} from 'react'
import MenuBreadCrumb from './components/MenuBreadCrumb'
import SideNav from './components/SideNavs'
import BookHeader from './components/BookHeader'
import GridBook from '../Books/GridBook'
import ListBook from '../Books/ListBook'
import Pagination from '../../components/Pagination/Pagination'

export default function IndBkSel(props) {
  const [islist, setList] = useState('grid')
  

  return (
    <div className="ind-ft-books">
      <MenuBreadCrumb 
        cattitle={props.cattitle}
        menu={props.book}/>
      <div className="content-center ind-ft-books-wrapper">
        <SideNav 
          menus={props.menus}
          title={`${props.book}`}/>

        <div className='indvl-book-sel'>
          <BookHeader
            click={(val)=>setList(val)}
            style={islist}
            cattitle={props.cattitle.name}
            total={props.total}/>

          <div className="indvl-book-list-wrapper">
            {/* if the islist state is grid */}
            { islist === 'grid' ?
              <GridBook books={props.books}/> : 
              // else set to list
                <ListBook books={props.books}/> }
            <div className="indvl-pagination-wrapper">
              <Pagination 
                total={props.total}
                click={(val)=>props.click(val)}/>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}


