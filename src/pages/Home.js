import React from 'react'
import './Home.css';
import {useEffect, useState} from "react";
import People from "../People";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/auth';

const PAGE_NUMBER = 1;

const Home = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(PAGE_NUMBER);

  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    auth.logout()
    navigate('/')
  }

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://randomuser.me/api/?results=20");
        userData = (await response.json()).results;
      } catch (error) {
        console.log(error);
        userData = [];
      }
      
      setUsers(userData);
    })();
  }, [page]);

  const scrollToEnd = () => {
    setPage( page + 1);
  }

  window.onscroll = function (){

    if (
      window.innerHeight + document.documentElement.scrollTop
      === document.documentElement.offsetHeight
    ){
      scrollToEnd()
    }
  }

  return (
    <div className="Homepage">
      <h1>People</h1>
      <button className="logout" onClick={handleLogout}>Logout</button>
      <div className="container">

      {users.map((user, index) => (
        <People key={index} userData={user} />
        ))}
      </div>
    </div>
  );
}

export default Home