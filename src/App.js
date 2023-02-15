import Headers from "./components/Header";
import {Routes, Route} from "react-router-dom";
import {Content} from "./pages/Content";
import {About} from "./pages/About";

import './static/css/index.css'
import TodosID from "./pages/TodosID";

function App() {
    return (
        <div className="App">
            <Headers/>
            <Routes>
                <Route path={'/'} index element={<Content/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/todos/:id/'} element={<TodosID/>}/>
            </Routes>
        </div>
    );
}

export default App;
