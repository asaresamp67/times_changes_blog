import React from 'react'
import './card.css'
const Card = (props) => {
  return <div className={props.card}>{props.children}</div>
}

Card.defaultProps = {
  card: 'cardDefault',
}
export default Card
