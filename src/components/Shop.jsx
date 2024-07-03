import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../redux/product/productSlice";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const getProducts = async () => {
    const res = await fetch('')
    const data = res.json()
    setProducts(data)
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <section className="shop">
      {products.map((product) => (
        <>
        <article className="card" key={product.id}>
          <img src={product.image} alt="" />
          <div className="details-div">
            <div className="title-price">
              <p>{product.title}</p>
              <p>{product.price}</p>
            </div>
            <button
              onClick={() =>
                dispatch(
                  addProductToCart({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                  })
                )
              }
            >
              Add to cart
            </button>
          </div>
        </article>
        </>
      ))}
    </section>
  );
};

export default Shop;