import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Alert from 'react-bootstrap/Alert';

let getTime = (note) => {
    return new Date(note.created).toLocaleDateString()
}

let getTitle = (note) => {
    return note.name
}

let getContent = (product) => {
    return product.desciption
}
let getPrice = (product) => {
    return product.price + " Ft"
}

let getInStock = (product) => {
    return 'Raktáron: ' + product.in_stock + ' db'
}

const ListItem = ({product}) => {
    const [quantity, setQuantity] = useState(1);
    const [showAlert, setShowAlert] = useState(false); // State variable for the alert
    const addToCart = () => {
        const requestBody = {
            cart: 1,
            product: product.id,
            quantity: quantity,
        };

        fetch('/api/add-to-cart/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response data if needed
                console.log(data);
                setShowAlert(true);
            })
            .catch((error) => {
                // Handle any errors that occurred during the request
                console.error(error);
            });
    };
    return (
        <div className="col-4 card p-3">
            <div className="card-body row">
                <div className="col-8">
                    <h5 className="card-title">{getTitle(product)}</h5>
                    <p className="card-text">
                        {getContent(product)}
                    </p>
                    <p className="card-text">
                        {getTime(product)}
                    </p>
                    <p className="card-text">
                        {getPrice(product)}
                    </p>
                    <p className="card-text">
                        {getInStock(product)}
                    </p>

                </div>
                <div className="col-4">
                    {product && <img src={'http://127.0.0.1:8000/api' + product.image}
                                     alt="Product" height='100px' width='100px'/>}
                </div>
                <div className='row'>
                    <input
                        className='input-group-text'
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                    />
                    <button className="btn btn-outline-primary" onClick={addToCart}>Kosárhoz adás</button>

                </div>
                {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Product added to cart successfully!
        </Alert>
      )}
            </div>
        </div>
    )
}

export default ListItem
