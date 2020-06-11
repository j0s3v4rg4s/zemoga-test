export interface PersonModel {
  "name": string
  "img": string
  "timeJob": number,
  "job": string,
  "vote": {
    "likes": number,
    "dislike": number,
    "total": number
  }
}
