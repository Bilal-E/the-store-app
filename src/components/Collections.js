import React from 'react';
import shoeData from '../shoeData.json';
import '../App.css'; 
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import Button from '@material-ui/core/Button';
import { Link, Outlet } from 'react-router-dom';


function Collections() {
    
    return (
        <div className='collectionsBgImg'>

            <div className= 'collectionsDiv'>

        { Object.keys(shoeData).map(
            keyName => {

                const shoe = shoeData[keyName];
                
                return (

                    <Link to={`/collections/${keyName}`} className='shoeLink' key={keyName}>
                        
                        <img id='img' src={shoe.img} alt={shoe.name} />
                        
                        <h3 id='imgTitle'>{keyName.replace(/-/g, ' ').toUpperCase()}   
                            <Button onClick={() => { alert('Added to Cart') }}  >
                                <AddShoppingCartOutlinedIcon fontSize='small' />
                        
                            </Button></h3>
                        
                        <p>Men's Shoe</p>
                        
                        {/* <div style={{ position: 'absolute', marginTop: '-120px', marginLeft: '340px' }}>
                            
                            <Button onClick={() => {alert('Added to Cart')}}  >
                                <AddShoppingCartOutlinedIcon fontSize='small' />
                            </Button>
                            
                        </div> */}
                        
                    </Link>
            )}) }

        </div>  
            <Outlet />     
    </div>
    
    );
}

export default Collections;
