import Navbar from "../components/Navbar"
import { useContext } from "react"
import contextProvider from "../Provider"
function User() {
  const {single, repos} = useContext(contextProvider)
  return (
    <>
      <Navbar/>
      <section className="user-profile">
        <div className="user-profile-content">
          <img src={single.avatar_url} alt="#" />
          <div className="profil-info">
            <div className="profile-header">
              <h2>{single.name}</h2>
              <span className="user">{single.type}</span>
              <span className="hire">{single.hireable === null ? "Working" : "Working"}</span>
            </div>
            <p>{single.bio}</p>
            <div className="a">
                <a rel="noreferrer" target="_blank" href={single.html_url}>Visit Github Profile</a>
            </div>
            
            <div className="socials">
              <div className="social">
                <span className="span">Location</span>
                <h3>{single.location}</h3>
              </div>
              <div className="social">
                <span className="span">Website</span>
                <h3>{single.blog}</h3>
              </div>
              <div className="social">
                <span className="span">Twitter</span>
                <h3>{single.twitter_username}</h3>
              </div>
            </div>
          </div>
        </div>
        </section>
        <section className="stats">
          <div className="stats-content">
          <div className="stat">
            <div>
              <span className="span">Followers</span>
              <h2>{single.followers}</h2>
            </div>
            <i className="fa-solid fa-user-large"></i>
          </div>
          <div className="stat">
            <div>
              <span className="span">Following</span>
              <h2>{single.following}</h2>
            </div>
            <i className="fa-solid fa-user-large"></i>
          </div>
          <div className="stat">
            <div>
              <span className="span">Public Repos</span>
              <h2>{single.public_repos}</h2>
            </div>
            <i className="fa-solid fa-user-large"></i>
          </div>
          <div className="stat">
            <div>
              <span className="span">Public Gists</span>
              <h2>{single.public_gists}</h2>
            </div>
            <i className="fa-solid fa-user-large"></i>
          </div>
          </div>
        </section>
        <section className="latest-repos">
          <div className="latest-repos-content">
            <h1>Latest Repositories</h1>
            {
              repos.map(element =>{
                return (
                  <div key={element.id} className="repo">
                    <div className="repo-header">
                      <i className="fa-solid fa-link fa-xl"></i>
                      <a href={element.archive_url}><h2>{element.name}</h2></a>
                    </div>
                    <p>{element.description}</p>
                    <div className="infos">
                      <div className="span-group language">
                        <i className="fa-solid fa-star"></i>
                         <span >{element.language}</span>
                      </div>
                      <div className="span-group watchers">
                        <i className="fa-regular fa-eye"></i>
                          <span >{element.watchers}</span>
                      </div>
                      <div className="span-group forks">
                          <i className="fa-solid fa-code-fork"></i>
                          <span >{element.forks}</span>
                      </div>
                    </div>
                  </div>
                  
                )
              })
            }
          </div>
        </section> 
    </>
  )
}

export default User
