import React from 'react'
import NavBar from '../components/NavBar'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'

const Home = () => {
  return (
    <>
        <NavBar/>
        <TaskForm/>
        <TaskList/>
    </>
    
  )
}

export default Home