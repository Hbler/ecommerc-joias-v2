import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addProductThunk } from "../../store/modules/cart/middleware";

import { HomeCardNode } from "./style";

export const HomeCard = ({
  product,
  filter,
  tags,
  setShowModal,
  setCurrentProduct,
}) => {
  const dispatch = useDispatch();

  return (
    <HomeCardNode>
      <figure>
        <img
          src={product.imgOne}
          alt={product.name}
          onClick={() => {
            setCurrentProduct(product);
            setShowModal(true);
          }}
        />
        <div>
          <p
            onClick={() => {
              filter(product.type);
            }}
          >
            {product.type.toUpperCase()}
          </p>
          <small
            onClick={() => {
              tags(product.tags[0]);
            }}
          >
            {product.tags[0]}
          </small>
          <small
            onClick={() => {
              tags(product.tags[1]);
            }}
          >
            {product.tags[1]}
          </small>
          <button
            onClick={() => {
              dispatch(addProductThunk(product.id));
            }}
          >
            <MdAddShoppingCart />
          </button>
        </div>
      </figure>
    </HomeCardNode>
  );
};
