import {useQuery} from "@apollo/client"
import { GET_ALL_ANIME, GET_DETAIL_ANIME } from "./queries/GetAllAnime";
import { CardContainer, DetailAnimeContainer } from "../page/CardContainer";



export default function FetchAnime(){
    const { loading, error, data } = useQuery(GET_ALL_ANIME, {
        variables:{
            page:1,
            perpage:25
        }
    });

    if(loading) return <p>Loading ...</p>
    if(error) return <p>Error : {error.message}</p>

    console.log(data);

    return (
        <CardContainer data={data}/>
    );
}

export function DetailAnime({animeID}:{animeID: number}){
    const{loading,error,data} = useQuery(GET_DETAIL_ANIME, {
        variables:{
            id: animeID
        }
    });

    if(loading)return <p>Loading...</p>
    if(error)return <p>Error : {error.message}</p>
    console.log(data);
    return (
        <>
            <DetailAnimeContainer data={data}/>
        </>
    );
}
