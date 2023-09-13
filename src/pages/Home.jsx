import React from 'react'
import Form from '../components/Form'
import ListGruop from '../components/ListGruop'

const Home = () => {
  return (
    <>
    <div className="container p-5">
    <h1 className="text-center">FeedBack App</h1>

        <Form/>
        <ListGruop/>
    </div>
    </>
  )
}

export default Home
