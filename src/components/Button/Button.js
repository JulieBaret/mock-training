import React from 'react';
import './Button.css';

const Button = ({ element, handleClick }) => {

    return (
        <td className="col-button">
            {element.status !== "Victoire" ? (
                <button onClick={() => { handleClick(element) }}>Go!</button>
            ) : null}
        </td>
    );
};

export default Button;