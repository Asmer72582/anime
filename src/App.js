// import './components/Header';
import { useState, useEffect } from 'react';
import './App.css';
import Feed from './components/Feed';
import FooterTag from './components/FooterTag';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  const [animeList, SetAnimeList] = useState([]);
  // const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState("");

  // const url = `https://api.jikan.moe/v4/anime?q=naruto&sfw`;
  // const GetTopAnime = async () => {
  //   const temp = await fetch(url)
  //     .then(res => res.json());
  //   console.log(temp.data)
  //   SetTopAnime(temp.top);
  // }

  // const HandleSearch = e => {
  //   e.preventDefault();
  //   FetchAnime(search);
  // }

  // const FetchAnime = async (q) => {
  //   const url = `https://api.jikan.moe/v4/anime?q=${q}&sfw`;
  //   const temp = await fetch(url)
  //     .then(res => res.json());
  //   const data = await temp.json();
  //   console.log(temp.data);
  //   SetAnimeList(temp.results);
  // }

  // useEffect(() => {
  //   GetTopAnime();
  // }, []);

  return (
    <div className="App">
      <div className="head">
        <Header />
        <Search />
      </div>

      {/* <Feed img="DethNote" />
      <Feed img="JJk" />
      <Feed img="AOT" />
      <Feed img="One Pice" /> */}

      <Feed />
      <FooterTag />
    </div >
  );
}

export default App;
