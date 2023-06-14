import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'

const LoginPage = () => {
    let {loginUser} = useContext(AuthContext)
    return (
        <div>
            <form onSubmit={loginUser} className="input-group mb-3">
                <input className="form-control" type="text" name="username" placeholder="Felhasználónév" />
                <input className="form-control" type="password" name="password" placeholder="Jelszó" />
                <input className="btn btn-outline-primary" type="submit"  value="Belépés"/>
            </form>
        </div>
    )
}

export default LoginPage
