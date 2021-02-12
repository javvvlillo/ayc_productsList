import React from 'react';

export const ProductCard = ({id, name, customers , items }) => {
    return (
        <div>
            <div className="card ms-3" style={{ maxWidth: 540 }}>
                <div className="row no gutters">
                    <div className="card-body">
                        <h5 className="card-title"> { name } </h5>
                        <p className="card-text"> <small> { customers } </small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
