import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'

import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      return (
        <ul className="cart-list">
          {cartList.length > 0 ? (
            cartList.map(eachCartItem => (
              eachCartItem && eachCartItem.id ? ( // Perform a null/undefined and id check
                <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
              ) : <div></div>
            ))
          ) : null}
        </ul>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
