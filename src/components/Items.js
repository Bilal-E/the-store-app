import React from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';
import shoeData from '../shoeData.json';
import Button from '@material-ui/core/Button';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';


function Items() {

    const { id } = useParams();
    const shoe = shoeData[id];
    
    console.log(shoe.img);

    if(!shoe)
        return <h2>Product not found!</h2>

    return (
        <div className='itemsDiv' >
            <img id='img' src={shoe.img} alt={shoe.name} />

            <h3 id='imgTitle'>{shoe.name.replace(/-/g, ' ').toUpperCase()}
                
                <Button onClick={() => { alert('Added to Cart') }}  >
                    <AddShoppingCartOutlinedIcon fontSize='small' />
                </Button>
            
            </h3>

            <p>Men's Shoe</p>
        </div>
    );
}

export default Items;
