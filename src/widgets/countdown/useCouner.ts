import {useEffect, useState} from 'react';
import {utils} from "../../shared/utils";

const getTargetDate = (): number  => {
    const year = new Date().getFullYear();
    return +new Date(`${year + 1}-1-1`);
}
const calculateTimeLeft = (targetDate: number) => {
    const difference =  targetDate - +new Date();
    const timeLeft = {
        days: { val: 0, dimension: 'day' },
        hours: { val: 0, dimension: 'hour' },
        minutes: { val: 0, dimension: 'min' },
        seconds: { val: 0, dimension: 'seconds' }
    };

    if (difference > 0) {
        timeLeft.days = {val: Math.floor(difference / (1000 * 60 * 60 * 24)), dimension: 'day'};
        timeLeft.hours= {val: Math.floor((difference / (1000 * 60 * 60)) % 24), dimension: 'hours'};
        timeLeft.minutes= {val: Math.floor((difference / 1000 / 60) % 60), dimension: 'minutes'};
        timeLeft.seconds= {val: Math.floor((difference / 1000) % 60), dimension: 'seconds'};
    }

    return timeLeft;
};

const targetDate = getTargetDate();

const useCounter = () => {
    const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));
    const timeLeftTiles = utils.helpers.recordToArray(timeLeft);

    const isStopCounter = (timeLeft.seconds.val === 0)
        && (timeLeft.minutes.val === 0)
        && (timeLeft.hours.val === 0)
        && (timeLeft.days.val === 0);

    useEffect(() => {
        if(isStopCounter) {
            return
        }
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);
    },[isStopCounter, timeLeft.seconds.val]);

    return timeLeftTiles
};

export default useCounter;
