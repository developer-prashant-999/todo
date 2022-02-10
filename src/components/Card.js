import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'
function Card({title,detail}) {
  return <div className='card__container'>
     
     <div className="data">
      {/* <span className='title'>{title}</span> */}

      <Link to='' className='title'>{title}</Link>
      
      {/* <span>{detail}</span> */}
     </div>
      
  </div>;
}

export default Card;
