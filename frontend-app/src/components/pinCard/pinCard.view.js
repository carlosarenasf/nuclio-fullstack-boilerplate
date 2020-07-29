import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './pinCard.module.css';
import PinCardActionsView from './pinCardActions/pinCardActions.view';

const PinCard = ({ description, imageUrl, name }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={styles.__container}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={styles.__image__container}>
                <img src={imageUrl} className={styles.__image} alt="pinImage" />
                {isHovered && <PinCardActionsView />}
            </div>
            <span className={styles.__pinName}>{name}</span>
            <span className={styles.__pinDescription}>{description}</span>
        </div>
    );
};

PinCard.propTypes = {
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default PinCard;
