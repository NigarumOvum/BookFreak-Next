import React from 'react'
import Search from './svgs/Search'
import Explore from './svgs/Explore'
import Mybooks from './svgs/MyBooks'
import ArrowLeft from './svgs/ArrowLeft'
import ArrowRight from './svgs/ArrowRight'
import ChevRight from './svgs/ChevRight'
import Star from './svgs/Star'
import Grid from './svgs/Grid'
import Close from './svgs/Close'
import List from './svgs/List'

function index(props) {

  const svg = props.svg === 'search' ? <Search /> :
    props.svg === 'explore' ? <Explore /> :
    props.svg === 'chevright' ? <ChevRight /> :
    props.svg === 'star' ? <Star /> :
    props.svg === 'list' ? <List color={props.color}/> :
    props.svg === 'grid' ? <Grid color={props.color}/> :
    props.svg === 'arrowleft' ? <ArrowLeft /> :
    props.svg === 'close' ? <Close /> :
    props.svg === 'arrowright' ? <ArrowRight /> 
    : <Mybooks />
    
  return (
    <>
      {svg}
    </>
  )
}

export default index
