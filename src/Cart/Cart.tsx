import { Product } from '../shared/types'
import {useCartContext} from '../CartContext/CartContext'
import { Link } from 'react-router-dom'
import { CartItem } from './CartItem'

interface CartProps {
	useCartHook?: () => {
		products: Product[]
		removeFromCart: (product: Product) => void
		totalPrice: () => number
	}
}

export const Cart = ({useCartHook = useCartContext}: CartProps) => {
	const {products, removeFromCart, totalPrice} = useCartHook()
	if (!products.length) {
		return (
			<>
				Your cart is empty.{' '}
				<Link to={'/'}>Back to main page.</Link>
			</>
		)
	}
	return (
		<section className="nes-container with-title is-centered">
			<h3 className="title">Cart Summary</h3>
			<div className="cart-items">
				{products.map((datum) => (
					<CartItem key={datum.name} product={datum} removeFromCart={removeFromCart} />
				))}
				<p>Total: {totalPrice()} Zm</p>
			</div>
			<div>
				<Link to={'/'}>
					<button className='nes-btn is-primary'>Go to checkout</button>
				</Link>
			</div>
		</section>
	)
}