import React from 'react';

function Img(props) {
  return (
    <img alt={props.title} className="img-thumbnail" src={props.imgURL}/>
  );
}

export default Img;