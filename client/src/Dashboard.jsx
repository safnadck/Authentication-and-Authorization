import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Dashboard() {
     const [sec , setSec ] = useState('')
     const navigate = useNavigate()
     axios.defaults.withCredentials = true;

    useEffect ((e) => {
        axios.get('http://localhost:3001/dashboard')

    .then(res => {
         if(res.dat === "Success") {
            setSec("Succesed ok ")
         }
         else {
            navigate('/')
         }
    })
    .catch (err => console.log(err))


    }, [])


  return (
    <div>
      <h2>dashboard page</h2>
      <p>{sec}</p>
    </div>
  )
}

export default Dashboard
