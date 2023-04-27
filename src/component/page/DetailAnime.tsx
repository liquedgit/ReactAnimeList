import {useParams} from "react-router-dom";
import { DetailAnime } from "../lib/Fetching";

export default function Detail(){
    let {animeID} = useParams();
    let id = Number(animeID);
    // console.log(animeID);
    return (
        <>
            <DetailAnime animeID={id}/>
            <h1>{animeID}</h1>
        </>
    );
}