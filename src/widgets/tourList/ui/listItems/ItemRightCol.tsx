import React from 'react';
import {ResponseContractItem} from "../api/tourListApi";
type PropsType = {item: ResponseContractItem}

const ItemRightCol = ({item}: PropsType) => {
    return (
        <>
            <div className="text-center">
                From:  <b className="text-success fs-3">€ {item.price.toFixed(0)}</b>
            </div>
            {item.flexible_booking && <div>✅ <b>Book with flexibility</b></div>}
            <button className="btn btn-primary w-100 mt-3">View tour</button>
        </>
    )
};

export default ItemRightCol;
