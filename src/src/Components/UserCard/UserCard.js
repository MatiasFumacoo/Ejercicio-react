import './UserCard.css';
import { useHistory } from 'react-router-dom';

function UserCard(props) {

    const {user} = props;
    const history = useHistory();

    const routeChange = (user) =>{ 
        let path = 'UserDetails'; 
        history.push(path, user);
    }

    return (
        
        user && <div className="feature">
            <img src={user?.picture.thumbnail} onClick={() => routeChange(user) }></img>
            <p>{user.name.title} {user.name.first} {user.name.last}</p>
            <p>Country: {user.location.country} </p>
            <p>City: {user.location.city} </p>
        </div>             
    );
}

export default UserCard;