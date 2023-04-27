import FetchAnime from "../lib/Fetching";

export default function Home(){
    return(
        <div>
            <h1>My Anime List</h1>
            <FetchAnime/>
        </div>
    );
}