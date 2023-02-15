import React, {useState} from "react";
import {Link} from "react-router-dom";

export const Content = () => {

    const [counts, setCounts] = React.useState(0)

    const [todos, setTodos] = useState([]);


    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(res => res.json())
            .then((result) => {
                console.log(result)
                setTodos(result)
            })
    }, [])

    return (
        <div>
            <h3>Content</h3>
            <p>Количество нажатий на кнопку "ДА": {counts}</p>
            <button onClick={() => setCounts(counts + 1)}>"ДА"</button>
            <div className={'list'}>
                {todos.map(item => (
                    <div className={'m-2'} key={item.id}>
                        <h3><Link to={`todos/${item.id}/`}>{item.title}</Link></h3>
                        <p>{item.completed ? 'окей' : 'не выполнено!'}</p>
                        {/*<p>{status(item.completed)}</p>*/}
                    </div>
                ))}
            </div>
        </div>
    )
}