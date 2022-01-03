import React from 'react'

function Grid(props) {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 2C0 0.89543 0.895431 0 2 0H15C16.1046 0 17 0.895431 17 2V15C17 16.1046 16.1046 17 15 17H2C0.89543 17 0 16.1046 0 15V2ZM2.37988 2.04004H7.47989V7.14004H2.37988V2.04004ZM7.47989 9.34991H2.37988V14.4499H7.47989V9.34991ZM9.51855 2.04004H14.6186V7.14004H9.51855V2.04004ZM14.6186 9.34991H9.51855V14.4499H14.6186V9.34991Z" 
      fill={`#${props.color}`}/>
    </svg>

  )
}

export default Grid
