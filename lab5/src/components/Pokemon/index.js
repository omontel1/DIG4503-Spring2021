import { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {

  return (
    <div>
      {
         (loading) ? (
           <p>Loading...</p>
          ) : (
           <div>
             <h2>{result.name}</h2>
             <img src={result.sprites.front_default} />
           </div>
          )
      }
    </div>
  );
}

export default App;