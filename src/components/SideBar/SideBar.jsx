import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import styles from './SideBar.module.scss';
import Filter from './Filter'
import Search from './Search'

const SideBar = (props) => {
  const {
    fetchBeers,
    setNameText,
    setHopsText,
    setMaltText,
    setFoodText,
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
  
  const [isOpen, setOpen] = useState(true);
  const openSideBar = () => {
    setOpen(!isOpen);
    console.log(sideBarStyles)
  }
  const sideBarStyles = isOpen ? styles.active : "";
  
  return (
    <section className={`${styles.sideBarSection} ${sideBarStyles}`}>
      <header className={styles.sectionHeader} onClick={() => openSideBar()}>
        <FontAwesomeIcon icon={faAngleDoubleDown} className={sideBarStyles}/>
        <h2>Search & Filter</h2>
        <FontAwesomeIcon icon={faAngleDoubleDown} className={sideBarStyles}/>
      </header>
      <Search
        fetchBeers={fetchBeers}
        setNameText={setNameText}
        setHopsText={setHopsText}
        setMaltText={setMaltText}
        setFoodText={setFoodText}
        />
        <Filter
        fetchBeers={fetchBeers}
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
    </section>
  );
}

export default SideBar;
