import React from 'react';
import {ResponseContractItem} from "./api/tourListApi";
import TourItem from './TourItem';

const List = ({data}:{data: ResponseContractItem[]}) => {
    return (
        <div className="list">
            {data.map((item) => (
                <TourItem key={item.id + item.title} item={item}/>
            ))}
        </div>
    );
};

export default List;
