import { Typography, Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, createTheme, ThemeProvider, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { tableCellClasses } from '@mui/material/TableCell';
import { blue, blueGrey } from '@mui/material/colors';
import axios from 'axios';
import Addstudents from './Addstudents';


const Read = () => {
    var [update, setUpdate] = useState(false)
    var [singleValue, setsingleValue] = useState([])
    var [students, setstud] = useState([])
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
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: color2,
            color: color,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const Updatevalue = (value) => {
        setsingleValue(value);
        setUpdate(true);
    }

    const deletes = (id) => {
        console.log("Deleting " + id)
        axios.delete("http://localhost:3005/students/" + id)
            .then(response => {
                alert("Deleted")
                window.location.reload(false)
            })
    }

    useEffect(() => {
        axios.get("http://localhost:3005/students")
            .then(response => {
                console.log(response.data)
                setstud(students = response.data)
            })
            .catch(err => console.log(err))
    }, [])
    var finalJSX = <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <StyledTableRow>

                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell>Age</StyledTableCell>
                    <StyledTableCell>Place</StyledTableCell>
                    <StyledTableCell>Delete</StyledTableCell>
                    <StyledTableCell>Update</StyledTableCell>
                </StyledTableRow>
            </TableHead>
            <TableBody class='tbody'>
                {students.map((value, index) => {
                    return <StyledTableRow>
                        <StyledTableCell>{value.id}</StyledTableCell>
                        <StyledTableCell>{value.name}</StyledTableCell>
                        <StyledTableCell>{value.grade}</StyledTableCell>
                        <StyledTableCell><Button variant='contained' onClick={() => deletes(value.id)}>Delete</Button></StyledTableCell>
                        <StyledTableCell><Button variant='contained' onClick={() => Updatevalue(value)}>Update</Button></StyledTableCell>
                    </StyledTableRow>
                })}
            </TableBody>
        </Table>
    </TableContainer>
    if (update)
        finalJSX = <Addstudents data={singleValue} method="put"></Addstudents>
    return (
        <div>

            {finalJSX}
        </div>
    )
}

export default Read
