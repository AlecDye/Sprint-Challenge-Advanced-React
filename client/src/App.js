import React from 'react';
import SearchResults from './components/SearchResults';
import './App.css';
import Navbar from './components/Navbar';
import './styles.scss';

//* move react component off of App to separate component
//* map to card with: name, country, searches

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchResults />
    </div>
  );
}

export default App;
