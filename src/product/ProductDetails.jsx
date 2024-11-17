import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";

import Data from "../products.json";
import MoreProducts from "./MoreProducts";
import Accordion from "../components/Accordion";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");

  //const item = Data.find((item) => item.id === id);

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

  return (
    <div>
      <div className="p-8 mb-8 flex md:flex-row flex-col justify-between pt-[40px] gap-20">
        <div className="flex md:flex-row flex-col justify-evenly items-start md:w-1/2">
          <div className="text-2xl space-y-3 md:hidden mb-10">
            <h1 className="font-bold text-xl tracking-[0.5px]">
              {product.name}
            </h1>
            <p className="text-md leading-3"> NGN {product.price}</p>
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

            <p> NGN {product.price}.00</p>
          </div>

          <div className="md:mt-0 flex flex-col md:justify-center  md:items-start uppercase leading-5 md:w-full">
            <div className="w-full">
              <p className="underline py-4 font-bold">Available in size</p>
            </div>

            <ul className="flex font-thin w-fit gap-4 lg:gap-5">
              <li className="border-[2px] border-black/40 py-2 text-center w-[40px] font-medium text-[15px]">
                s
              </li>
              <li className="border-[2px] border-black/40 py-2 text-center w-[40px] font-medium text-[15px]">
                m
              </li>
              <li className="border-[2px] border-black/40 py-2 text-center w-[40px] font-medium text-[15px]">
                l
              </li>
              <li className="border-[2px] border-black/40 py-2 text-center w-[40px] font-medium text-[15px]">
                xl
              </li>
              <li className="border-[2px] border-black/40 py-2 text-center w-[40px] font-medium text-[15px]">
                xxl
              </li>
            </ul>
            <button
              className="mt-10 w-full bg-black p-3 text-white font-bold uppercase"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to cart
            </button>
          </div>

          <div className="flex flex-col">
            <div className="bg-gray-100 ">
              <Accordion />
            </div>

            <div className="flex gap-2 justify-between mt-[40px] uppercase font-bold text-white">
              <div className="p-3 bg-yellow-500 hover:bg-yellow-400 rounded-md w-full flex items-center space-x-5 justify-center">
                <img src="/phoneImg.png" className="w-8" />
                <p className="tracking-wider font-medium text-[14px]">
                  Call to order{" "}
                  <span className="tracking-widest font-bold">
                    {" "}
                    +234 703 382 1612{" "}
                  </span>
                </p>
              </div>
              {/*<div className="bg-green-600 hover:bg-green-500 rounded-md transition duration-500 cursor-pointer w-full flex justify-center items-center space-x-5">
                <a href="https://wa.me/+2347056881825?text=Hello%20there!">
                  Whatsapp
                </a>
                <img src="/whatsapp.png" className="w-8" />
              </div>*/}
            </div>
          </div>
        </div>
      </div>
      <MoreProducts />
    </div>
  );
}
