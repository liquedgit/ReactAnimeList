export interface Media{
    id: Number,
    title: {
        english: String,
        __typename: String,
    },
    coverImage: {
        extraLarge:String,
        __typename:String
    }
    genres: String[],
    isAdult: String,
    averageScore: Number,
    popularity: Number,
    countryOfOrigin: String,
    status: String,
    season: Number
}