import './App.css';
import FoodBox from './component/FoodBox.jsx';
import foods from './foods.json';
import { useState } from 'react';
import AddFoodForm from './component/AddFoodForm';
import SearchForm from './component/SearchForm';

function App() {
  const [foodStat, setFoodStat] = useState(foods);
  const [foodStatToDisplay, setfoodStatToDisplay] = useState(foods);

  const filterFoodLifting = (searchInput) => {
    const filteredFoodARR = foodStat.filter((eachOne) => {
      if (eachOne.name.includes(searchInput)) {
        return true;
      } else {
        return false;
      }
    });

    setfoodStatToDisplay(filteredFoodARR);
  };

  const deleteNeawArr = (event) => {
    const filteredArrAfterDelete = foodStatToDisplay.filter((eachRecipie) => {
      if (eachRecipie.name === event) {
        return false;
      } else {
        return true;
      }
    });

    setfoodStatToDisplay(filteredArrAfterDelete);
  };

  return (
    <div className="App">
      <h1>Food List</h1>

      <SearchForm filterFoodLifting={filterFoodLifting} />

      <br />
      <br />

      <AddFoodForm
        setFoodStat={setFoodStat}
        setfoodStatToDisplay={setfoodStatToDisplay}
      />

      <FoodBox foods={foodStatToDisplay} deleteNeawArr={deleteNeawArr} />
    </div>
  );
}

export default App;
