import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, removeFromFavorite } from '@features/favorite';

function FavoriteButton({ id }) {
  const { idList } = useSelector((state) => state.favorite);
  const dispatch = useDispatch();
  const normalizedId = Number(id);
  const isFavorite = idList.includes(normalizedId);

  const handleClick = (e) => {
    e.stopPropagation();

    if (isFavorite) dispatch(removeFromFavorite({ id }));
    else dispatch(addToFavorite({ id }));
  };

  return (
    <button onClick={handleClick} className="z-10 text-lg">
      {isFavorite ? '❤️' : '🤍'}
    </button>
  );
}

export default FavoriteButton;
