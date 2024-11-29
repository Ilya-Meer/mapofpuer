import React from 'react';
import styles from './Legend.module.css';
import { LOCATION_TYPE } from '../../constants';

const classByType = {
  [LOCATION_TYPE.VILLAGE]: styles.village,
  [LOCATION_TYPE.TOWN]: styles.town,
  [LOCATION_TYPE.CITY]: styles.city,
  [LOCATION_TYPE.MOUNTAIN]: styles.mountain,
  [LOCATION_TYPE.POI]: styles.poi,
}

const Legend: React.FC = () => {
  return (
    <div className={styles.legend}>
      {Object.entries(classByType).map(([locationType, className]) => (
        <div key={locationType} className={styles.legendItem}>
          <div className={`${styles.legendColour} ${className}`}></div>
          <span className={styles.legendLabel}>{locationType}</span>
        </div>
      ))}
    </div>
  );
};

export default Legend;
