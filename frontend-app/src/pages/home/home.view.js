import React from 'react';
import styles from './home.module.css';
import PinCard from "../../components/pinCard/pinCard.view";
import ListPins from "../../components/listPins/listPins.view";

const Home = () => {
  return (
    <div className={styles.__home_container}>
      <ListPins />
    </div>
  );
};

export default Home;