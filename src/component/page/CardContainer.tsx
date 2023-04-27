import { useContext } from "react";
import { Media } from "../lib/TsInterface";
import { ThemeP } from "../lib/context/Theme";
import {Link} from "react-router-dom";


export function DetailAnimeContainer({data}:{data:any}){
    let theme = useContext(ThemeP);
    let media: Media = data.Page.media[0];
    console.log(media);
    return(
        <div
            style={{ 
                backgroundColor: theme.backgroundColor,
                color : theme.color,
                border: theme.border,
                fontSize:"25px",
                transitionDuration:"0.5s",
             }}
        >
            <CardContent title={media.title.english.toString()}/>
            <CardImage src={media.coverImage.extraLarge} />  
            <CardContentDetails media={media}/>
        </div>
    );
}

export function CardContainer({data}:{data: any}){

    let theme = useContext(ThemeP);
    return(
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
                backgroundColor: theme.backgroundColor,
                rowGap: "1rem",
                columnGap: "1rem",
            }}
        >
            {
                data.Page.media.map((media: Media,index: Number)=>{
                    return (
                        <Link to={`/${media.id}`}>
                            <div
                                style={{ 
                                    color: theme.color,
                                    backgroundColor: theme.backgroundColor,
                                    border: theme.border,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems:"center",
                                }}
                            >
                                {/* <CardContent src={media.title.english} /> */}
                                <CardContent title={media.title.english.toString()}/>
                                <CardImage src={media.coverImage.extraLarge}/>
                            </div>
                        </Link>
                    );
                })
            }
        </div>
    );
}

export function CardImage({...Attr}){
    return <img {...Attr} alt="" />
}

export function CardContent({title}:{title:String}){
    return <p style={{ fontSize:"50px", fontWeight:"bold", }}>{title}</p>
}

export function CardContentDetails({media}:{media:Media}){
    return(
        <>
            <p>Popularity : {media.popularity.toString()}</p>
            <p>Genres : {media.genres.join(',')}</p>
        </>

    );
}