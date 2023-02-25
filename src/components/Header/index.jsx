import {Link} from "react-router-dom";

const Index = ({access}) => {
    const exit = () => {
        localStorage.removeItem('access')
        window.location = '/'
    }

    return (
        <div className={'d-flex'}>
            Header
            <ul className={'d-flex'}>
                <li>
                    <Link to="/">Главная</Link>
                </li>
                <li>
                    <Link to="/about">О нас</Link>
                </li>
                {access ?
                    <li>
                        <Link to="/order">Заказы</Link>
                    </li> :
                    ''
                }
                {!access ?
                    <li>
                        <Link to="/login">Войти</Link>
                    </li> :
                    <li>
                        <Link to="#" onClick={() => exit()}>Выйти</Link>
                    </li>
                }
            </ul>
        </div>
    )
}

export default Index;
