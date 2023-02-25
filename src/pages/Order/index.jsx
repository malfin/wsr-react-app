import React, {useEffect, useState} from 'react';
import axios from "axios";

const Index = ({access}) => {
    const [order, setOrder] = useState([]);

    useEffect(() => {
        axios.get('https://api.web45.ru/api/order/', {
            headers: {
                Authorization: `Bearer ${access}`
            }
        }).then((result) => {
            // console.log(result.data)
            setOrder(result.data)
        })
    }, [access])

    return (
        <div>
            <h1>Order</h1>
            <>
                {order.map((item) => (
                    <div key={item.id}>
                        <p>{item.product}</p>
                        <p>{item.status_display_value}</p>
                    </div>
                ))}
            </>
        </div>
    );
};

export default Index;