import {gql} from "@apollo/client"
export const GET_ALL_ANIME = gql`
query getAllAnime($page:Int, $perpage:Int){
  Page(page:$page, perPage:$perpage){
    media(type:ANIME, sort:POPULARITY_DESC){
      id
      coverImage{
        extraLarge
      }
      title {
        english
      }
    }
  }
}
`;

export const GET_DETAIL_ANIME = gql`query getDetailAnime($id:Int){
  Page(page:1, perPage:1){
    media(type:ANIME, id:$id){
      id
      title {
        english
      }
      coverImage{
        extraLarge
      }
      genres
      isAdult
      averageScore
      popularity
      countryOfOrigin
      status
      season
    }
  }
}`;