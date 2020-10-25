import React from 'react';
import styles from './BeerTile.module.scss';
import brewdoglogo from '../../../assets/images/brewdoglogo.png'
const BeerTile = (props) => {
  const { beer } = props
  
  return (
      <article className={styles.beer}>
        <div className={styles.left}>
          <img src={beer.image_url ? beer.image_url : brewdoglogo}/>
        </div>
        <div className={styles.right}>
          <header className={styles.beerHeader}>
            <h3>{beer.name}</h3>
            <h4>ABV</h4>
            <h4>IBU</h4>
            <h4>EBC</h4>
            <p>{beer.tagline}</p>
            <span>{beer.abv}%</span>
            <span>{beer.ibu}</span>
            <span>{beer.ebc}</span>
          </header>
          <p className={styles.description}>{beer.description}</p>
          <div>
            <h4>First Brewed</h4>
            <p>{beer.first_brewed}</p>
          </div>
          {/* <p>Hops: {beer.ingredients.hops}</p> */}
          {/* <p>Malt: {beer.ingredients.malt}</p> */}
          <div>
            <h4>Food pairings</h4>
            {beer.food_pairing.map((item) => <p key={item}>{item}</p>)}
          </div>
        </div>
        
      </article>
  );
}

export default BeerTile;
