import React from "react";
import {utils} from "../../../../shared/utils";

const Star = (average: number, index: number) => {
    const idx = index + 1
    const avg = Number(utils.helpers.roundHalf(average))

    if(idx < avg) {
        return <div className="star gold">&#x2605;</div>
    }

    if(idx >= (avg) && (idx - avg) === 0.5) {
        console.log('gold-gray');
        return <div className="star gold-gray">&#x2605; </div>
    } else {
        console.log('**gray', idx - avg, idx, avg);
        return <div className="star gray">&#x2605;</div>
    }
}

type ReviewsProps = {
    reviews: {
        avg: number;
        cnt: number;
        sample: string;
    }
};

const Reviews = ({reviews}: ReviewsProps) => {
    const {avg, cnt, sample} = reviews;

    return <div className="star-rating">
        {[...Array(5)].map((star, index) =>
            <>{Star(avg, index)}</>
        )}
        <span className="fs-6 text-muted ms-2">{cnt} reviews</span>
    </div>
}

export default Reviews;
