import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cart = useSelector((state) => state.products.cart)
    console.log(cart);

  return (
    <section className='cart-component'>
        {
            cart.map((p)=>(
                <article className='cart-card' key={p.id}>
                    <div>
                        <img src={p.image} alt="" />
                        <button>remove</button>
                    </div>
                    <div>
                        <p>{p.title}</p>
                        <div className='button-in-cart'>
                            <button> - </button>
                            <span>{p.quantity}</span>
                            <button> + </button>
                        </div>
                        <p>${p.price}</p>
                    </div>
                </article>
            ))
        }
    </section>
  )
}

export default Cart