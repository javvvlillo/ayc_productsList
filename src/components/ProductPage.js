import React, { useState } from 'react';
import { useParams, Redirect } from "react-router-dom";
import { products } from '../data/products';
import { useForm } from "../hooks/useForm";
import { LotesText } from './LotesText';

export const ProductPage = () => {

    const [formValues, handleInputChange ] = useForm({
        number: 0
    });

    const { number } = formValues;
    const [lotes, setLotes] = useState();

    // useEffect(() => {
    // }, [number])

    const [show, setShow] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLotes(Math.round(number/10));
        setShow(true);
    }
    
    const { productId } = useParams();
    
    const product = products.find(product => product.id === productId);
    

    if ( !product ) {
        return <Redirect to="/" />
    }
    
    const { name, customers, items } = product;

    let quantity;

    if (customers === 'simple') {
        quantity = 1; 
    }

    if (customers === 'doble') {
        quantity = 2;
    }


    return (
        <>
        <div className="row mt-5">
            <h1 className="text-center"> { name }({ customers }) </h1>
        </div>
        <div className="row mt-5">
            <div className="col-5">
                

                <ul className="list-group list-group-flash">
                    {
                        items.map((item, index) => (
                            <li className="list-group-item" key={ index }>{ quantity } x { item }</li>
                        ))
                    }
                </ul>

            </div>

            <div className="col-5">
                <div className="form-group mt-10">
                    <input
                        type="number"
                        name="number"
                        className="form-control"
                        placeholder="Desayunos"
                        autoComplete=  "off"
                        value= { number }
                        onChange={ handleInputChange }
                        />
                </div>

                <button type="submit" className="btn btn-primary" onClick={ handleSubmit }>
                    Calcular Lotes
                </button>

                { show && <LotesText lotes={ lotes } /> }
            </div>
            
           
        </div>
        </>
    )
}
