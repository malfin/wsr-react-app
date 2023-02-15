import {Link} from "react-router-dom";

const Index = () => {
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
            </ul>
        </div>
    )
}

export default Index;
