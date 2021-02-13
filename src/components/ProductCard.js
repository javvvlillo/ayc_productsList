import React from 'react';
import { Link } from "react-router-dom";

export const ProductCard = ({id, name, customers , items }) => {
    return (
        <div>
            <div className="card ms-3" style={{ maxWidth: 540 }}>
                <div className="row no gutters">
                    <div className="card-body">
                        <h5 className="card-title text-center"> { name } </h5>
                        <p className="card-text text-center"> <small> { customers } </small></p>
                        <Link to={`/${ id }`}>
                                Información
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
