import React from 'react';
// import img from "./images/naruto.jpeg"
const SearchAnime = ({ AnimeList }) => {

    return (

        <article article >
            {AnimeList.image_url}
            <div className="maincontent">
                <div className='row'>
                    {
                        AnimeList.map(anime => (


                            <div className="anime-card col-sm-6 col-lg-3">
                                <a

                                    href={anime.url}
                                    target="_blank"
                                    rel="noreferrer">
                                    <figure>

                                        <img
                                            className='profile'
                                            src={anime.images.jpg.image_url}
                                            key={anime.mal_id}
                                            alt="Anime Image" />
                                    </figure>
                                    <h3>{anime.title}</h3>
                                </a>
                            </div>

                        ))

                    }
                </div></div>


        </article>

    );
}

export default SearchAnime;
