import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
          <h1><small>This is our website</small></h1> 
          <nav >
            
           <Link style={{ marginRight: '20px' }} to ='/'>Home</Link>
           <Link style={{ marginRight: '20px' }} to ='/about'>About</Link>
           <Link style={{ marginRight: '20px' }} to ='/contact'>Contact</Link>
           <Link to='/users'>Users</Link>
            
          </nav> 
        </div>
    );
};

export default Header;
