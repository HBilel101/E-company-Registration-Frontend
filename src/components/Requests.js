import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import axios from 'axios';

const Requests = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/user/req');
                setRequests(response.data);
            } catch (error) {
                console.error('Error fetching companies:', error);
            }
        };
        fetchRequests();
    }, []);

/*    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/admin/companies/${id}`);
            setCompanies(companies.filter(company => company._id !== id));
        } catch (error) {
            console.error('Error deleting company:', error);
        }
    };*/

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Owner</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {requests.map(req => (
                        <TableRow key={req._id}>
                            <TableCell>{req.requestSubject}</TableCell>
                            <TableCell>{req.requestBody}</TableCell>
                            <TableCell>{req.userId}</TableCell>
                            <TableCell>
                                <Button color="primary" variant="contained">Edit</Button>
                                <Button color="secondary" variant="contained" onClick={() => console.log}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Requests;
