function recordToArray<TypeOfSchema>(
    data: Record<string, TypeOfSchema>
): Array<TypeOfSchema> {
    return Object.keys(data).map((key: string) => data[key]);
}

function roundHalf(n: number) {
    return (Math.round(n*2)/2).toFixed(1);
};


export const utils = {
    helpers: {
        recordToArray,
        roundHalf
    }
}
