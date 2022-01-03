
const getparams = (obj) => {
  switch(obj.url) {
    case 'query': return `q="${obj.name.toLowerCase()}"`
    case 'cat': return `q=subject:"${obj.name.toLowerCase()}"`
    case 'author': return `q=inauthor:"${obj.name.toLowerCase()}"`
    case 'isbn': return `q=${obj.str}+isbn:${obj.isbn}`
  }
}


export const APIRequest = (function(){
  // function to get the books according to 
  // category (fiction, non-fic, category, textbooks)
  const _getBooks = async (obj, page) => {
    // get the parameters according to query or category
    const params = getparams(obj[0])
    // fetch data from the function
    const data = await fetchData(params, page, 24)
    // sort and return
    return {
      name: obj[0],
      total: data.totalItems,
      books: data.items
    }
  }

  // function to add more books from the 
  // pagination when the buttons are clicked
  const _addBooks = async (obj, page) => {
    // get the parameters according to query or category
    const params = getparams(obj)
    // fetch data from the function
    const data = await fetchData(params, page, 24)
    // sort and return
    return {
      total: data.totalItems,
      books: data.items
    }
  }

  // this function will fetch for
  // recommended book from the selected books
  const _getRecommended = async (obj) => {
    // check for the parameters
    const params = getparams(obj)
    // fetch data
    const data = await fetchData(params, 1, 20)
    // return data
    return data.items
  }

  // function to get books by authors name
  const _getAuthor = async (obj, page) => {
    const params = getparams(obj)
    const data = await fetchData(params, page, 25)
    // if results are found return all the items
    if(data.items) {
      return {
        books: data.items,
        total: data.totalItems
      }
    } else {
      // return false if no data found
      return false
    }
  }

  // this function will query book data from the api 
  // by isbn number. only returns the first found book
  const _getISBN = async (query) => {
    let str = query.split('-')
    const isbn = str.pop()
    // filter params for the query
    const bkparams = getparams({
      url: 'isbn',
      isbn: isbn,
      str: str.join(' ')
    })
    
    const data = await fetchData(bkparams)

    // return onlhe first book
    if(data.items) {
      const recparams = getparams({
        url: 'query',
        name: str.join(' ')
      })
      const rec = await fetchData(recparams, 1, 15)
      
      return {
        book : data.items[0],
        recom: rec.items ? rec.items : false
      }
    } else {
      return false
    }
  }

  const _getBookById = async (id) => {
    const data = await fetchData(id, 'volumes')
    if(Object.keys(data).length != 0){
      const recparams = getparams({
        url: 'query',
        name: data.volumeInfo.title
      })
      const rec = await fetchData(recparams, 1, 15)
      return {
        book: data,
        recom: rec.items ? rec.items : false
      }
    } else {
      return false
    }
  }

  const _getAnyBook = async (str) => {
    const params = `q="${str}"`
    const data = await fetchData(params, 1, 25)
    if(data.items) {
      return({
        books: data.items,
        total: data.totalItems
      })
    } else {
      return false
    }
  }

  return {
    getBooks(obj, page){
      return _getBooks(obj, page)
    }, 
    addBooks(obj, page) {
      return _addBooks(obj, page)
    },
    getRecommended(obj) {  
      return _getRecommended(obj)
    },
    getAuthor(obj, page){
      return _getAuthor(obj, page)
    },
    getISBN(query) {
      return _getISBN(query)
    },
    getBookById(id) {
      return _getBookById(id)
    },
    getAnyBook(str) {
      return _getAnyBook(str)
    }
  }
})()


const fetchData = async (params, page, limit) => {
  // api key needed for the external api
  // const API_Key = `&key=AIzaSyCX1kIt4dHXByRj7Zw3PlElWq2SZJvrg4A`
  // const API_Key = `&key=AIzaSyDJKC1rdk4cCMfEzR0PIao0ftFas__0zo4`
  const API_Key = `key=AIzaSyDJSQrDm_X_c-xiU49fKPrnY3Kn5bjqDBM`
  
  // google books api url
  const googleapi = 'https://www.googleapis.com/books/v1/volumes'
  // additional parameters
  const addparams = `&maxResults=${limit}&orderBy=newest&prettyPrint=true`

  // combine the url 
  let url;

  if(!isNaN(page)) {
    url = `${googleapi}?${params}${addparams}&startIndex=${page}&${API_Key}`
  } else if (page === 'volumes'){
    url = `${googleapi}/${params}?${API_Key}`
  } else {
    url = `${googleapi}?${params}&${API_Key}`
  }
  

  // fetch data using the GET method
  const result = await fetch(url, {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  })
  
  // return data in JSON Format
  const data = await result.json()
  return data
}
