import React from 'react';

function Reset() {
  
    function refreshPage() {
      window.location.reload(false);
    }
    
    return (
      <div>
        <button onClick={refreshPage}>Reset Reps</button>
      </div>
    );
  }
  
  export default Reset;