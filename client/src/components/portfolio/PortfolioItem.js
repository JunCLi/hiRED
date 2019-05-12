import React from 'react'

const PortfolioItem = (props) => {
  
  const { id, user_id, title, description, type, custom_link, api_link, thumbnail } = props.data
  
  return (
  <div>
    <h3>I am a portfolio item and I have an id of: {id} </h3>
    <h4> 
      user_id: {user_id}
      <p></p>
      title: {title}
      <p></p>
      description: {description}
      <p></p>
      type: {type}
      <p></p>
      custom link: {custom_link}
      <p></p>
      api link: {api_link}
      <p></p>
      thumbnail: {thumbnail}
      <p></p>
    </h4>
  
  </div>
  )
}

export default PortfolioItem
