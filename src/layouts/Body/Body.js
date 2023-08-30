import './Body.css';

import React from 'react';
import Trainings from '../../components/Trainings/Trainings';

const Body = () => {
    return (
        <div className="body-container">
            <div className="heading" role="heading" aria-level="1">
                Liste des <span className="highlight">entraînements :</span>
            </div>
            <div className="table-container">
            <Trainings />
            </div>
        </div>

    );
};

export default Body;