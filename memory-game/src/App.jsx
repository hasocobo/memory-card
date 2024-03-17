import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import ScoreBoard from './components/ScoreBoard'
import _ from 'lodash'

function App() {
  const [data, setData] = useState([]);
  const [score, setScore] = useState({ score: 0, highestScore: 0 });
  const [clicked, setClicked] = useState([]);

  useEffect(() => {
    (async function getData() {
        const requests = Array.from({ length: 10 }, (_, i) => fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}/`));
        const responses = await Promise.all(requests);
        const pokemons = await Promise.all(responses.map(response => response.json()));
        
        const pokeDeck = pokemons.map(pokemon => ({ name: pokemon.name, image: pokemon.sprites.front_shiny }))
      setData(pokeDeck);
    })();
  }, []);

  const handleClick = (pokemonName) => {

    if (!clicked.includes(pokemonName)) {
      setClicked([...clicked, pokemonName]);
      setScore(prevScore => ({
        score: prevScore.score + 1,
        highestScore: Math.max(prevScore.score + 1, prevScore.highestScore )
      }));
      shuffle();
    }
    else if (clicked.includes(pokemonName)){
      setScore({score: 0, highestScore: score.highestScore});
      setClicked([]);
      shuffle();
    }
  }

  const shuffle = () => {
    const shuffledData = _.shuffle(data);
    setData(shuffledData);
  }

  return (
    <>
      <div>
        <header>
          <Header left={<h1>Memory Card Game</h1>} right={<ScoreBoard score={score.score} highestScore={score.highestScore} />} />
        </header>

        <main className='main-container'>
          {data.map((pokemon, index) => (
            <Card key={index} image={pokemon.image} text={pokemon.name} onClick={() => handleClick(pokemon.name)}></Card>
          ))}

        </main>
      </div>
    </>
  )
}

export default App
