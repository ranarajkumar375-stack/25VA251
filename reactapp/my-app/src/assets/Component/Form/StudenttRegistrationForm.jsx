import React from 'react';

function StudentReg() {

  return (
    <div>
      <h1>Student Registration</h1>
      <form> 
        <input type= 'text' name='name' placeholder='Enter Name'/>
        <input type= 'email' name='email' placeholder='Enter E- mail'/>
        <input type= 'password' name='password' placeholder='Enter password'/>
        <button type= 'submit'>Registere here</button>

      </form>
     </div>
  );
}

export default App;