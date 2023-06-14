import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Header = () => {
    let {user, logoutUser} = useContext(AuthContext)

    return (
        <div className="m-3 text-center">
            <Link to="/" ><h1>Informatikai Webáruház</h1></Link>
            {user ? (
                 <a  onClick={logoutUser}>Kilépés</a>
            ): (
                <Link to="/login" >Belépés</Link>
            )}

            {user &&   <p>Üdv {user.username}!</p>}

        </div>
    )
}

export default Header
