import React, { useMemo } from 'react';
import Button from '../Button/Button';
import Category from '../Category/Category';
import Status from '../Status/Status';
import './Table.css';

const sortOrder = ["À commencer", "Défaite", "Victoire"];

const Table = ({ trainings, changeStatus }) => {

    const handleClick = ({ title }) => {
        const result = sortOrder[Math.floor(Math.random() * 2) + 1];
        changeStatus(title, result);
    }

    const sortedTrainings = useMemo(() => {
        const compareTrainings = (a, b) => {
            if (sortOrder.indexOf(a.status) < sortOrder.indexOf(b.status)) {
                return -1;
            }
            if (sortOrder.indexOf(a.status) > sortOrder.indexOf(b.status)) {
                return 1;
            }
            return 0;
        }
        return trainings.sort(compareTrainings);
    }, [trainings]);

    return (
        <div className="table-block">
            <table>
                <thead>
                    <tr>
                        <th scope="col" className="head-title">
                            Titre
                        </th>
                        <th scope="col" className="head-category">
                            Catégorie
                        </th>
                        <th scope="col" className="head-status">
                            Statut
                        </th>
                        <th scope="col" className="head-button">
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedTrainings.map((element, index) => (
                            <tr className="table-instance" key={index}>
                                <td className="col-title">
                                    {element.title}
                                </td>
                                <Category category={element.category} />
                                <Status status={element.status} />
                                <Button element={element} handleClick={handleClick} />
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;