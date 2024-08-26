import React from 'react';
import { Product } from '../shared/types';

export interface CartItemProps {
	product: Product
	removeFromCart: (product: Product) => void
}

export const CartItem = ({product, removeFromCart}: CartItemProps) => {
	return (
		<div className='cart-item'>
			<img 
				src={product.image} 
				alt={product.name} 
				style={{imageRendering: 'pixelated', height: 64, width: 64}} />
				<p>{product.name}</p>
				<p>{product.price} Zm</p>
				<button onClick={() => removeFromCart(product)}>Remove</button>
		</div>
	)
}