import { Typography, Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, createTheme, ThemeProvider, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { tableCellClasses } from '@mui/material/TableCell';
import { blue, blueGrey } from '@mui/material/colors';
import axios from 'axios';


const Read = () => {
    const theme = createTheme({
        palette: {
        primary: {
        main: '#b2102f',
        },
        secondary: {
        main: '#11cb5f',
        },
        },
        });
    const color = "#b2102f";
    const color2 = blueGrey[900];
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: color2,
            color: color,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));
    const deletes =(id) =>{
        console.log("Deleting "+id);
        axios.delete("http://localhost:3005/students/"+id)
        .then(response=>{
            alert("Deleted")
            window.location.reload(false)
        })
    }
    var [students, setstud] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3005/students")
            .then(response => {
                console.log(response.data)
                setstud(students = response.data)
            })
            .catch(err => console.log(err))
    })
    return (
        <div>
            <br></br>
            <Typography variant='h3'>Students</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell>Age</StyledTableCell>
                            <StyledTableCell>Place</StyledTableCell>
                            <StyledTableCell>Delete</StyledTableCell>
                            <StyledTableCell>Update</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((value, index) => {
                            return <TableRow>
                                <TableCell>{value.id}</TableCell>
                                <TableCell>{value.name}</TableCell>
                                <TableCell>{value.grade}</TableCell>
                                <TableCell><ThemeProvider theme={theme}><Button variant='contained' onClick={()=>deletes(value.id)}>Delete</Button></ThemeProvider></TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Read
