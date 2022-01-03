import React, {useState, createContext} from 'react'

export const BookAppData = createContext()

export function BookDataContext (props) {
  const [bookdata, setBook] = useState({})

  function setbookdata (val) {
    setBook({...val})
  }

  return (
    <BookAppData.Provider value={{
      bookdata,  
      setbookdata
    }}>
      {props.children}
    </BookAppData.Provider>
  )
}