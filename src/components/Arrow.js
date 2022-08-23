import React from 'react';

const Arrow = props => {

  return (
    <button onClick={ props.click }>
      { props.icon }
    </button>
  );
}

export default Arrow;
