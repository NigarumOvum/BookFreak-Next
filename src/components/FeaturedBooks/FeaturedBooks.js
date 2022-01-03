import React from 'react'
import FeatureTitle from './components/FeatureTitle'
import Books from './components/Books'

function FeaturedBooks(props) {
  const featurebooks = props.books.map((book, i) => {
    return (<Books books={book} key={i}/>)
  })

  return (
    <div className='featured-books'>
      <FeatureTitle />
      {featurebooks}
    </div>
  )
}

export default FeaturedBooks
