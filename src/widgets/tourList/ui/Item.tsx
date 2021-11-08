import React from 'react';
import {ResponseContractItem} from "./api/tourListApi";

const TourItemTable = ({item}: {item: ResponseContractItem}) => {
    const {destinations} = item;
    const getDataNormalized = () => ([
        { title: 'Destinations', val: destinations.toString() },
        { title: 'Age Range', val: `${item.age_min} - ${item.age_max}` },
        { title: 'Regions', val: item.regions },
        { title: 'Regions', val: item.regions },
        { title: 'Travel style', val: item.travel_styles.toString() },
        { title: 'Operated in', val: item.operated_in },
        { title: 'operator', val: '---' },
    ]);

    return (
        <table className="table table-light table-borderless">
            <tbody>
            {getDataNormalized().map((item) => (
                <tr key={item.title}>
                    <td>{item.title}:</td>
                    <td>{item.val}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}
const TourItem = ({item}: {item: ResponseContractItem}) => {
    return (
        <div className="d-flex">
            <div className="col-3">
                <img src={item.img_url} alt={item.title}/>
            </div>
            <div className="col-9">

                <div className="row">
                    <div className="col-7 fs-6">
                        <h3>{item.title}</h3>
                        <TourItemTable item={item} />
                    </div >
                    <div className="col-5">
                        <div>price:  {item.price}</div>
                        <div>travel len ----</div>
                        {item.flexible_booking && <div>book with flexability </div>}

                    </div >
                </div>
            </div >
        </div>
    );
};

export default TourItem;
