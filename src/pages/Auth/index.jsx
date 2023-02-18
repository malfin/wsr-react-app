import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Index = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username)
        console.log(password)
        axios.post('https://api.web45.ru/api/token/', {
            username: username,
            password: password,
        }).then((result) => {
            alert("Вы успешно авторизовались!")
            localStorage.setItem('access', result.data.access)
            navigate('/')
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder={'Логин'} onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" placeholder={'Пароль'} onChange={(e) => setPassword(e.target.value)}/>
                <button>Войти</button>
            </form>
        </div>
    );
};

export default Index;