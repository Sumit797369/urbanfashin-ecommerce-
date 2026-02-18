import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();

      // ✅ Filter by Category
      productsCopy = productsCopy.filter(
        (item) => category === item.category
      );

      // ✅ Filter by SubCategory
      productsCopy = productsCopy.filter(
        (item) => subCategory === item.subCategory
      );

      // ✅ Limit to 5 Products
      setRelated(productsCopy.slice(0, 5));
    }
  }, [products, category, subCategory]);

  return (
    <div className="my-24">
      
      {/* Heading */}
      <div className="text-center text-3xl py-8">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
        <p className="text-gray-500 text-sm mt-2">
          You may also like these trending products
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-10">
        
        {related.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>

      {/* Empty Case */}
      {related.length === 0 && (
        <p className="text-center text-gray-400 mt-10">
          No related products found.
        </p>
      )}
    </div>
  );
};

export default RelatedProducts;
