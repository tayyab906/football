
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Filter from './components/Filter';
import {useState, useEffect} from 'react';
import Card from './components/Card';


function App() {

  const [player, setPlayer] = useState([]);

  useEffect(() => {
    response();

  }, []);


  // let url = 'https://api.refactor.ro/football/fixtures';
  //   const token = 'oB5i2lAnkoCo4dLd8pI1avSLsiee9unDteaSdrgnco';
    // let response = fetch(url, {
    //     method: 'GET',
    //     headers: { 'Authorization': `bearer ${token}` }
    // })
    //     .then(rawResp => rawResp.json())
    //     .then((response) => {
    //         let fixtureData = response.response;
    //         return fixtureData;

    //     })
    //     .catch((err) => {
    //         console.warn('fetch error: ', err);
    //     })
    // return response;


  // const fetchData = async () => {
  //   await fetch(`https://www.breakingbadapi.com/api/characters`)
  //   .then((res) => res.json())
  //   .then((data) => setPlayer(data))
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }




  let url = 'https://api.refactor.ro/football/fixtures';
  const token = 'oB5i2lAnkoCo4dLd8pI1avSLsiee9unDteaSdrgnco';

  let response = async () => 
  await fetch(url, {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` }
  })
      .then(rawResp => rawResp.json())
      .then((response) => {
          let fixtureData = response.response;
          return fixtureData;

      })
      .then((data) => setPlayer(data))
      .catch((err) => {
          console.warn('fetch error: ', err);
      })
  console.log(player);
  response();



  return (
    <div className="App">
       <Filter />
       <Card player={player} />

    </div>

   


 
  );
}

export default App;
