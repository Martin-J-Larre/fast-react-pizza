import Button from './Button';
import { deleteItem } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';

function DeleteItemBtn({ pizzaId }) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteItem(pizzaId));
  }
  return (
    <Button type="small" onClick={handleDelete}>
      Delete
    </Button>
  );
}

export default DeleteItemBtn;
