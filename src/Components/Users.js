import { useEffect, useState } from 'react';
import UserList from '../UserList/UserList';
import { ApiService } from '../../Services/ApiService';
import './Users.css';

const apiService = new ApiService();

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        
        apiService.getUsers().then(response => {
            setUsers(response.data.results);
        });
    }, [])

    return (
        <UserList users={users} />
    );
}

export default Users;