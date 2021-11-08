import React from 'react';
import { Tile } from "./Tile";
import { TileCounter } from './types';
import useCounter from './useCouner';
import './countdown.css';

const Countdown = () => {
    const timeLeftTiles: TileCounter[] = useCounter();

    return (
        <div className="countdown">
            <h2>New year starts in:</h2>
            <ul className="countdown-list">
            { timeLeftTiles.map((timerTileItem) =>
                <Tile key={timerTileItem.dimension} {...timerTileItem}/>
            )}
            </ul>
        </div>
    );
};

export default Countdown;


