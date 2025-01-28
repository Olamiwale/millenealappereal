import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions";

import Data from "../products.json";
import MoreProducts from "./MoreProducts";
import Accordion from "../components/Accordion";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setColor] = useState("")

  //fetching the products
  useEffect(() => {
    const product = Data.find((item) => item.id === id);
    if (product) {
      setProduct(product);
      setMainImage(product.images[0]);
    }
  }, [id]);

  if (!product) {
    return <p>Product not found</p>;
  }

  const dispatch = useDispatch();
  //const cart = useSelector((state) => state.cart.items); // Fetch current cart items from Redux state

  //add product to the cart
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    const cartItem = {
      ...product,
      size: selectedSize,
      quantity: quantity,
      color:color,
    };

    dispatch(addToCart(cartItem));

    alert("add product to cart?");
  };

  return (
    <div>
      <div className="p-8 mb-8 flex md:flex-row flex-col justify-between pt-[40px] gap-20">
        <div className="flex md:flex-row flex-col justify-evenly items-start md:w-1/2">
          <div className="text-2xl space-y-3 md:hidden mb-10">
            <h1 className="font-bold text-xl tracking-widest">
              {product.name}
            </h1>
            <p className="text-xl tracking-widest leading-3">
             
              ₦ {product.price}.00
            </p>
          </div>

          <div className="md:ml-4 items-center flex-col-reverse md:flex-row flex justify-center">
            <div className="flex md:flex-col gap-2 md:mr-5 w-fit justify-center mt-5 ">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className="w-32 h-32 md:h-[100px] md:w-40 lg:w-32 cursor-pointer"
                  onClick={() => setMainImage(image)}
                  alt={`Thumbnail ${index + 1}`}
                />
              ))}
            </div>

            <div>
              <img
                src={mainImage}
                className="lg:w-[500px] lg:h-[550px] md:w-[380px] w-full"
                alt={product.name}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-4 md:w-1/2 ">
          <div className="text-2xl space-y-3 md:flex flex-col hidden">
            <h1 className="md:text-3xl font-bold leading-[150%] tracking-[0.1em]">
              {product.name}
            </h1>

            <p className="tracking-widest"> ₦ {product.price}.00</p>
          </div>

          <div className="md:mt-0 flex flex-col md:justify-center  md:items-start uppercase leading-5 md:w-full">
            <div className="w-full">
              <p className="underline py-4 font-bold">Available in size</p>
            </div>

            <ul className="flex gap-3">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <li
                  key={size}
                  className={`cursor-pointer font-semibold uppercase border-[2px] border-black/40 py-2 text-center px-5 w-[80px] md:w-[40px] ${
                    selectedSize === size ? "bg-black text-white" : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </li>
              ))}
            </ul>

            {/*choosing color of the product */}
            <div className="w-full">
              <p className="underline mt-10 font-bold">Available in Colour:</p>
            </div>
            <ul className="flex gap-3 mt-5">
              {["Red", "Blue", "Black", "purple", "Yellow"].map((color) => (
                <li
                  key={color}
                  className={`cursor-pointer font-semibold uppercase border-[2px] border-black/40 py-2 text-center px-5 w-[80px] md:w-[40px] ${
                    selectedColor === color ? "bg-black text-white" : ""
                  }`}
                  onClick={() => setColor(color)}
                >
                  {color}
                </li>
              ))}
            </ul>

           { /*<div className="my-10 flex flex-col">
              <label className="py-4 text-sm font-bold underline">Colour</label>
              <input
              type="text"
              placeholder="Colour"
              value={color}
              className="p-2 border-2"
              onChange={(e) => setColor(e.target.value)} />
            </div>*/}

            <div className=" flex flex-col">
            <label className="py-4 text-sm font-bold underline">Quantity</label>
              <input
                type="number"
                className="border-2 p-3"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>


            <div className="mt-16 flex items-center mb-10">
              <a href="https://wa.me/+2347056881825?text=Hello%20there!%20I%20would%20like%20to%20provide%20my%20custom%20measurements%20for%20a%20cloth%20design.%20Please%20guide%20me%20on%20how%20to%20proceed" 
              
              className=" text-white text-sm tracking-widest font-semibold px-5 p-3 bg-black hover:bg-black/90 rounded-full">
                Click here  
                 </a>

                <p className="ml-2 font-semibold cursor-pointer text-sm tracking-widest ">for custom measurement </p> 
                  
                 
                 
             
            </div>

            

            <button
              className="mt-8 w-full hover:bg-black/90 transition-all duration-500 bg-black p-3 text-white font-bold uppercase"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>

          <div className="flex flex-col">
            <div className="bg-gray-100">
              <Accordion />
            </div>

           

            <div className="flex gap-2 justify-between mt-[40px] uppercase font-bold text-white">
              <a href="tel:+2347033821612" className="p-3 bg-yellow-500 hover:bg-yellow-600 rounded-md w-full flex items-center space-x-5 justify-center">
                <img src="/phoneImg.png" className="w-4" />
                <p className="tracking-widest font-medium text-sm">
                  Call to order
                  <span className="tracking-widest ml-3 font-bold">
                     +234 703 382 1612
                  </span>
                </p>
              </a>

            </div>
          </div>
        </div>
      </div>
      <MoreProducts />
    </div>
  );
}
