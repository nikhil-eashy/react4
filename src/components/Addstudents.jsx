import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Addstudents = () => {
    var [students,setstudents]= useState({
        id:"",
        name:"",
        grade:''
    })

    const handler = (e) => {
        const{name,value} = e.target
        setstudents({... students,[name]:value})
        console.log(students)
    }
  return (
    <div>
      <Typography variant='h3'>Add Students</Typography><br></br>
      <TextField variant='outlined' label="ID" onChange={handler}> </TextField><br></br><br></br>
      <TextField variant='outlined' label="Name">name</TextField><br></br><br></br>
      <TextField variant='outlined' label="Grade">grade</TextField><br></br><br></br>
      <Button variant='contained'>SUBMIT</Button>
    </div>
  )
}


export default Addstudents
