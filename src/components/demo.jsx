
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Filter from './components/Filter';
import {useState, useEffect} from 'react';
import Card from './components/Card';


function App() {

  const [player, setPlayer] = useState([]);

  useEffect(() => {
    fetchData();

  }, [])


  const fetchData = async () => {
    await fetch(`https://www.breakingbadapi.com/api/characters`)
    .then((res) => res.json())
    .then((data) => setPlayer(data))
    .catch((err) => {
      console.log(err)
    })
  }


console.log(player)

  return (
    <div className="App">
       <Filter />
       <Card player={player} />

    </div>

   


 
  );
}

export default App;
