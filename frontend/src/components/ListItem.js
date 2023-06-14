import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Image } from 'react-bootstrap';

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
    return 'Raktáron: '+ product.in_stock + ' db'
}

const ListItem = ({ product }) => {

    return (
        <div className="col-4 card p-3" >
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
                    {/*{console.log('127.0.0.1:8000' + product.image)}*/}
                    {console.log(product.image)}
                    {product && <img src={'http://127.0.0.1:8000/api'+ product.image}
                                     alt="Product" height='100px' width='100px' />}
                </div>

            </div>

        </div>
    )
}

export default ListItem
