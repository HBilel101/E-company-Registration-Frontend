import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import axios from 'axios';

const Companies = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/companies/admin/');
                setCompanies(response.data);
            } catch (error) {
                console.error('Error fetching companies:', error);
            }
        };
        fetchCompanies();
    }, []);

    const handleDelete = async (id) => {
        try {
            console.log(id)
            await axios.delete(`http://localhost:5000/api/companies/admin/company/${id}`);
            setCompanies(companies.filter(company => company._id !== id));
        } catch (error) {
            console.error('Error deleting company:', error);
        }
    };

    const handleEdit = async(id)=>{
        try{
            await axios.patch(`http://localhost:5000/api/companies/${id}/validate`,)
        }catch (error){

        }
    }


    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Owner</TableCell>
                        <TableCell>RegistrationNumber</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {companies.map(company => (
                        <TableRow key={company.registrationNumber}>
                            <TableCell>{company.name}</TableCell>
                            <TableCell>{company.status}</TableCell>
                            <TableCell>{company.owner}</TableCell>
                            <TableCell>{company.registrationNumber}</TableCell>
                            <TableCell>
                                <Button color="primary" variant="contained" onClick={()=>handleEdit(company.registrationNumber)}>Validate</Button>
                                <Button color="secondary" variant="contained" onClick={() => handleDelete(company.registrationNumber)}>Reject</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Companies;
