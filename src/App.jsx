import React, { useState , useEffect } from 'react';
import styles from './App.module.scss';
import SideBar from './components/SideBar'
import TapRoom from './components/TapRoom'
import brewdoglogo from './assets/images/brewdoglogo.png'

const App = () => {
  
  // const fetchRandomBeer = () => {
  //   const fetchedBeers = [];
  //   fetch(`https://api.punkapi.com/v2/beers/random`)
  //   .then((response) => response.json())
  //   .then((response) => response.map((beer) => {
  //     fetchedBeers.push(beer);
  //     setBeers(fetchedBeers);
  //   }));
  // }
  
  const [beers, setBeers] = useState([])
  
    const [nameText, setNameText] = useState();
    const [hopsText, setHopsText] = useState();
    const [maltText, setMaltText] = useState();
    const [foodText, setFoodText] = useState();
    const [abvMin, setAbvMin] = useState(0);
    const [abvMax, setAbvMax] = useState(10);
    const [ibuMin, setIbuMin] = useState(0);
    const [ibuMax, setIbuMax] = useState(200);
    const [ebcMin, setEbcMin] = useState(0);
    const [ebcMax, setEbcMax] = useState(120);
    const [isClassic, setIsClassic] = useState(false);

  const fetchBeers = () => {
    const nameStr = nameText ? `&beer_name=${nameText}` : "";
    const hopsStr = hopsText ? `&hops=${hopsText}` : "";
    const maltStr = maltText ? `&malt=${maltText}` : "";
    const foodStr = foodText ? `&food=${foodText}` : "";
    const abvMinStr = `&abv_gt=${abvMin}`;
    const abvMaxStr = `&abv_lt=${abvMax}`;
    const ibuMinStr = `&ibu_gt=${ibuMin}`;
    const ibuMaxStr = `&ibu_lt=${ibuMax}`;
    const ebcMinStr = `&ebc_gt=${ebcMin}`;
    const ebcMaxStr = `&ebc_lt=${ebcMax}`;
    
    const isClassicStr = isClassic ? `&brewed_before=01-2011` : "";
    

    const url = `https://api.punkapi.com/v2/beers?per_page=80${nameStr}${hopsStr}${maltStr}${foodStr}${abvMinStr}${abvMaxStr}${ibuMinStr}${ibuMaxStr}${ebcMinStr}${ebcMaxStr}${isClassicStr}`
    fetch(url)
    .then((response) => response.json())
    .then(data => setBeers(data));
  }

  useEffect(() => {
    fetchBeers();
  }, []);

  return (
    <>
      <header className={styles.pageHeader}>
        <img src={brewdoglogo}/>
        <div>
          <h1>DIY Dog</h1>
          <h2>The Brewdog Back Catalogue</h2>
        </div>
      </header>
      
      <main className={styles.App}>
        <SideBar 
          fetchBeers={fetchBeers}
          setNameText={setNameText}
          setHopsText={setHopsText}
          setMaltText={setMaltText}
          setFoodText={setFoodText}
          abvMin={abvMin}
          setAbvMin={setAbvMin}
          abvMax={abvMax}
          setAbvMax={setAbvMax}
          ibuMin={ibuMin}
          setIbuMin={setIbuMin}
          ibuMax={ibuMax}
          setIbuMax={setIbuMax}
          ebcMin={ebcMin}
          setEbcMin={setEbcMin}
          ebcMax={ebcMax}
          setEbcMax={setEbcMax}
          isClassic={isClassic}
          setIsClassic={setIsClassic}
    
          />
        <TapRoom  beers={beers}/>
      </main>
    </>
  );
}

export default App;
