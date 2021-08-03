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
        user && <div className="card-box">
            <div className={'card feature border-' + user.gender}>    
                <div className="face">
                    <div className="information-text">
                        <p>{user.name.title} {user.name.first} {user.name.last}</p>
                    </div>
                    <p>Hover the mouse to flip for more information.</p>
                </div>
                <div className="face back">
                    <img className="user-image" src={user?.picture.thumbnail} onClick={() => routeChange(user) }></img>
                    <h5>Click the image for details.</h5>
                    <div className="information-text">
                        <p>Country: {user.location.country} </p>
                        <p>City: {user.location.city} </p>
                        <p>Street: {user.location.street.name} {user.location.street.number}</p>
                    </div>
                </div>    
            </div>
        </div>
    );
}

export default UserCard;
