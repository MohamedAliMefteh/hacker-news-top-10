import React from 'react'
import NewsCard from './NewsCard'

const NewsList = ({data}) => {

  return (
    <div className='newslist'>
    {data.map((data)=>(<NewsCard key={data.objectID} data={data}/>))}
    </div>
  )
}

export default NewsList