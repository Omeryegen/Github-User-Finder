import Homepage from './pages/Homepage'
import {  useState,} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import User from './pages/User';
function App() {
  const [usersData, setusersData] = useState([]);
 

  const fetchUsers = async (user) =>{
    const response = await fetch(`https://api.github.com/search/users?q=${user}`);
    const data = await response.json();
    const array = data.items.slice(0,-10);
    setusersData(array);
  };

 
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Homepage usersData = {usersData} fetchUsers={fetchUsers}/>}/>
        <Route path='/:user' element={<User/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
