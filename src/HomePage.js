import AddToCart from './AddToCart';
import Header from "./Header";
import Content from "./Content";
import AboutUs from "./AboutUs";
import AllFood from './AllFood';
import { useState } from "react";

const initialAddToCart = {
  count: 0,
  dishes: []
};

export default function HomePage() {
  const [showCart, setShowCart] = useState(false);
  const [alldish] = useState(AllFood);
  const [addtocart, setAddToCart] = useState(initialAddToCart);
  const [cuisineType, setCuisineType] = useState(null);

  function handleCartDisplay() {
    setShowCart(!showCart);
  }

  function handleAllDish(dishObj, op) {
    if (!(op === 0 && (dishObj.count === 1))) {
      let count = ((op === 1) ? (dishObj.count + 1) : (dishObj.count - 1))
      let updatedDishes = addtocart.dishes.map((dish) => {
        if (dish.id === dishObj.id) {
          return {
            ...dish,
            count: count
          }
        } else {
          return dish;
        }
      });
      setAddToCart(prevAddToCart => ({
        ...prevAddToCart,
        dishes: updatedDishes
      }));
    } else {
      // Removing dish from the cart and also reduce the count by -1 in addtoCart
      let mainCount = addtocart.count - 1;
      let updatedDishes = addtocart.dishes.filter(dish => dish.id !== dishObj.id);
      setAddToCart({
        count: mainCount,
        dishes: updatedDishes
  
      });
    }
  }

  function handleCartCount(cuisineObj) {
    let cartArr = addtocart.dishes;
    let bool = cartArr.some(arr => arr.id === cuisineObj.id);
    if (!bool) {
      setAddToCart(prevaddtocart => ({
        count: prevaddtocart.count + 1,
        dishes: [
          ...prevaddtocart.dishes,
          cuisineObj
        ]
      }));
    }
  }

  function handleCuisineName(type) {
    setCuisineType(type);
  }

  return (
    <>
      <Header
        cartDisplay={handleCartDisplay}
        alldish={alldish}
        myFunc={handleCuisineName}
        cartCount={addtocart.count}
      />
      <Content
        alldish={alldish}
        cuisineTypes={cuisineType}
        cartCount={handleCartCount}

      />
      <AboutUs />
      {showCart && <AddToCart
        cartDisplay={handleCartDisplay}
        addCount={handleAllDish}
        selectedDish={addtocart}
      />}
    </>
  );
}