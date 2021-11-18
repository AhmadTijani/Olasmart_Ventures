import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
//import '../../styles/main.css'
//import useStyles from './styles';


//const products = [
   // { id: 1, name: 'Milo', description: 'Beverage', price: '₦60', image: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/i/Milo-Tin---500g-7792153_1.jpg'},
    //{ id: 1, name: 'Coca-cola', description: 'Drink', price: '₦150', image: 'https://i2.wp.com/www.brandcrunch.com.ng/wp-content/uploads/2021/01/colaaaaa-removebg-preview-1.png?fit=581%2C293&ssl=1'},
//];

const Products = ({ products, onAddToCart }) => {
    //const classes = useStyles();

    return(
        //<main className={classes.content}>
            //<div className={classes.toolbar} />
        <main className="test" >
            <div className="toolbar"/>
            <Grid container justify="center" spacing={4}>
                {products.map((product) =>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Products;