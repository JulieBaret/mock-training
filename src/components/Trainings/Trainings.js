import React, { useCallback, useState } from 'react';
import Table from '../Table/Table';
import './Trainings.css';

// Initial set of data
const initialTrainings = [
    {
        title: 'Introduction Cybersécurité',
        category: 'Cybersécurité',
        status: 'Victoire'
    },
    {
        title: 'Protéger son WiFi personnel',
        category: 'À la maison',
        status: 'À commencer'
    },
    {
        title: 'Je reconnais des données personnelles',
        category: 'RGPD',
        status: 'À commencer'
    },
    {
        title: 'Reconnaître un mail de phishing',
        category: 'Cybersécurité',
        status: 'Défaite'
    },
    {
        title: 'Bien utiliser son smartphone',
        category: 'À la maison',
        status: 'À commencer'
    },
    {
        title: 'Choisir un mot de passe invincible',
        category: 'Cybersécurité',
        status: 'À commencer'
    },
    {
        title: 'Limiter mon empreinte numérique',
        category: 'À la maison',
        status: 'À commencer'
    },
    {
        title: 'Pourquoi le RGPD est important',
        category: 'RGPD',
        status: 'À commencer'
    },
    {
        title: 'Introduction RGPD',
        category: 'RGPD',
        status: 'Défaite'
    }
];


const Trainings = () => {
    const [trainings, setTrainings] = useState(initialTrainings);
    console.log(trainings[0].title); //Log : Protéger son WiFi personnel

    const changeStatus = useCallback((trainingTitle, newStatus) => {
        setTrainings(trainings.map(element => {
            if (element.title === trainingTitle) {
            return { ...element, status: newStatus };
            } else {
            return element;
            }
        }));
    }, [trainings]);

    return (
            <div className="table-content">
                <Table trainings={trainings} changeStatus={changeStatus}/>                
            </div>
    );
};

export default Trainings;