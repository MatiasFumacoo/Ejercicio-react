import { useEffect, useState } from 'react';
import './UserDetails.css';

function UserDetails(props) {

    const [user, setUser] = useState();

    useEffect(() => {
        setUser(props.location.state);
        console.log(user);
    }, [])
      
    return (
        <div className="card">
            <img className="imagen" src={user?.picture.large}></img>
            <h3>UserName: {user?.login.username}</h3>
            <h3>First Name: {user?.name.first}</h3>
            <h3>Last Name: {user?.name.last}</h3>
            <h3>Email: {user?.email}</h3>
        </div>
    );
}

export default UserDetails;