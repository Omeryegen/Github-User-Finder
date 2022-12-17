import { createContext } from "react";
import { useState } from "react";
const contextProvider = createContext();
    

export const Provider = ({children}) =>{
    const [single, setSingle] = useState([]);
    const [repos, setRepos] = useState([]);

    const fetchUser = async (user) =>{
        const response = await fetch(`https://api.github.com/users/${user}`);
        const data = await response.json();
        setSingle(data) 
    };
    const fetchRepos = async (user) =>{
      const response = await fetch(`https://api.github.com/users/${user}/repos`);
      const data = await response.json();
      const newData= data.slice(0,10);
      setRepos(newData) ;
      console.log(newData)
    };

  return (
    <contextProvider.Provider value={{fetchUser, single, fetchRepos, repos}}>
         {children}
    </contextProvider.Provider>
   
  )
}



export default contextProvider;