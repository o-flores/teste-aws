import React, { useState } from 'react'
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // define the callAPI function that takes a first name and last name as parameters
  var callAPI = (firstName, lastName) => {
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({ "firstName": firstName, "lastName": lastName });
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    // make API call with parameters and use promises to get response
    fetch("https://yk6dfiu6k2.execute-api.sa-east-1.amazonaws.com/dev", requestOptions)
      .then(response => response.text())
      .then(result => alert(JSON.parse(result).body))
      .catch(error => console.log('error', error));
  }

  function handleClick() {
    callAPI(firstName, lastName);
  }
  return (
    <div className="App">
      <form>
        <label>First Name :</label>
        <input value={firstName} type="text" id="fName" onChange={({target}) => setFirstName(target.value) } />
          <label>Last Name :</label>
          <input value={lastName} type="text" id="lName" onChange={({target}) => setLastName(target.value) } />
          {/* <!-- set button onClick method to call function we defined passing input values as parameters --> */}
          <button type="button" onClick={handleClick}>Call API</button>
      </form>
    </div>
      );
}

      export default App;
