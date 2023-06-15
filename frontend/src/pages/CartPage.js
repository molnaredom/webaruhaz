import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import AuthContext from "../context/AuthContext";

const CartPage = () => {
    let {user} = useContext(AuthContext)
    const [cartitems, setCartitems] = useState(null);

    useEffect(() => {
        fetchCartitems();
    }, []);

    const fetchCartitems = async () => {
        try {
            const response = await axios.post('/api/cart/',
                {user: user.user_id});
            setCartitems(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    if (!cartitems) {
        return <p>A kosárban lévő elemeket nem sikerült betölteni!</p>;
    } else {
        const totalAmount = cartitems.reduce((total, item) => total + item.quantity * item.product.price, 0);
        const groupedItems = cartitems.reduce((groups, item) => {
            const {name, price} = item.product;
            const key = `${name}-${price}`;
            if (!groups[key]) {
                groups[key] = {
                    items: [],
                    totalQuantity: 0,
                };
            }
            groups[key].items.push(item);
            groups[key].totalQuantity += item.quantity;
            return groups;
        }, {});
        return (
            <div>
                {Object.entries(groupedItems).map(([key, {items, totalQuantity}]) => {
                    const [name, price] = key.split("-");
                    return (
                        <div key={key} className="card m-3">
                            <h5 className="p-3 px-4">{name}</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Darabszám: {totalQuantity}</li>
                                <li className="list-group-item">Egységár: {price} Ft</li>
                                <li className="list-group-item">Teljes ár: {totalQuantity * price} Ft</li>
                            </ul>
                        </div>
                    );
                })}
                <p className="text-center mt-4">Teljes fizetendő összeg: {totalAmount} Ft</p>
            </div>
        );
    }
};

export default CartPage;
