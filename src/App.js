import './App.css';

import dataArrObjects from './components/data/data';

import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  console.log(dataArrObjects);

  const newTravelArr = dataArrObjects.map((obj) => {
    return <Card key={obj.title} data={obj} />;
  });

  return (
    <div className="container">
      <Navbar />
      {newTravelArr}
    </div>
  );
}

export default App;
