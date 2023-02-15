import React from 'react';
import {useParams} from "react-router-dom";

const Index = () => {

    const {id} = useParams();

    const [todos, setTodos] = React.useState('');

    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => res.json())
            .then((result) => {
                console.log(result)
                setLoading(false)
                setTodos(result)
            })
    }, [id])

    return (
        <div>
            {loading ? <h3>Идёт получение даннх...</h3>
                :
                <div>
                    <h1>{todos.title}</h1>
                    <h1>{todos.userId}</h1>
                    <p>{todos.completed ? 'окей' : 'не выполнено!'}</p>
                </div>
            }
        </div>
    );
};

export default Index;