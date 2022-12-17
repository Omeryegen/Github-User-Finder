import Navbar from '../components/Navbar.jsx';
import Input from '../components/Input.jsx';
import ShowUsers from '../components/ShowUsers.jsx';

function User({usersData, fetchUsers, fetchUser}) {
  return (
    <>
      <Navbar/>
      <Input fetchUsers={fetchUsers}/>
      <ShowUsers usersData = {usersData} fetchUser={fetchUser}/>
    </>
  )
}

export default User