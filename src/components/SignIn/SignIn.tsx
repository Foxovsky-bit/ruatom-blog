import {useState} from "react";
import {useNavigate} from "react-router-dom";
import './SignIn.scss'

export const SignIn = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    function loginCheck(email:string,password:string) {
        if (email && password) {
            navigate('/home')
        }
        else {
            alert('Заполните логин и пароль')
        }
    }

    return (
        <div className={'auth-page'}>
            <div className={'form-wrapper'}>
                <div className={'form-title'}>Вход в аккаунт</div>
                <input className={'input-field'}
                       type="text"
                       value={username}
                       onChange={(e) => setUsername(e.target.value)}
                       placeholder="Введите e-mail"
                />
                <input className={'input-field'}
                       type="password"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       placeholder="Введите пароль"
                />
                <button className={'form-button'} onClick={() => loginCheck(username,password)}>Вход</button>
            </div>
        </div>
    )
}