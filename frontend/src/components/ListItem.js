import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

let getTime = (note) => {
    return new Date(note.created).toLocaleDateString()
}

let getTitle = (note) => {
    return note.name
}


let getContent = (product) => {
    console.log(product)
    console.log(product.desciption)
    return product.desciption
}


const ListItem = ({ product }) => {
    return (
        <div className="col-4 card p-3" >
            <div className="card-body">
                <h5 className="card-title">{getTitle(product)}</h5>
                <p className="card-text">
                    {getContent(product)}
                </p>
                <p className="card-text">
                    {getTime(product)}
                </p>
            </div>
        </div>
    )
}

export default ListItem
