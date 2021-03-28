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
                img:'',
                id: 1
           },
           {
                price:14999,
                title:'Mobile',
                qty: 1,
                img:'',
                id: 2
           },
           {
                price:999,
                title:'Headphone',
                qty: 1,
                img:'',
                id: 3
           },
           {
                price:599,
                title:'Mobile Cover',
                qty: 1,
                img:'',
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
        </div>
    );
  }
}



export default App;
