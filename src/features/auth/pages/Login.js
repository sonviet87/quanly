import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import { FormLogin } from '../styles/StyledLogin';
import LoginForm from '../components/LoginForm';
import { Grid } from '@mui/material';

import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getLSItem } from 'utils/localStorage';
import { setLSItem } from 'utils';
import { authActions } from '../authSlice';
import userApi from 'api/userAPI';


function Login() {

    const arrUser = [
        {
            id: 1,
            username: 'admin',
            email: 'admin@gmail.com',
            password: '123456',
            role: 1,
            accessToken: 'fdafsoaifudoasjfklaioi6548798jfoi'
        }, {
            id: 2,
            username: 'user',
            email: 'user@gmail.com',
            password: '123456',
            role: 1,
            accessToken: 'fpôiijfkldsfsoi6548798jfoi'
        }
    ]


    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {

        (async () => {
            const accessToken = getLSItem('access_token');
            const isLoggedIn = Boolean(accessToken);
            console.log("isLoggedIn", isLoggedIn)
            console.log("accessToken", accessToken)
            if (isLoggedIn) {
                navigate('/admin');
            }
        })();
    });
    const handleSubmit = async (formValues) => {
        /*const res = await userApi.login({
            email: formValues.username,
            password: formValues.password,
        });
        if (res.status) {
            setLSItem('access_token', res.data.accessToken);
            delete res.data.accessToken;
            dispatch(authActions.setRoles(res.data.roles));
            delete res.data.roles;
            dispatch(authActions.setCurrentUser(res.data));
            navigate('/admin');
        } else {
            toast.error(res.message);
        }*/

        let flag = 0;
        arrUser.forEach((item) => {
            if (item.username === formValues.username && item.password === formValues.password) {
                flag = item.id;
            }
        })

        if (flag) {
            const data = arrUser[flag - 1];

            setLSItem('access_token', data.accessToken);
            delete data.accessToken;
            dispatch(authActions.setRoles(data.roles));
            delete data.roles;
            dispatch(authActions.setCurrentUser(data));
            toast.success('Login successfully!');
            navigate('/admin');
        } else {
            toast.error("Không đúng tên đăng nhập hoặc mật khẩu");
        }
        // event.preventDefault();
        //  const data = new FormData(event.currentTarget);
        // console.log({
        //     email: data.get('email'),
        //     password: data.get('password'),
        // });
    };
    return (
        <Container>
            <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid item md={4}>

                    <FormLogin>
                        <img src={process.env.PUBLIC_URL + "/top_logo.png"} alt="" width="150px" />

                        <LoginForm onSubmit={handleSubmit} />

                    </FormLogin>

                </Grid>
            </Grid>
        </Container>
    );
}

export default Login;