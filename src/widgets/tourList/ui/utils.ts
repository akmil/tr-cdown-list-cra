import { ResponseContractItem } from "./types";

export type PriceFilterType = {
    dataVal: ResponseContractItem[],
    filterType: 'price' | 'length',
    isLowest: boolean
}
export const priceFilter = ({dataVal, filterType, isLowest = true}: PriceFilterType) => {
    return dataVal.sort((a, b) => {
        const aPrice = a[filterType];
        const bPrice = b[filterType];
        return isLowest ? aPrice - bPrice : bPrice - aPrice;
    });
}
