import React from 'react';

const Arrow = props => {

  return (
    <button onClick={ props.click } className="arrow-container">
      { props.children }
    </button>
  );
}

export default Arrow;
