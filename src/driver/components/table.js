import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

import React from 'react';

function StandingsTable({ rows, columns }) {
    return (
        <TableContainer className="w-full">
            <Table className="max-w-3xl m-auto">
                <TableHead>
                    <TableRow>
                        {columns.map((column, index) => {
                            return (
                                <TableCell key={index} align="left">
                                    {column}
                                </TableCell>
                            );
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>{rows}</TableBody>
            </Table>
        </TableContainer>
    );
}

export default StandingsTable;
