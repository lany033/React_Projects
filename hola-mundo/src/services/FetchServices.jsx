import { Button } from '@mui/material';
import React, {useState, useEffect} from 'react';
import { getAllUsers, getUserDetails, login } from './fetchService';
import { getAllPagedUsers } from './fetchService';


const FetchServices = () => {

    const [users, setUsers] = useState([]);
    const [totalUsers, setTotalUsers] = useState(12);
    const [pages, setPages] = useState(2);
    const [usersPerPage, setUsersPerPage] = useState(6);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        obtainUsers()
    }, []);

    const obtainUsers = () => {

        getAllUsers()
            .then((response) => {
                console.log('All users', response.data);
                setUsers(response.data)
                setPages(response.total_pages)
                setUsersPerPage(response.per_page)
                setTotalUsers(response.total)
            })
            .catch((error) => {
                alert(`Error while retreiving the users: ${error}`)
            })
            .finally(() => {
                console.log('Ended obteining users:');
                console.table(users)})
    }

    const obtainPagedUsers = (page) => {

        getAllPagedUsers(page)
            .then((response) => {
                console.log('All paged users', response.data);
                setUsers(response.data)
                setPages(response.total_pages)
                setUsersPerPage(response.per_page)
                setTotalUsers(response.total)
            })
            .catch((error) => {
                alert(`Error while retreiving the users: ${error}`)
            })
            .finally(() => {
                console.log('Ended obteining users:');
                console.table(users)})
    }

    const  obtainUserDetails = (id) => {

        getUserDetails(id)
            .then((response) => {
                console.log('All paged users', response.data);
                setSelectedUser(response.data)
                
            })
            .catch((error) => {
                alert(`Error while retreiving the users: ${error}`)
            })
            .finally(() => {
                console.log('Ended obteining users:');
                console.table(selectedUser)
                })
    }

    const authUser = () => {
        login('eve.holt@reqres.in','cityslicka')
            .then((response) => {
                console.log('TOKEN', response.token);
                sessionStorage.setItem('token', response.token)
            })
            .catch((error) => {
                alert(`Error while login user: ${error}`)
            })
            .finally(() => {
                console.log('Ended login');
                console.table(selectedUser)
            })
    }

    return (
        <div>
            <Button onClick={authUser}>Auth user</Button>
            <h2>Users:</h2>
            {users.map((user, index) => 
            (
                <p key={index} onClick={() => obtainUserDetails(user.id)}>{user.first_name}</p>
            ))}
            <p>Showing {usersPerPage} users of {totalUsers}</p>
            
            <Button onClick={() => obtainPagedUsers(1)}>1</Button>
            <Button onClick={() => obtainPagedUsers(2)}>2</Button>

            <div>
                <h3>User Details</h3>
                { selectedUser != null ? 
                (
                    <div>
                        <p>Name: {selectedUser.first_name}</p>
                        <p>Last Name: {selectedUser.last_name}</p>
                        <p>Email: {selectedUser.email}</p>
                        <img alt = 'Avatar' src={selectedUser.avatar} style={{height: '150px', width:'150px'}}/>
                    </div>
                )
                :(<p>Please click on a user to see its details</p>)
                }
                    
            </div>

        </div>
    );
}

export default FetchServices;
