import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  MdClose,
  MdDarkMode,
  MdFilterListAlt,
  MdLightMode,
  MdShoppingCart,
} from "react-icons/md";

import { HomeCard } from "../../components/Cards";
import ProductModal from "../../components/Modal";
import { changeTheme } from "../../store/modules/theme/actions";
import { Logo } from "../../styles/global";
import {
  CartBtn,
  CartBtnNav,
  Display,
  Filters,
  MobFilterBtn,
  MobileFilters,
  Nav,
  Search,
} from "./style";

export default function Home() {
  const { products, cart, theme } = useSelector((store) => store);

  const [toShow, setToShow] = useState([...products]);
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const cartQtty = Object.values(cart).reduce((a, b) => a + b, 0);

  const filters = [
    "todos",
    ...Array.from(new Set(products.map((obj) => obj.type))).sort(
      (a, b) => a.length - b.length
    ),
  ];

  const dispatch = useDispatch();
  const history = useHistory();

  const changeMode = () => {
    dispatch(changeTheme(!theme));
  };

  const handleFilter = (str) => {
    setSearch("");
    if (str === "todos") setToShow([...products]);
    else setToShow([...products.filter((obj) => obj.type === str)]);
  };

  const handleTags = (str) => {
    setSearch("");
    setToShow([...products.filter((obj) => obj.tags.includes(str))]);
  };

  const handleSearch = () => {
    if (search === "" || search === " ") setToShow([...products]);
    else {
      const conditioned = search.trim().toLowerCase();
      setToShow([
        ...products.filter(
          (obj) =>
            obj.name.toLowerCase().includes(conditioned) ||
            obj.info.toLowerCase().includes(conditioned) ||
            obj.type.toLowerCase().includes(conditioned) ||
            String(obj.price).includes(conditioned)
        ),
      ]);
    }
  };

  return (
    <>
      {showModal && (
        <ProductModal
          currentProduct={currentProduct}
          setShowModal={setShowModal}
        />
      )}
      <Nav>
        <div className="container">
          <Logo>B w l g a r i</Logo>
          <div className="nav__btns">
            <CartBtnNav
              disabled={cartQtty === 0}
              qtty={cartQtty}
              onClick={() => {
                history.push("./cart");
              }}
            >
              <MdShoppingCart />
            </CartBtnNav>
            <button className="nav__btns--theme" onClick={changeMode}>
              {theme ? <MdDarkMode /> : <MdLightMode />}
            </button>
          </div>
          <div className="nav__filters">
            <Filters>
              {filters?.map((str) => (
                <li
                  key={str}
                  onClick={() => {
                    handleFilter(str);
                  }}
                >
                  {str.slice(0, 1).toUpperCase() + str.slice(1)}
                </li>
              ))}
            </Filters>
            <Search
              type="text"
              value={search}
              placeholder="Digite para pesquisar"
              onChange={(e) => {
                setSearch(e.target.value);
                handleSearch();
              }}
            />
            <MobFilterBtn
              onClick={() => {
                setShowFilters(!showFilters);
              }}
            >
              {showFilters ? <MdClose /> : <MdFilterListAlt />}
            </MobFilterBtn>
            {showFilters && (
              <MobileFilters>
                {filters?.map((str) => (
                  <li
                    key={str}
                    onClick={() => {
                      handleFilter(str);
                    }}
                  >
                    {str.slice(0, 1).toUpperCase() + str.slice(1)}
                  </li>
                ))}
              </MobileFilters>
            )}
          </div>
          <CartBtn
            qtty={cartQtty}
            disabled={cartQtty === 0}
            onClick={() => {
              history.push("./cart");
            }}
          >
            <MdShoppingCart /> Carrinho
          </CartBtn>
        </div>
      </Nav>
      <div className="container">
        <Display>
          {!!toShow.length ? (
            toShow?.map((product) => (
              <HomeCard
                setCurrentProduct={setCurrentProduct}
                setShowModal={setShowModal}
                product={product}
                filter={handleFilter}
                tags={handleTags}
                key={product.id}
              />
            ))
          ) : (
            <h2>Sem resultados para a pesquisa</h2>
          )}
        </Display>
      </div>
    </>
  );
}
