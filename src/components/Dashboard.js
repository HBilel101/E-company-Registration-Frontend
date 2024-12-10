import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import axios from 'axios';

const Dashboard = () => {
    const [stats, setStats] = useState({ totalCompanies: 0, pendingCompanies: 0, totalRequests: 0 ,totalUsers:0});

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/companies/admin/stats');
                setStats(response.data);
            } catch (error) {
                console.error('Error fetching stats:', error);
            }
        };
        fetchStats();
    }, []);

    return (
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <Card>
                    <CardContent>
                        <Typography variant="h5">Total Companies</Typography>
                        <Typography variant="h2">{stats.totalCompanies}</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card>
                    <CardContent>
                        <Typography variant="h5">Pending Companies</Typography>
                        <Typography variant="h2">{stats.pendingCompanies}</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card>
                    <CardContent>
                        <Typography variant="h5">Total Users</Typography>
                        <Typography variant="h2">{stats.totalUsers}</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card>
                    <CardContent>
                        <Typography variant="h5">Total Requests</Typography>
                        <Typography variant="h2">{stats.totalRequests}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
