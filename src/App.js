import React from 'react'
import { Link, Route } from 'react-router-dom'
import User from './user'
import Post from './post'
import ShowUser from './showuser'
import UsersPost from './userspost'


const App = (props) => {
  return (
    <div>       
      <Link to='/'>Home</Link>
      <Link to='/user'>|User</Link>
      <Link to='/post'>|Post</Link>
            
      
      <Route path='/user' component={ User } exact={ true}/>
      <Route path='/post' component={ Post } exact={ true }/>
      <Route path='/user/:id' component={ ShowUser } exact={true}/>
      <Route path='/post/:id' component={ UsersPost } exact={true}/>
    </div>
  )
}

export default App