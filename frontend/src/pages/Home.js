import React from 'react'
import {useDispatch} from 'react-redux'
import {Link} from "react-router-dom"
import {toggleAdd} from "../js/actions/edit"
const Home = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <Link to="/add"> <button onClick={()=>dispatch(toggleAdd())}>addcontact</button></Link>
            <Link to ='/'><button>ContactList</button></Link>
        </div>
    )
}

export default Home
