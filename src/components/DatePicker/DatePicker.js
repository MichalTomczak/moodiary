/**
 * Created by Grucha on 22/02/2019.
 */

import React from 'react';
import styles from './DatePicker.module.css';

const datepicker = props => {

    return (
        <div className={styles.dateBlock}>
            <input
                type="date"
                id="dateInput"
                onChange={(event) => props.changed(event)}
                value={props.value}
            />
        </div>
    )
};


export default datepicker;
