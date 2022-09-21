import { selectCurrentUser } from "features/auth/authSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { getLSItem } from "utils";
import { LoadingOverlay } from "./LoadingOverlay";

function PrivateRoute({ children }) {

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selectUser = useSelector(selectCurrentUser);

    useEffect(() => {
        (async () => {
            const accessToken = getLSItem('access_token');
            const isLoggedIn = Boolean(accessToken);
            if (!isLoggedIn) {
                return navigate('/login');
            }
            /*if (!selectUser) {
                
                const res = await userApi.getUserInfo();
                if (res.status) {
                    setLSItem('access_token', res.data.accessToken);
                    dispatch(authActions.setRoles(res.data.roles));
                    dispatch(authActions.setCurrentUser(res.data));
                    dispatch(authActions.setTypeLogin(getLSItem('typeLogin')));
                    // res.data.accessToken = undefined;
                    // res.data.roles = undefined;
                }
               
                return navigate('/login');
                
                
            }*/
            setLoading(false);
        })();
    }, [navigate, selectUser, dispatch]);

    if (loading) {
        return <LoadingOverlay />;
    }

    return children;
}
export default PrivateRoute;