import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import api from '../../services/api';
import { Wrapper, Content } from './styles';

// Função responsável por cadastrar um novo usuario
function register({ history }) {
    async function formSubmit(data) {
        const response = await api
            .post('/login/register', {
                name: data.name,
                username: data.username,
                password: data.password,
                password2: data.password,
                email: data.email,
                isAdmin: false,
            })
            .catch((error) => {
                toast.warn('Invalid register!');
                history.push('/register');
            });
        if (!response.data.success) {
            toast.warn(response.data.message);
        } else {
            toast.success(response.data.message);
            history.push('/');
        }
    }
    // schema responsavel pelas validações do formulário
    const schema = Yup.object().shape({
        name: Yup.string().required('Required field'),
        username: Yup.string().required('Required field'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Required field'),
        password: Yup.string().required('Required field'),
    });
    return (
        <Wrapper>
            <Content>
            <Form schema={schema} onSubmit={formSubmit}>
                <Input name="name" type="text" placeholder="Name" />
                <Input name="username" type="text" placeholder="Username" />
                <Input name="email" type="email" placeholder="Email" />
                <Input name="password" type="password" placeholder="Password" />
                <button type="submit">Create</button>
            </Form>
            </Content>
        </Wrapper>
            
        
    );
}

export default register;
