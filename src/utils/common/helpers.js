
import gsap from 'gsap'
import {JSON} from '../../utils/data/'

export const Helpers = (function (){

  // function to sort title string
  const _sliceText = (text, n) => {
    const length = text.length
    if(length > n) {
      return `${text.substr(0, n)}...`
    } else {
      return text
    }
  } 

  // function to sort authors lists
  const _sortAuthor = (lists, n) => {
    let counter = 0
    let authors = []

    for (let x = 0; x < lists.length; x++) {
      let l = lists[x].length
      if (counter < n) {
        if ((counter + l) < n) {
          if(lists.length <= 1) {
            authors.push({
              name: lists[x],
              str: lists[x]
            })
          } else {
            authors.push({
              name: lists[x],
              str: `${lists[x]}, `
            })
          }
          counter += l
        } else {
          authors.push({
            name: lists[x],
            str : `${lists[x].substr(0, (n-counter))}..`
          })
          counter += l
        }
      } 
    }
    return authors
  }

  // gets the day of the week
  // returns a numeric value
  const _getDay = () => {
    return _now().getDay()
  }

  // small animation function to 'slide animate'
  // books when arrow is clicked
  const _slideBooks = (a, b) => {
    b.style.display = 'none'
    b.style.opacity = 0
    a.style.display = 'block'
    // animate the slide
    gsap.to(a, {opacity: 1, duration: .35})
  }


  // function to check if the query value
  // exists in the listed array 
  // returns true or false
  const _checkIfExists = (str, lists) => {
    const val = lists.filter(list => {
      return list.link === str
    })

    if(Object.keys(val).length === 0){
      return false
    } else {
      return val
    }
  }

  // function to arrage the whole array into an
  // order of by 4 array in array
  const _arrangeArray = (array) => {
    let num = 0
    let arr = []
    let subarr = []
    // loop to the array and arrange them by 4s
    for (let x = 0; x < array.length; x++){
      if(num === 3) {
        subarr.push(array[x])
        arr.push(subarr)
        subarr = []
        num = 0
      } else {
        subarr.push(array[x])
        num += 1
      }
    }
    return arr
  }

  // this function will generate a text
  // separeted with a hyphen
  const _setTextToUrl = (str) => {
    const text = str.split(' ').join('-').toLowerCase()
    return text
  }

  const _selectedLink = (isbn, title) => {
    if(isbn) {
      return {
        href: '/books/search/selected/[slug]',
        as: `/books/search/selected/${Helpers.setTextToUrl(title)}-${isbn[0].identifier}`
      }
    } else {
      // if the book has no isbn, generate
      // links with title
      return {
        href: '/books/search/selected/[slug]',
        as: `/books/search/selected/${Helpers.setTextToUrl(title)}`
      }
    }
  }

  // this function is for capitalizing text whenever 
  const _capitalizeText = (str) => {
    const txt = str.split(' ')
    let newTxt = []
    for (let x = 0; x < txt.length; x++) {
      let a = txt[x].split('')
      a[0] = a[0].toUpperCase()
      newTxt.push(a.join(''))
    }
    return newTxt.join(' ')
  }

  return {
    sliceText(text, n) {
      return _sliceText(text, n)
    },
    sortAuthor(lists, n) {
      return _sortAuthor(lists, n)
    }, 
    getDay() {
      return _getDay()
    },
    slideBooks (a, b) {
      return _slideBooks(a, b)
    },
    checkIfExists(str, lists) {
      return _checkIfExists(str, lists)
    },
    arrangeArray (array) {
      return _arrangeArray(array)
    },
    setTextToUrl (str){
      return _setTextToUrl(str)
    },
    selectedLink(isbn, title){
      return _selectedLink(isbn, title)
    }, 
    capitalizeText (str) {
      return _capitalizeText(str)
    }
  }

})()


const _now = () => {
  return new Date()
}
