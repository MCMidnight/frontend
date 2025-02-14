import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) {
      axios.get('/api/users/profile', { headers: { Authorization: `Bearer ${token}` } })
        .then(res => setProfile(res.data))
        .catch(err => console.error(err));
    }
  }, [token]);

  return (
    <div>
      {profile ? <h1>Welcome, {profile.username}</h1> : <p>Loading...</p>}
    </div>
  );
};

export default Profile;