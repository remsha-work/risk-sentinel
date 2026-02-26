// src/hooks/useApi.js - FETCH 7 USERS LIVE
import { useState, useEffect } from 'react';
import axios from 'axios';

export const useApi = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    axios.get('http://localhost:8000/api/users/')
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);
  
  return { users, loading, userCount: users.length };
};
