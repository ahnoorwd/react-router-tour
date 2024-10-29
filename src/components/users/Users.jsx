import { useLoaderData } from "react-router-dom";
import Alluser from "../alluser/Alluser";
import '../usersstyle/';
const Users = () => {
  
    const users = useLoaderData();

    return (
        <div>
             <h1>Our users are happy to use out servises</h1>
             <h3>Total users : {users.length}</h3>

            <div className="users">
            {
              users.map(user=><Alluser key={user.id} user={user}></Alluser>)  
             }
            </div>
           
           
        </div>
    );
};

export default Users;