
// menu lists
import commonmenulists from './menulists/common.json'
import categorymenu from './menulists/categories.json'
import fictionmenulists from './menulists/fiction.json'
import nonfictionmenulists from './menulists/nonfiction.json'
import textbookmenulists from './menulists/textbook.json'

// featured books 
import dailylists from './featuredbooks/daily.json'
import categorylists from './featuredbooks/categorylists.json'
import fictionlists from './featuredbooks/fictionlists.json'
import nonfictionlists from './featuredbooks/nonfictionlists.json'
import textbooklists from './featuredbooks/textbooklists.json'

// books of the day
import dailybooks from './booksoftheday/daily.json'
import nonfictionbooks from './booksoftheday/non-fiction.json'
import fictionbooks from './booksoftheday/fiction.json'
import categorybooks from './booksoftheday/category.json'
import textbookbooks from './booksoftheday/textbooks.json'

// helper functions
import {Helpers} from '../common/helpers'

// function to return daily books
const dbks = (str) => {
  switch (str) {
    case 'daily': return dailybooks
    case 'non-fiction': return nonfictionbooks
    case 'fiction': return fictionbooks
    case 'category': return categorybooks
    case 'textbooks': return textbookbooks
  }
}

// function to return featured books
const ftbks = (str) => {
  switch (str) {
    case 'daily': return dailylists;
    case 'category': return categorylists;
    case 'fiction': return fictionlists;
    case 'non-fiction': return nonfictionlists;
    case 'textbooks': return textbooklists;
  }
}

// function to return featured links
const getlinks = (str) => {
  switch (str) {
    case 'ftrlinks': return commonmenulists.footerlinks;
    case 'ftrnavs': return commonmenulists.footernavs;
    case 'mininavs': return commonmenulists.mininavs;
    case 'midmenu': return commonmenulists.midmenu;
    case 'bkcatmenu': return commonmenulists.bookcatmenu;
    case 'fiction': return fictionmenulists;
    case 'non-fiction': return nonfictionmenulists;
    case 'category': return categorymenu;
    case 'textbooks': return textbookmenulists;
    case 'daily': return ""
  }
}

// function to sort the books by day
const sortbooks = (books) => {
  const day = Helpers.getDay()
  return books[day]
}

// function to get the daily books
// sorted according to day of the week
const _daily = (str) => {
  return sortbooks(dbks(str))
}

// function to get the daily featured books
// sorted according to day of the week
const _featured = (str) => {
  return sortbooks(ftbks(str))
}

// this function will return the links, daily books,
// featured books in one object
const data = (str) => {
  return {
    list: getlinks(str),
    daily: _daily(str),
    featured: _featured(str)
  } 
}

export const JSON = (function(){

  // function to get the list according
  // to the provided value
  const _getlinks = (str) => {
    return getlinks(str)
  }

  // function to get the list of menu, daily books
  // and featured books needed for the page
  const _getData = (str) =>{
    if(str === 'textbooks') {
      return {
        list: getlinks(str),
        daily: _daily(str),
        featured: _featured(str)
      } 
    } else {
      return data(str)
    }
  }

  // function to get all the featured
  // book of the day
  const _getAllBooks = () => {
    const a = _featured('daily')
    const b = _featured('fiction')
    const c = _featured('non-fiction')
    const d = _featured('category')
    const e = _featured('textbooks')
    return [...b, ...d, ...a, ...c, ...e ]
  }

  // function to get all the list of menus
  const _getAllLists = () => {

    const books = [
      {name: 'Fiction', lists: getlinks('fiction')}, 
      {name: 'Non-Fiction', lists: getlinks('non-fiction')}, 
      {name: 'Category', lists: getlinks('category')}, 
      {name: 'Textbooks', lists: getlinks('textbooks')}
    ]
    return {books}
  }

  return {
    links (str) {
      return _getlinks(str)
    },
    getData (str) {
      return _getData(str)
    },
    getAllBooks () {
      return _getAllBooks()
    }, 
    getAllLists () {
      return _getAllLists()
    }
  }
})()



