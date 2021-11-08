import React, {useState} from 'react';
import {ResponseContractItem} from "../../types";
type PropsType = {item: ResponseContractItem}

const TruncatedText = (array: string[], maxLength= 0) => {
    const initialDifference = array.length - maxLength;
    const [difference, setDifference] = useState(initialDifference);

    const onClick = () => {
        setDifference(0);
    }

    if(difference > 0) {
        return <span>
            {array.slice(0,-difference).join(', ')}
            <span onClick={onClick} className="link-primary"> +{difference} more</span>
        </span>
    }

    return <span>{array.join(', ')}</span>;
}

const ItemCenterCol = ({item}: PropsType) => {
    const getDataNormalized = () => ([
        { title: 'Destinations', val: TruncatedText(item.destinations, 5) },
        { title: 'Age Range', val: `${item.age_min} - ${item.age_max}` },
        { title: 'Regions', val: TruncatedText(item.regions, 1) },
        { title: 'Travel style', val: TruncatedText(item.travel_styles, 3) },
        { title: 'Operated in', val: item.operated_in },
    ]);

    return (
        <table className="table table-borderless">
            <tbody>
            {getDataNormalized().map((item, idx) => (
                <tr key={item.title + idx}>
                    <td>{item.title}:</td>
                    <td>{item.val}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}


export default ItemCenterCol;
