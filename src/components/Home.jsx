import { NavLink } from "react-router-dom";


const Home = () => {
    return (
        <div>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/users'>Users</NavLink>  
          <NavLink to='/signup'>Sign Up</NavLink>  
          <NavLink to='/'>Home</NavLink>  
             
        </div>
    );
};

export default Home;