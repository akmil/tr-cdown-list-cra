export type ResponseContractItem = {
  "id": number,
  "title": string,
  "flexible_booking": boolean,
  "reviews": {
    "cnt": number,
    "avg": number,
    "sample": string
  },
  "map_url": string,
  "img_url": string,
  "destinations": string[],
  "length": number,
  "age_min": number,
  "age_max": number,
  "regions": string[],
  "travel_styles": string[],
  "operated_in": string[],
  "price": number
}

