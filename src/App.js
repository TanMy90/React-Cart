import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor (){
    super();
    this.state = {
       products: [
           {
                price:2999,
                title:'Watch',
                qty: 1,
                img:'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
                id: 1
           },
           {
                price:14999,
                title:'Mobile',
                qty: 1,
                img:'https://images.unsplash.com/photo-1533228100845-08145b01de14?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=678&q=80',
                id: 2
           },
           {
                price:999,
                title:'Headphone',
                qty: 1,
                img:'https://images.unsplash.com/photo-1484704849700-f032a568e944?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                id: 3
           },
           {
                price:599,
                title:'Mobile Cover',
                qty: 1,
                img:'https://images.unsplash.com/photo-1576107324820-c10884700b6b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
                id: 4
           }
       ]
    }

    // this.increaseQuantity = this.increaseQuantity.bind(this);
}

handleIncreaseQuantity = (product) => {
    
    const { products } = this.state;
    
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
        products
    })
}


handleDecreaseQuantity = (product) => {
    
    const { products } = this.state;
    
    const index = products.indexOf(product);

    if( products[index].qty === 0){
        return;
    }

    products[index].qty -= 1;

    this.setState({
        products
    })
}


handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id);

    this.setState({
        products: items
    })
}

getCartCount = () => {

  const { products } = this.state;

  let count = 0;

  products.forEach((product) => {
    count += product.qty;
  })

  return count;
}

getCartTotal = () => {

  const { products } = this.state;

  let cartTotal = 0;

  products.map((product) => {
    cartTotal = cartTotal + product.qty * product.price;
  })

  return cartTotal;
}
  
render(){
    
    const { products } = this.state;
    
    return (
        <div className="App">
            <Navbar count={this.getCartCount()}/>
            <Cart
              products={products}
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity={this.handleDecreaseQuantity}
              onDeleteProduct={this.handleDeleteProduct} 
            />
            <div style={{float:'right', fontSize: 25}}>TOTAL PRICE: {this.getCartTotal()} </div>
        </div>
        
    );
  }
}



export default App;
