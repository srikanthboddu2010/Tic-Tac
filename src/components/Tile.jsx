import React from 'react';

const Tile = ({className,value,onClick,palyerTurn}) => {
   let hoverClass= null;
    if (value == null && palyerTurn != null) {
        hoverClass = `${palyerTurn.toLowerCase()}-hover`;
    }
  return (
    <div onClick={onClick} className={`tile ${className} ${hoverClass}`}>
      {value}
    </div>
  );
}

export default Tile;
