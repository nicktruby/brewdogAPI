import React from 'react';
import styles from './Filter.module.scss';

const Filter = (props) => {
  
  const {
    fetchBeers,
    abvMin,
    setAbvMin,
    abvMax,
    setAbvMax,
    ibuMin,
    setIbuMin,
    ibuMax,
    setIbuMax,
    ebcMin,
    setEbcMin,
    ebcMax,
    setEbcMax,
    isClassic,
    setIsClassic
  } = props

  return (
    <div className={styles.filterGrid}>
      <label>Min ABV : </label>
      <label className={styles.sliderValue}>{abvMin}%</label>
      <input
        type="range"
        id="abvMin"
        min="0"
        max={abvMax}
        step="0.1"
        value={abvMin}
        onInput={event => {
          setAbvMin(event.target.value);
          fetchBeers();
          }
        }>
      </input>
      
      <label>Max ABV :</label>
      <label className={styles.sliderValue}>{abvMax}%</label>
      <input
        type="range"
        id="abvMax"
        min={abvMin}
        max="10"
        step="0.1"
        value={abvMax}
        onInput={event => {
          setAbvMax(event.target.value);
          fetchBeers();
          }
        }>
      </input>

      <label>Min IBU :</label>
      <label className={styles.sliderValue}>{ibuMin}</label>
      <input
        type="range"
        id="ibuMin"
        min="0"
        max={ibuMax}
        step="1"
        value={ibuMin}
        onChange={event => {
          setIbuMin(event.target.value)
          fetchBeers();
          }
        }>
      </input>
      
      <label>Max IBU :</label>
      <label className={styles.sliderValue}>{ibuMax}</label>
      <input
        type="range"
        id="ibuMax"
        min={ibuMin}
        max="200"
        step="1"
        value={ibuMax}
        onChange={event => {
          setIbuMax(event.target.value)
          fetchBeers();
          }
        }>
      </input>
      
      <label>Min EBC :</label>
      <label className={styles.sliderValue}>{ebcMin}</label>
      <input
        type="range"
        id="ebcMin"
        min="0"
        max={ebcMax}
        step="1"
        value={ebcMin}
        onChange={event => {
          setEbcMin(event.target.value)
          fetchBeers();
          }
        }>
      </input>
      
      <label>Max EBC :</label>
      <label className={styles.sliderValue}>{ebcMax}</label>
      <input
        type="range"
        id="ebcMax"
        min={ebcMin}
        max="120"
        step="1"
        value={ebcMax}
        onChange={event => {
          setEbcMax(event.target.value)
          fetchBeers();
          }
        }>
      </input>
      
      <label>Classic :</label>
      <label>{`< 2011`}</label>
      <input
        type="checkbox"
        id="isClassic"
        onChange={() => {
          setIsClassic(!isClassic)
          fetchBeers();
          }
        }>
      </input>
      <div className={styles.key}>
        <p>ABV : Alcohol by volume</p>
        <p>IBU : International Bittterness Index</p>
        <p>EBC : European Brewary Convention</p>
      </div>
    </div>
    
  );
}

export default Filter;