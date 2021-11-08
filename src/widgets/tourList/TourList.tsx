import React, {useEffect} from 'react';
import {useAsyncFn} from 'react-use';
import { ResponseContractItem } from './types';
import List from './ui/List';
import './tour-list.css';

const TourList = () => {
    const url = `https://jsonblob.com/api/jsonBlob/892812282795671552`;
    const [state, doFetch] = useAsyncFn(async () => {
        const response = await fetch(url);
        const result: ResponseContractItem[] = await response.json();
        return result
    }, [url]);

    useEffect(() => {
        doFetch();
    },[])

    return (
        <div className="tour-list">
            {state.loading
                ? <div>Loading...</div>
                : state.error
                    ? <div>Error: {state.error.message}</div>
                    : <>{state.value ? <List data={state.value} /> : null}</>
            }
        </div>
    );
};

export default TourList;
