import React, {useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import axios from "axios";

const Header = () => {
    let {user, logoutUser} = useContext(AuthContext)
    const [cartitems, setCartitems] = useState(null);
    let num_of_items;

    if (cartitems) {
        num_of_items = cartitems.reduce((total, item) => total + item.quantity, 0);
    }

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

    return (
        <div className="m-3 text-center">
            <Link to="/" ><h1>Informatikai Webáruház</h1></Link>
            <Link to="/cart" >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                     className="bi bi-cart2" viewBox="0 0 16 16">
                    <path
                        d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                </svg>
                {num_of_items}
                <p>Kosár</p>
            </Link>
            {user ? (
                 <a  onClick={logoutUser}>Kilépés</a>
            ): (
                <Link to="/login" >Belépés</Link>
            )}

            {user && <p>Üdv {user.username}!</p>}
        </div>
    )
}

export default Header;
