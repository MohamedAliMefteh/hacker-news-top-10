import React from 'react'

const NewsCard = ({data}) => {

  return (
    <div className='newscard'>
    <a href={data.story_url}>{data.story_title}</a>
    <p>By:{data.author}</p>
    </div>

  )
}

export default NewsCard