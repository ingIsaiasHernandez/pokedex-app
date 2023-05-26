import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import userNameSlice from '../store/slices/userName.slice';

const ProtectedRoutes = () => {

    const userName = useSelector( state => state.userName)

    if(userName !== ""){
        return <Outlet />
    } else { 
        return <Navigate to='/' />
    }                     
};                        

export default ProtectedRoutes;