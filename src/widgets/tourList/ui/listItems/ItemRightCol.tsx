import React from 'react';
import { ResponseContractItem } from "../../types";
type PropsType = { item: ResponseContractItem }

const ItemRightCol = ({item}: PropsType) => {
    const { length, price, flexible_booking } = item;
    return (
        <div className="row">
            {length && <div className="col">
                <div>Tour length: {length}</div>
                <div>Price per day: {(price/length).toFixed(0)}</div>
            </div> }
            <div className="col">
                <div className="text-center">
                    From:  <b className="text-success fs-3">€ {price.toFixed(0)}</b>
                </div>
            </div>
            {flexible_booking && <div>✅ <b>Book with flexibility</b></div>}
            <button className="btn btn-lg btn-primary mt-3 mx-auto w-75">View tour</button>
        </div>
    )
};

export default ItemRightCol;
