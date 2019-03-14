/**
 * Created by Grucha on 21/02/2019.
 */

import React from 'react';
import Mood from './Mood/Mood';

const moods = props => {
    return props.allMoods.map((mood, index) => {
        return (
            <Mood
                selected={mood.selected}
                clicked={() => props.clicked(index)}
                moodName={mood.moodName}
            />
        );
    });
};

export default moods;
