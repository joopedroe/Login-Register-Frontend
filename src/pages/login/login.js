/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import api from '../../services/api';
import { Wrapper, Content } from './styles';

// Função responsavel pela autenticação do usuario
function Login({ history }) {
    // eslint-disable-next-line no-shadow
    const [login, setLogin] = useState(false);
    async function formSubmit(data) {
        setLogin(true);
        // eslint-disable-next-line no-unused-vars
        const response = await api.post('/login', data).catch((error) => {
            setLogin(false);
        });
        if (response === undefined) {
            toast.error('Invalid username or password!');
        } else {
            history.push('/main');
        }
    }
    // schema responsavel pela validação nos campos
    const schema = Yup.object().shape({
        username: Yup.string().required('Required field'),
        password: Yup.string().required('Required field'),
    });
    return (
        <Wrapper>
        <Content>
            <Form schema={schema} onSubmit={formSubmit}>
                <Input name="username" type="text" placeholder="Username" />
                <Input name="password" type="password" placeholder="Password" />
                <button type="submit">
                    {!login ? 'Login' : 'Loading ...'}
                </button>
                <Link to="/register">Create account</Link>
            </Form></Content>
        </Wrapper>
            
        
    );
}

export default Login;
