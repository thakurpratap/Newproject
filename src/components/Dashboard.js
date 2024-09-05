import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const { currentuser, logoutUser} = useContext(UserContext);
    console.log(currentuser);

    const navigate = useNavigate();

    const handleLogout = () => {
        logoutUser();
        navigate('/');
    };

    return (
        <>
         <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        
        <span><a class="navbar-brand">Welcome, {currentuser ? currentuser.firstname : 'Guest' }!</a><span><button onClick={handleLogout}>Logout</button></span></span>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
        </>
    );
}

export default Dashboard;