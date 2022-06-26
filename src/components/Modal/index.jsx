import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { MdClose } from "react-icons/md";

import { addProductThunk } from "../../store/modules/cart/middleware";
import { Btn } from "../../styles/global";
import { ModalBG, Product } from "./style";

export default function ProductModal({ currentProduct, setShowModal }) {
  const modal = useRef();
  const dispatch = useDispatch();
  const history = useHistory();

  const { cart } = useSelector((state) => state);
  const cartProducts = Object.keys(cart).map((str) => +str);

  const [currentPhoto, setCurrentPhoto] = useState(currentProduct.imgTwo);

  useEffect(() => {
    function handleOutClick(event) {
      const target = event.target;

      if (!modal.current?.contains(target)) {
        setShowModal(false);
      }
    }

    document.addEventListener("mousedown", handleOutClick);

    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, [setShowModal]);

  return (
    <ModalBG>
      <Product ref={modal}>
        <button
          onClick={() => {
            setShowModal(false);
          }}
        >
          <MdClose />
        </button>
        <div>
          <figure>
            <img src={currentPhoto} alt={currentProduct.name} />
          </figure>
          <div className="gallery">
            <figure
              className={
                currentPhoto === currentProduct.imgOne ? "active" : "normal"
              }
              onClick={() => {
                setCurrentPhoto(currentProduct.imgOne);
              }}
            >
              <img src={currentProduct.imgOne} alt={currentProduct.name} />
            </figure>
            <figure
              className={currentPhoto === currentProduct.imgTwo && "active"}
              onClick={() => {
                setCurrentPhoto(currentProduct.imgTwo);
              }}
            >
              <img src={currentProduct.imgTwo} alt={currentProduct.name} />
            </figure>
          </div>
        </div>
        <div>
          <h2>{currentProduct.name}</h2>
          <p>{currentProduct.info}</p>
          <div className="tags">
            <small>{currentProduct.type}</small>
            <small>{currentProduct.tags[0]}</small>
            <small>{currentProduct.tags[1]}</small>
          </div>
          {cartProducts.includes(currentProduct.id) ? (
            <Btn
              onClick={() => {
                history.push("/cart");
              }}
            >
              Ir para o Carrinho
            </Btn>
          ) : (
            <Btn
              onClick={() => {
                dispatch(addProductThunk(currentProduct.id));
              }}
            >
              Adicionar ao Carrinho
            </Btn>
          )}
        </div>
      </Product>
    </ModalBG>
  );
}
