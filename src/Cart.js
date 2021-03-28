import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{

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


    render(){

        const { products } = this.state;

        return(
            <div className='cart'>
                {products.map((product) => {
                    return <CartItem 
                                product={ product } 
                                key={product.id} 
                                onIncreaseQuantity={this.handleIncreaseQuantity}
                                onDecreaseQuantity={this.handleDecreaseQuantity}
                            />
                })}
                {/* <CartItem qty={1} price={2999} title={'Watch'} img={''}/> */}
            </div>
        );
    }
}

export default Cart