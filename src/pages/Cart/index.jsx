import { useState } from "react";
import { IoMdTrash } from "react-icons/io";
import { MdClose, MdDarkMode, MdHome, MdLightMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

import {
  changeQuantityThunk,
  removeProductThunk,
} from "../../store/modules/cart/middleware";
import { changeTheme } from "../../store/modules/theme/actions";
import { Btn, Logo } from "../../styles/global";
import { Card, Display, Header, Main, Summary } from "./style";

export default function Cart() {
  const { products, cart, theme } = useSelector((store) => store);
  const [showSummary, setShowSummary] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const changeMode = () => {
    dispatch(changeTheme(!theme));
  };

  const cartQtty = Object.values(cart).reduce((a, b) => a + b, 0);
  const cartProducts = products.filter((obj) =>
    Object.keys(cart).includes(String(obj.id))
  );
  const cartTotal = cartProducts.reduce((total, obj) => {
    return (total += obj.price * cart[obj.id]);
  }, 0);

  if (cartQtty === 0) return <Redirect to="/" />;

  return (
    <>
      <Header>
        <div className="container">
          <Logo>B w l g a r i</Logo>
          <div className="header__btns">
            <button>
              <MdHome
                className="header__btn--home"
                onClick={() => {
                  history.push("/");
                }}
              />
            </button>
            <button className="header__btn--theme" onClick={changeMode}>
              {theme ? <MdDarkMode /> : <MdLightMode />}
            </button>
          </div>
          <Btn
            onClick={() => {
              history.push("/");
            }}
          >
            Home
          </Btn>
        </div>
      </Header>
      <Main>
        <Display>
          <div className="container">
            {cartProducts?.map((product) => (
              <Card key={product.id}>
                <figure>
                  <img src={product.imgTwo} alt={product.name} />
                </figure>
                <div>
                  <h2>{product.name}</h2>
                  <div>
                    <small>Qtd.:</small>
                    <button
                      onClick={() => {
                        dispatch(
                          changeQuantityThunk(product.id, +cart[product.id] - 1)
                        );
                      }}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={cart[product.id]}
                      onChange={(e) => {
                        dispatch(
                          changeQuantityThunk(product.id, +e.target.value)
                        );
                      }}
                    />
                    <button
                      onClick={() => {
                        dispatch(
                          changeQuantityThunk(product.id, +cart[product.id] + 1)
                        );
                      }}
                    >
                      +
                    </button>
                  </div>
                  <p>{product.value}</p>
                  <button
                    onClick={() => {
                      dispatch(removeProductThunk(product.id));
                    }}
                  >
                    <IoMdTrash />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </Display>
        <Summary>
          {showSummary ? (
            <>
              <button
                onClick={() => {
                  setShowSummary(false);
                }}
              >
                <MdClose />
              </button>
              <div className="container">
                <h3>Resumo Carrinho:</h3>
                <p>
                  Produtos: <span>{cartQtty}</span>
                </p>
                <p>
                  Total:{" "}
                  <span>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(cartTotal)}
                  </span>
                </p>
                <Btn>Finalizar Pedido</Btn>
              </div>
            </>
          ) : (
            <div className="container">
              <Btn
                onClick={() => {
                  setShowSummary(true);
                }}
              >
                Visualizar Total
              </Btn>
            </div>
          )}
        </Summary>
      </Main>
    </>
  );
}
