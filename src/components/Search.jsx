import React, { useEffect, useState } from 'react';
// import AnimeCard from './AnimeCard';
import SearchAnime from './SearchAnime';

const Search = (props) => {
    const [Searchs, setSearch] = useState('Jujutsu Kaisen');
    const [Animelist, setAnimelist] = useState([]);

    const animefun = async () => {
        // const url = `https://api.jikan.moe/v4/anime?q=${Searchs}&limit=20`;
        // const temp = await fetch(url)
        // const tempData = await temp.json()
        // console.log(tempData.data);
        // setAnimelist(tempData.data);
        alert("Search funtion is currently stopped by Admin")
    }

    // useEffect(() => {
    //     animefun();
    // }, [Searchs]);
    return (
        <>
            <div id='tools'>
                <div className="input-group">

                    <input type="text" className="form-control" placeholder='Search Anime...' value={props.search}
                        onChange={e => setSearch(e.target.value)} />
                    <button className='btn btn-outline' onClick={animefun} >Search</button>

                </div >

            </div >

            {/* <SearchAnime
                AnimeList={Animelist}
            /> */}
        </>
    );
}

export default Search;
