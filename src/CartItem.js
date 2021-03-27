import React from 'react';

class CartItem extends React.Component{
    constructor (){
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 2,
            img: ''
        }
    }

    render(){
        const{ price,title,qty } = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={ { fontSize: 25 } }>{title}</div>
                    <div style={ { color:'#777'} }>Rs {price}</div>
                    <div style={ { color:'#777'} }>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        <img alt="increase" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/709/709484.svg?token=exp=1616860633~hmac=02c62a618066d3409a0a248a241becd5"/>
                        <img alt="decrease" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1616860656~hmac=9221ede0ffda9e3c48fdadd2a26d803e"/>
                        <img alt="delete" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1616860691~hmac=8889e39dbbe6e72253f676d3661f4c13"/>
                    </div>
                </div>
            </div>
        );
    }
}


const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}


export default CartItem