import React from 'react';
import AnimeCard from './AnimeCard';
import { useState, useEffect } from 'react';
const Feed = () => {
    const [topAnime, SetTopAnime] = useState([]);
    const [Animelist, setAnimelist] = useState([]);

    const GetTopAnime = async () => {
        const url = `https://api.jikan.moe/v4/anime?q=&limit=100`;
        const temp = await fetch(url)
            .then(res => res.json());
        console.log(temp.data);
        SetTopAnime(temp.data);
    }

    // const searchanime = async (q) => {
    //     const url = `https://api.jikan.moe/v4/anime?q=${q}& sfw`;
    //     const temp = await fetch(url)
    //         .then(res => res.json());
    //     console.log(temp.data);
    //     setAnimelist(temp.data);
    // }

    useEffect(() => {
        GetTopAnime();
    }, []);
    return (

        <div id='feed' className="container">
            <div className="input-group wy-2 ">
                {/* <form action="" className="search-box"
                    onSubmit={props.HandleSearch}>
                    <input type="text" className="form-control" value={props.search}
                        onChange={e => props.SetSearch(e.target.value)} />
                    <button className='btn btn-outline' >Search</button>
                </form> */}
            </div >
            <center>

                <AnimeCard
                    topAnime={topAnime}
                />
                {/* <AnimeCard
                    Animelist={Animelist}
                /> */}




            </center>
            {/* {props.animeList.map(anime => (
                <div class="row">
                    <a
                        href={anime.url}
                        target="_blank"
                        rel="noreferrer">
                        <figure>
                            <image
                                src={anime.image_url}
                                alt="Anime Image" />
                        </figure>
                        <h3>{anime.title}</h3>
                    </a>

                </div>
            ))
            } */}
        </div >
    );
}

export default Feed;
