import React, { useState, useEffect } from 'react'
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar'
import Cart from './components/Cart/Cart'
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CartItem from './components/Cart/CartItem/CartItem';


const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState();


    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }
    
    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve())
        //console.log('cart content', commerce.cart.retrieve());
        //const {item} = await commerce.cart.retrieve();

        //setCart(item);
    } 

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
        console.log(item);
        setCart(item.cart);
    }

    useEffect(() =>{
        fetchProducts();
        fetchCart();
    }, []);

    console.log(cart);

    console.log(products);

    return (
        <Router>
            <div>
                {/*<Navbar totalItems={cart.total_items}/>*/}
                <Navbar totalItems={cart? cart.total_items: 0}/>
                <Switch>
                    <Route exact path="/">
                        <Products products={products} onAddToCart={handleAddToCart}/>
                    </Route>
                    <Route exact path="/cart">
                        <Cart cart={cart} />
                    </Route>
                </Switch>
            </div> 
        </Router>
    )
}

export default App;
