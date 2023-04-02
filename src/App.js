import './App.css';
import { useState } from 'react';
import { supabase } from './supabaseClient';

function Library() {
  const [myBooks, setMyBooks] = useState([]);
  async function getBooks() {
    let {data: books} = await supabase
      .from('books')
      .select('*')

    setMyBooks(books);
  }


  getBooks();

  return (
    <table className="books-table">
      <tr className="label-row">
          <td className="label-entry">Title</td>
          <td className="label-entry">Author</td>
          <td className="label-entry">ISBN</td>
      </tr>

      {
        myBooks.map(b => (
          <tr className="entry-row">
            <td className="table-entry">{b.title}</td>
            <td className="table-entry">{b.author}</td>
            <td className="table-entry">{b.isbn}</td>
          </tr>
        ))
      }
    </table>
  )
}

const CharacterPages = 
[
  {class:'Paladin', classColor: '#F48CBA', perfAvg: '98.8', link: "https://classic.warcraftlogs.com/character/us/mankrik/unboostable"},
  {class:'Mage', classColor: '#3FC7EB', perfAvg: 87.2, link: "https://classic.warcraftlogs.com/character/us/mankrik/letme"}
];

const LSImg = "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt2e3eb915eb2176fa/605e5593384bd30cdde3c173/8YU96OL1X4F01472165793744.jpg?auto=webp&quality=75";

const TopGuilds = 
[
  {name: 'BEEF BAR', rank: '1', isAlliance: false, link: "https://classic.warcraftlogs.com/guild/id/519542/"},
  {name: 'Progress', rank: '2', isAlliance: true, link: "https://classic.warcraftlogs.com/guild/id/475769/"},
  {name: 'FORGET', rank: '3', isAlliance: false, link: "https://classic.warcraftlogs.com/guild/id/601332/"}
];


function UlduarImg() {
  return <img src={LSImg} 
  alt="Ulduar Artwork" style={{height: "30vh"}}>
  </img>;
}

function WarcraftLogs() {
  const listChars = CharacterPages.map(character =>
  <div>
    <a href={character.link} style={{color: character.classColor}}>{character.class}</a>
    <p>Performance Average: {character.perfAvg}</p>
  </div>
  );

  return <div>{listChars}</div>;
}

function WorldFirstGuilds()
{
  const listGuilds = TopGuilds.map(guild =>
    <div>
      <p>Rank {guild.rank}: <a href={guild.link} style={{color: guild.isAlliance ? "#004a93" : "#8C1616"}}>{guild.name}</a></p>
    </div>
    );
  
    return <div>
      <h3>Top Guilds</h3>
      {listGuilds}
      </div>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UlduarImg/>
        <WarcraftLogs/>
        <WorldFirstGuilds/>
        <h2>Some of my Favorite Books</h2>
        <Library />
      </header>
    </div>
  );
}

export default App;
