import { useState } from 'react';

function SearchForm(props) {
  const [searchInput, setsearchInput] = useState('');

  const handleSearch = (event) => {
    setsearchInput(event.target.value);
    props.filterFoodLifting(event.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor="searchName">Search by name</label>
        <input type="text" name="searchName" onChange={handleSearch} />
      </form>
    </div>
  );
}

export default SearchForm;
