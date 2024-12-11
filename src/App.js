import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Product from "./componetes/Product";
import { addTocart, decrease, increase, remove } from "./componetes/ProductSlice";

function App() {

  const dispatch=useDispatch()
  const cartItem=useSelector(state=>state.cart.items)
  console.log(cartItem)
  const products = [
    {
      id: 1,
      name: "Watch",
      price: 100,
    },
    {
      id: 2,
      name: "Watch2",
      price: 200,
    },
    {
      id: 1,
      name: "Watch3",
      price: 300,
    },
  ];
  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <div>
        {
          products.map((product)=>{
            return(
              <div key={product.id}>
                <h1>{product.name}</h1>
                <p>{product.price}</p>
                <button onClick={()=>dispatch(addTocart(product))}>Add</button>
              </div>
            )
          })
        }
      </div>
      <h2>Cart</h2>
      <div>
        {
          cartItem.length==0 ? (<p>Cart Empty</p>):(
            cartItem.map((item)=>{
              return(
               <div>
                 <h2>{item.name}</h2>
                 <p>{item.price}</p>
                 <p>{item.quantity}</p>
                 <button onClick={()=>dispatch(increase(item.id))}>+</button>
                 <button onClick={()=>dispatch(decrease(item.id))}>-</button>
                 <button onClick={()=>dispatch(remove(item.id))}>Remove</button>

                </div>

              )
            })
          )
        }

        <h3>Total : {cartItem.reduce((total,item)=>total+item.price*item.quantity,0)}</h3>

      </div>
     
    </div>
  );
}

export default App;
