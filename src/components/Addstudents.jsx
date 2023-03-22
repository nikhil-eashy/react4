import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Addstudents = () => {
  return (
    <div>
      <Typography variant='h3'>Add Students</Typography><br></br>
      <TextField variant='outlined' label="ID"></TextField><br></br><br></br>
      <TextField variant='outlined' label="Name">name</TextField><br></br><br></br>
      <TextField variant='outlined' label="Grade">grade</TextField><br></br><br></br>
      <Button variant='contained'>SUBMIT</Button>
    </div>
  )
}

export default Addstudents
