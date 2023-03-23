import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addstudents = (props) => {
    var [student,setstudents]= useState(props.data)

    const handler = (e) => {
        const{name,value} = e.target
        setstudents({... student,[name]:value})
        console.log(student)
    }
    const savedata = (e) => {
    console.log("Button Clicked")

    if(props.method === "post"){
      axios.post("http://localhost:3005/students/",student)
    .then(response=>{
        alert("Added")
    })
    .catch(error=>{
        alert("Failed")
    })
    } else if (props.method ==="put"){
    axios.put("http://localhost:3005/students/"+student.id,student)
    .then((response) => {
        window.location.reload(false)
        alert("Done")
    })
  }
}
  return (
    <div>
      <Typography variant='h3'>Add Students</Typography><br></br>
      <TextField name='id' variant='standard' label="ID" onChange={handler} value={student.id}> </TextField><br></br><br></br> 
      <TextField name='name' variant='outlined' label="Name" onChange={handler} value={student.name}>name</TextField><br></br><br></br>
      <TextField name='grade' variant='outlined' label="Grade" onChange={handler} value={student.grade}>grade</TextField><br></br><br></br>
      <Button variant='contained' onClick={savedata}>SUBMIT</Button>
    </div>
  )
}


export default Addstudents
