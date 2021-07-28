import UserCard from '../UserCard/UserCard';
import './UserList.css';

function UserList(props) {
  
    return (
        <div className="container">

            <div className="gallery">
                {
                    props.users.map(user => {
                        return (
                            <UserCard key={user.login.username} user={user} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default UserList;