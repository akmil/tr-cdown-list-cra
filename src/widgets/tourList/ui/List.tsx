import React, {useEffect, useState} from 'react';
import { ResponseContractItem } from "../types";
import {priceFilter, PriceFilterType} from './utils';
import Item from './Item';
import SortByDropdown from './sortByDropdown/SortByDropdown';

const List = ({data}: {data: ResponseContractItem[]}) => {
    const sortedByLowestPrice = priceFilter({
        dataVal: data,
        filterType: 'price',
        isLowest: true
    } as PriceFilterType);
    const [dataVal, setDataVal] = useState(sortedByLowestPrice);

    return (
        <>
            <SortByDropdown dataVal={dataVal} setDataVal={setDataVal}/>
            <div className="list">
                {dataVal.map((item) => (
                    <Item key={item.id + item.title} item={item}/>
                ))}
            </div>
        </>
    );
};

export default List;
