import React from 'react';

function Refresh() {
  
    function refreshPage() {
      window.location.reload(false);
    }
    
    return (
      <div>
        <button onClick={refreshPage}>About</button>
        <button onClick={refreshPage}>Contact</button>
        <button onClick={refreshPage}>Advertise</button>
        <button onClick={refreshPage}>Privacy Policy</button>
        <button onClick={refreshPage}>Terms of Use</button>
      </div>
    );
  }
  
  export default Refresh;