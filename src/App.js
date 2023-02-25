import Headers from "./components/Header";
import {Routes, Route} from "react-router-dom";
import {Content} from "./pages/Content";
import {About} from "./pages/About";

import './static/css/index.css'
import TodosID from "./pages/TodosID";
import Auth from "./pages/Auth";
import Order from "./pages/Order";

function App() {
    const access = localStorage.getItem('access')
    console.log(access)

    return (
        <div className="App">
            <Headers access={access}/>
            {access ?
                <div>
                    Вы авторизованы!
                </div> :
                ''}
            <Routes>
                <Route path={'/'} index element={<Content/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/todos/:id/'} element={<TodosID/>}/>
                <Route path={'/login/'} element={<Auth/>}/>
                <Route path={'/order'} element={<Order access={access}/>}/>
            </Routes>
        </div>
    );
}

export default App;
