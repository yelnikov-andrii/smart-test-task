import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { UserI } from '../types';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'username', headerName: 'Username', width: 110 },
    {
        field: 'email',
        headerName: 'Email',
        width: 240,
    },
    {
        field: 'phone',
        headerName: 'Phone',
        width: 150
    },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function Table({ data }: { data: UserI[] }) {
    return (
        <Paper sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={data}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ border: 0 }}
            />
        </Paper>
    );
}
