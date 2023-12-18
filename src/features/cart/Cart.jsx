import { useDispatch, useSelector } from 'react-redux';

import { getUser } from '../user/userSlice';
import { clearCart, getCart } from './cartSlice';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';

function Cart() {
  const dispatch = useDispatch();
  const userName = useSelector(getUser);
  const cart = useSelector(getCart);

  function handleClearCart() {
    dispatch(clearCart());
  }

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to={'/menu'}>
        <span className="text-xl">&larr;</span> Back to menu
      </LinkButton>
      <h2 className="mt-7 text-xl font-semibold">Your cart, {userName}</h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((c) => (
          <CartItem item={c} key={c.pizzaId} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={handleClearCart}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
