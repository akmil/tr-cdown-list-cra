function recordToArray<TypeOfSchema>(
    data: Record<string, TypeOfSchema>
): Array<TypeOfSchema> {
    return Object.keys(data).map((key: string) => data[key]);
}




export const utils = {
    helpers: {
        recordToArray
    }
}
