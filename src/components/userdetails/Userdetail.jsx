import { useLoaderData } from "react-router-dom";


const Userdetail = () => {
    const userdetail = useLoaderData();
    const {name} =userdetail;
    return (
        <div>
          <h3>there is the details of users : {name}</h3> 
        </div>
    );
};

export default Userdetail;