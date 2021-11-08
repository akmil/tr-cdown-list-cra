import React from 'react';
import { ResponseContractItem } from "../types";
import ItemCenterCol from './listItems/ItemCenterCol';
import ItemRightCol from './listItems/ItemRightCol';
import { LazyImage } from './LazyImage';
type PropsType = {item: ResponseContractItem}

const Item = ({item}: PropsType) => {
    return (
        <div className="border flex-md-row g-0 h-md-250 mb-4 overflow-hidden position-relative rounded row shadow">
            <div className="col-md-3">
                <LazyImage
                    src={item.img_url}
                    alt={item.title}
                />
                <LazyImage
                    src={item.map_url}
                    alt={'map_' + item.title}
                />
            </div>
            <div className="col-md-9">
                <div className="row p-4">
                    <div className="col-md-7 fs-6">
                        <h3 className="item-title">{item.title}</h3>
                        <ItemCenterCol item={item} />
                    </div >
                    <div className="col-md-5">
                        <ItemRightCol item={item}/>
                    </div >
                </div>
            </div >
        </div>
    );
};

export default Item;
