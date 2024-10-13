import React, { useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../Context/userContext";
import './Logout.css'

const Logout = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      await axios.post('/logout');
      setUser(null);
      toast.success('Logout successful');
      navigate('/login'); 
    } catch (error) {
      console.error('Logout failed:', error);
      toast.error('Logout failed. Please try again.');
    }
  };

  return (
    <div className="logout-button">
      <button onClick={handleLogout}>Logout</button>
    </div>
    
  );
};

export default Logout;

