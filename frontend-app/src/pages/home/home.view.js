import React from 'react';
import styles from './home.module.css';
import useResponsive from '../../hooks/useResponsive';
import LoremIpsum from '../../components/loremIpsum/loremIpsum.view';

const Home = () => {
    // const { isDesktop } = useResponsive();
    // const contaierStyle = isDesktop ? styles.container : styles.container_min;
    return (
        <div>
            <h1>Hola</h1>
        </div>
    );
};

export default Home;
