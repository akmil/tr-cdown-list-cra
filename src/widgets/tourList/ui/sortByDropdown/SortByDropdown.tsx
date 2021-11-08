import React, { useState } from "react";
import { ResponseContractItem } from "../../types";
import { priceFilter, PriceFilterType } from "../utils";

const sortBy = [
    { label: "Total price: Lowest first", val: 'price:true' },
    { label:"Total price: Highest first", val: 'price:false' },
    { label:"Duration: Shortest first", val: 'length:true' },
    { label:"Duration: Longest first", val: 'length:false' }
]

const SortByDropdown = ({dataVal, setDataVal} :
    {dataVal: ResponseContractItem[], setDataVal: any}
) => {
    const [state, setState] = useState( sortBy[0].val);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const {value} = e.target
        setState(value);

        const filterType = value.split(":")[0];
        const isLowest = value.split(":")[1] === 'true';
        const newData = priceFilter({dataVal, filterType, isLowest} as PriceFilterType);

        setDataVal([...newData]);
    }

    return (
        <select className="form-select-lg tour-list--select"
            value={state}
            onChange={handleChange}
        >
            {sortBy.map((option) =>
                <option key={option.val} value={option.val}>{option.label}</option>
            )}
        </select>
    )
}

export default SortByDropdown;
