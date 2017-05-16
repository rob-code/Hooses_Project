import React from 'react'

const House = (props) => {

  
  const handleClick = () => {
    props.clickHandler(props.index)
  }

  

  return (
    <div className="house" className="correct-pointer" onClick={handleClick.bind(this)} >
      <p>{props.address} {props.postcode} </p>
    </div>
    )
}

export default House