import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import contextProvider from '../Provider'
function ShowUsers({usersData}) {
    const {fetchUser,fetchRepos} = useContext(contextProvider)
  return (
    <section className="show-users">
        <div className="show-users-content">
            {
                usersData.map(element =>{
                    return(
                        <div key={element.login} className="box">
                            <img src={element.avatar_url} alt="#" />
                            <div className="link">
                                <h2>{element.login}</h2>
                                <Link  to={element.login} onClick={(e)=>{
                                    fetchUser(element.login);
                                    fetchRepos(element.login);
                                }}>Visit Profile</Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default ShowUsers