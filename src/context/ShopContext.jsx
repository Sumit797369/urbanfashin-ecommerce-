import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import Product from "../pages/Product";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    
  const currency = "Rs";
  const delivery_fee = 40;

  const [search,setSearch]=useState('');
  const [showSearch,setShowSearch]=useState(false);
// ✅ Load Cart From LocalStorage
  const [cartItems, setCartItems] = useState(() => {
  const savedCart = localStorage.getItem("cartItems");
  return savedCart ? JSON.parse(savedCart) : {};
});

// ✅ Save Cart To LocalStorage on Every Update
useEffect(() => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}, [cartItems]);


  // ✅ ADDED: Add To Cart Function
  const addToCart = (id, qty = 1) => {
    setCartItems((prev) => {
      if(!qty){
        toast.error('Select Product Size');
        return
      }
      let cartData = { ...prev };

      if (cartData[id]) {
        cartData[id] += qty;
      } else {
        cartData[id] = qty;
      }

      return cartData;
    });
  };

  // ✅ ADDED: Update Quantity Function
  const updateQuantity = (id, qty) => {
    setCartItems((prev) => {
      let cartData = { ...prev };

      if (qty <= 0) {
        delete cartData[id];
      } else {
        cartData[id] = qty;
      }

      return cartData;
    });
  };


  // ✅ ADDED: Remove From Cart Function
  const removeFromCart = (id) => {
    setCartItems((prev) => {
      let cartData = { ...prev };
      delete cartData[id];
      return cartData;
    });
  };

  // ✅ ADDED: Cart Count Function
  const getCartCount = () => {
    let total = 0;
    for (let item in cartItems) {
      total += cartItems[item];
    }
    return total;
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,setSearch,showSearch,setShowSearch,

    // ✅ ADDED VALUES
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    getCartCount
  };
  

  
// Extra Option (Logout पर cart clear)

// अगर future में logout पर clear करना हो:

// localStorage.removeItem("cartItems");
// setCartItems({});


  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
