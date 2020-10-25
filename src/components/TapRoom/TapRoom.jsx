import React from 'react';
import styles from './TapRoom.module.scss';
import BeerTile from './BeerTile'

const TapRoom = (props) => {
  const getBeerJsx = (beer) => <BeerTile key={beer.id} beer={beer}/>
  
  return (
    props.beers ?

      <section>
        <h2>Your Tap Room</h2>
        {props.beers.map((beer) => getBeerJsx(beer))}
      </section>

    : null
  );
}

export default TapRoom;
