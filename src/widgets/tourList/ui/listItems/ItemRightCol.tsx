import React from 'react';
import {ResponseContractItem} from "../../types";
type PropsType = {item: ResponseContractItem}

const ItemRightCol = ({item}: PropsType) => {
    return (
        <div className="row">
            {item.length && <div className="col">
                <div>Tour length: {item.length}</div>
                <div>Price per day: {(item.price/item.length).toFixed(0)}</div>
            </div> }
            <div className="col">
                <div className="text-center">
                    From:  <b className="text-success fs-3">€ {item.price.toFixed(0)}</b>
                </div>
            </div>
            {item.flexible_booking && <div>✅ <b>Book with flexibility</b></div>}
            <button className="btn btn-primary w-100 mt-3">View tour</button>
        </div>
    )
};

export default ItemRightCol;
