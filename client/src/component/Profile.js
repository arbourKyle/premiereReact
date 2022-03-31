import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Slideshow from "./Slideshow";
import Logout from "./Logout";
const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
   <footer><Logout /></footer>
     </div>
 
     
      
 
    )
  );
};

export default Profile;