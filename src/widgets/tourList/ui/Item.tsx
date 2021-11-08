import React from 'react';
import { ResponseContractItem } from "../types";
import ItemCenterCol from './listItems/ItemCenterCol';
import ItemRightCol from './listItems/ItemRightCol';
import { LazyImage } from './LazyImage';
import Reviews from './listItems/Reviews';
type PropsType = {item: ResponseContractItem}

const Item = ({item}: PropsType) => {
    const { img_url, title, map_url, reviews } = item;

    return (
        <div className="border flex-md-row g-0 h-md-250 mb-4 overflow-hidden position-relative rounded row shadow">
            <div className="col-md-3">
                <LazyImage
                    src={img_url}
                    alt={title}
                />
                <LazyImage
                    src={map_url}
                    alt={'map_' + title}
                />
            </div>
            <div className="col-md-9">
                <div className="row p-4">
                    <div className="col-md-7 fs-6">
                        <h3 className="item-title">{title}</h3>
                        <Reviews reviews={reviews} />
                        <br/>
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
