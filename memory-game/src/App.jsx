import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import Header from './components/Header'

function App() {
  const [data, setData] = useState([]);
  const [clicked, setClicked] = useState([]);

  useEffect(() => {
    (async function getData() {
      const pokeDeck = [];
      for (let i = 1; i <= 10; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        const pokemon = await response.json();
        pokeDeck.push({ name: pokemon.name, image: pokemon.sprites.front_shiny });
      }
      setData(pokeDeck);
    })();
  }, []);

  console.log(data);

  return (
    <>
      <div>
        <header>
          <Header left={<h1>Memory Card Game</h1>} right={<></>} />
        </header>

        <main className='main-container'>
          {data.map((pokemon, index) => (
            <Card key={index} image={pokemon.image} text={pokemon.name}></Card>
          ))}

        </main>


      </div>



    </>
  )
}

export default App
