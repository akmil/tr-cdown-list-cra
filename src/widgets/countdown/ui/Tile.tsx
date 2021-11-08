import React from 'react';
import {TileCounter} from "./types";

export const Tile = ({val, dimension}: TileCounter) => {
    return (
        <li className="countdown-item">
            <h3>{val}</h3>
            <p>{dimension}</p>
        </li>
    );
};

