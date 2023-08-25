import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { TbPlus } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { removeSelectedProd } from "../Redux/Slices/CartItemSelectionSlice";
import DeliveryForm from "../Component/DeliveryForm";

const Checkout = () => {
  const { selectedCartItems } = useSelector((state) => state.cartItemSelection);

  const totalPayment = selectedCartItems.reduce(
    (acc, item) => acc + item.total,
    0
  );
  const CheckoutItems = selectedCartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const deliveryFee = 100;

  const dispatch = useDispatch();

  return (
    <>
      <ToastContainer />
      <div className="w-full text-white mt-2 flex justify-between flex-wrap px-10">
        <div className="basis-full lg:basis-[55%]">
          <div className="bg-slate-500 font-primary rounded py-6 px-5 shadow-xl flex items-center justify-center gap-2 hover:cursor-pointer mb-10">
            <TbPlus /> <DeliveryForm />
          </div>
          {selectedCartItems.map((item, id) => (
            <div
              key={item + id}
              className="bg-slate-500 shadow-xl mb-2 flex items-center justify-between rounded p-3"
            >
              <div className="flex items-center gap-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-28 w-28 rounded object-cover"
                />
                <div>
                  <p className=" font-primary text-white text-lg">
                    {item.name}
                  </p>
                  <p className=" text-white font-primary text-lg ">
                    Category: {item.category}
                  </p>
                  <p className="font-primary text-white text-lg">
                    Quantity: {item.quantity}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 flex-col">
                <AiFillDelete
                  onClick={() => dispatch(removeSelectedProd(item.id))}
                  className="cursor-pointer hover:text-red-500"
                  size={20}
                />
                <p className="text-lg text-white font-primary">
                  Total Rs. {item.total}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="basis-full mt-10 lg:mt-0 lg:basis-[35%] h-[420px] bg-slate-500 shadow-xl rounded overflow-hidden">
          <p className="text-4xl text-white py-4 border-b-[1px] px-5 font-primary border-black">
            Order Summary
          </p>
          <div className="flex justify-between px-5 ">
            <p className="font-primary text-xl text-white">Total items</p>
            <p className="font-primary text-xl text-white">
              {CheckoutItems} items
            </p>
          </div>
          <div className="flex justify-between my-2 px-5">
            <p className="font-primary text-xl text-white">Delivery Fee</p>
            <p className="font-primary text-xl text-white">Rs. {deliveryFee}</p>
          </div>
          <div className="flex px-5 justify-between">
            <p className="font-primary text-xl text-white">Total Payment</p>
            <p className="font-primary text-xl text-white">
              Rs. {totalPayment + deliveryFee}
            </p>
          </div>
          <p className="font-bold pr-5 font-primary text-white text-right">
            All tax included
          </p>
          <p className="text-white font-primary mt-2 px-5">
            Choose a payment method to place your order
          </p>
          {/* <div className="flex justify-between mt-2"></div> */}
          <div className="flex justify-center w-full">
            <button className="w-fit mt-5 cursor-pointer bg-[#328a85] rounded-md px-5 py-3 font-primary mx-auto">
              Place your order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
