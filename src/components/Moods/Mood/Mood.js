/**
 * Created by Grucha on 21/02/2019.
 */
import React from 'react';
import styles from './Mood.module.css';

const mood = props => {
    let classes;
    if (!props.selected) classes = styles.moodBlock;
    else classes = styles.selected + ' ' + styles.moodBlock;

    return (
        <div onClick={props.clicked} className={classes}>
            {props.moodName}
        </div>
    );
};

export default mood;
