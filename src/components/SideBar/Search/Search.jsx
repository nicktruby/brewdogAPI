import React from 'react';
import styles from './Search.module.scss';

const Search = (props) => {
  return (
    <div>
      <input 
        id="searchName"
        className={styles.searchBox}
        placeholder="Search by Name"
        onChange={e => {
          props.setNameText(e.target.value);
          props.fetchBeers();}
        }>
      </input>
      
      <input 
        id="searchHops"
        className={styles.searchBox}
        placeholder="Search by Hops"
        onChange={e => {
          props.setHopsText(e.target.value);
          props.fetchBeers();}
        }>
      </input>
      
      <input 
        id="searchMalt"
        className={styles.searchBox}
        placeholder="Search by Malt"
        onChange={e => {
          props.setMaltText(e.target.value);
          props.fetchBeers();}
        }>
      </input>
      
      <input 
        id="searchFood"
        className={styles.searchBox}
        placeholder="Search for Food Pairing"
        onChange={e => {
          props.setFoodText(e.target.value);
          props.fetchBeers();}
        }>
      </input>
    </div>
  );
}

export default Search;