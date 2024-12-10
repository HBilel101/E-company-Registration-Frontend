import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/user`);
                //console.log()
                setUsers(response.data.users);
            } catch (error) {
                console.error('Error fetching companies:', error);
            }
        };
        fetchUsers();
    }, []);
    
    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/admin/users/${id}`);
            setUsers(Users.filter(company => company._id !== id));
        } catch (error) {
            console.error('Error deleting company:', error);
        }
    };

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                        
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(user => (
                        <TableRow key={user.email}>
                            <TableCell>{user._id}</TableCell>
                            <TableCell ><div  contentEditable='true'>{user.username}</div>
                                
                                </TableCell>
                            <TableCell><div>
                                {user.email}</div></TableCell>
                            
                            <TableCell>
                                <Button color="secondary" variant="contained" onClick={() => handleDelete(user._id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Users;