
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Alluser = ({user}) => {
    const {name,email,phone}=user;
    const alluserStyle={
        border:'2px solid red' ,
        paddinng:'10px',
        borderRadius:'20px',
        marginBottom:'10px'
    }
    return (
        <div style={alluserStyle}>
            <h4>{name}</h4>
            <h5>{email}</h5>
            <h4>{phone}</h4>
           
        </div>
    );
};
Alluser.propTypes={
    user:PropTypes.object
}
export default Alluser;