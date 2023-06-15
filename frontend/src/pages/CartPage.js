import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import AuthContext from "../context/AuthContext";

const CartPage = () => {
    let {user} = useContext(AuthContext)
    const [cartitems, setCartitems] = useState(null);
    console.log("10 cartitems", cartitems)


    useEffect(() => {
        fetchCartitems();
    }, []);

    const fetchCartitems = async () => {
        try {
            const response = await axios.post('/api/cart/',
                {user: user.user_id});
            console.log(response.data)
            setCartitems(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    if (!cartitems) {
        return <p>Loading...</p>;
    } else {
        const totalAmount = cartitems.reduce((total, item) => total + item.quantity * item.product.price, 0);
        return (
            <div>
                {cartitems.map((item) => (
                    <div className="card m-3" key={item.id}>
                        <div className="card-body mx-3">
                            <h5 className="card-title">{item.product.name}</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Darabszám: {item.quantity}</li>
                                <li className="list-group-item">Egységár: {item.product.price} Ft</li>
                                <li className="list-group-item">Teljes ár: {item.quantity * item.product.price} Ft</li>
                            </ul>
                        </div>
                    </div>
                ))}
                <p className="text-center mt-4">Teljes fizetendő összeg: {totalAmount} Ft</p>
            </div>

        );
    }


};

export default CartPage;
