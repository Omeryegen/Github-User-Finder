import React from 'react'
import {useRef} from 'react'

function Input({fetchUsers}) {
    const userRef = useRef();

   
  return (
    <section className="input">
            <div className="input-content">          
                <input ref={userRef} type="text" name="text" id="text" />
                <button onClick={(e) => {
                    if(userRef.current.value.length !== 0){
                        fetchUsers(userRef.current.value);
                        userRef.current.value = "";
                    };
                    e.preventDefault();
                }} type='submit'><i className="fa-solid fa-magnifying-glass"></i></button>   
            </div>    
    </section>
  )
}

export default Input