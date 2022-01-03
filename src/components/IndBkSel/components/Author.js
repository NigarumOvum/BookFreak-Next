import React from 'react'
import Link from 'next/link'
import {Helpers} from '../../../utils/common/helpers'

function Authors(props) {

  const author = props.authors.map((list, i) => {
    let a = Helpers.setTextToUrl(list.name)

    return (
      <Link href='/books/search/author/[slug]'
        as={`/books/search/author/${a}`} key={i}>
        <a className='book-author font-b6'>{list.str} </a>
      </Link>
    )
  })

  return (
    <>{author}</>
  )
}

export default Authors
