import React from 'react';
import SearchResults from './components/SearchResults';
import './App.css';

//* move react component off of App to separate component
//* map to card with: name, country, searches

function App() {
  return (
    <div className="App">
      <SearchResults />
    </div>
  );
}

export default App;
