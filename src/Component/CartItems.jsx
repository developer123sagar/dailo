import React from "react";
import { PiHandbagSimpleLight } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TbMinus, TbPlus } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import {
  decreaseQtySelectItem,
  deselectAllCartItems,
  deselectCartItem,
  increaseQtySelectItem,
  selectAllCartItems,
  selectCartItem,
} from "../Redux/Slices/CartItemSelectionSlice";
import {
  decreaseQty,
  increaseQty,
  removeProduct,
} from "../Redux/Slices/CartProductSlice";

const CartItems = ({ onClose }) => {
  // cartproduct slice states
  const dispatch = useDispatch();
  const { cartDatas: data } = useSelector((state) => state.cart);

  // cartitemselection slice state
  const { selectAll, selectedCartItems } = useSelector(
    (state) => state.cartItemSelection
  );

  const cartItemNum = data.reduce((acc, item) => acc + item.quantity, 0);

  // selected items total price
  const selectedItemNum = selectedCartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const slectedItemPrice = selectedCartItems.reduce(
    (acc, item) => acc + item.total,
    0
  );

  return (
    <div className="h-full text-black" role="presentation">
      <div className="w-[90%] md:w-[500px] bg-gray-100 fixed top-0 right-0 p-3 flex justify-between items-center border-b-[1px] border-gray-800">
        <div className="flex items-center gap-4">
          <PiHandbagSimpleLight size={40} />{" "}
          <p className="text-xl font-bold font-primary">
            {data.length > 0 ? <>{cartItemNum} items</> : <>Cart</>}
          </p>
        </div>
        <RxCross1
          onClick={onClose}
          className="hover:cursor-pointer"
          size={25}
        />
      </div>
      {data.length > 0 ? (
        <div className="mt-[5rem] pb-[45rem] h-fit ">
          <label className="bg-[#F9F1F0] py-3 cursor-pointer font-primary flex items-center gap-2 font-bold px-6  w-full">
            <input
              type="checkbox"
              checked={selectedCartItems.length === data.length}
              onChange={() => {
                if (selectAll) {
                  dispatch(deselectAllCartItems());
                } else {
                  dispatch(selectAllCartItems(data));
                }
              }}
            />{" "}
            Select All
          </label>
          {data.map((item, id) => (
            <div key={item.name + id}>
              <div className="bg-[#F9F1F0] lg:p-6  md:p-6 px-2 py-2 flex gap-4 md:rounded-[20px] rounded-[10px] m-2">
                <input
                  type="checkbox"
                  className="cursor-pointer"
                  checked={selectedCartItems.some((p) => p.id === item.id)}
                  onChange={() => {
                    if (selectedCartItems.some((p) => p.id === item.id)) {
                      dispatch(deselectCartItem(item.id));
                    } else {
                      dispatch(selectCartItem(item));
                    }
                  }}
                />
                <div className=" bg-white rounded-[12px] overflow-hidden">
                  <img
                    src={item.image}
                    className="h-24 w-40 object-cover "
                    alt={item.name}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-black capitalize text-sm font-primary">
                      {item.name}
                    </h3>
                    <div
                      className="cursor-pointer text-black hover:text-[#A50F06]"
                      onClick={() => dispatch(removeProduct(item.id))}
                    >
                      <AiFillDelete size={20} />
                    </div>
                  </div>
                  <p className=" text-black font-medium ">{item.category}</p>
                  <p className=" font-bold text-sm">
                    <span className="text-[#A50F06] ">Rs. </span>
                    <span>{item.price}</span>
                  </p>
                  <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                      <button
                        onClick={() => {
                          dispatch(decreaseQty(item.id));
                          dispatch(decreaseQtySelectItem(item.id));
                        }}
                        className="bg-slate-300 py-1 mt-2 rounded hover:bg-slate-400 p-1 "
                      >
                        <TbMinus />
                      </button>
                      <p className="font-semibold p-1">{item.quantity}</p>
                      <button
                        onClick={() => {
                          dispatch(increaseQty(item.id));
                          dispatch(increaseQtySelectItem(item.id));
                        }}
                        className="bg-slate-300 py-1 mt-2 rounded hover:bg-slate-400 p-1 "
                      >
                        <TbPlus />
                      </button>
                    </div>
                    <div className="flex items-center gap-2 font-bold text-slate-700">
                      <p>Total :</p>
                      <p>
                        <span className="text-[#A50F06]">Rs.</span>
                        {item.total}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="fixed bottom-0 right-0 bg-[#F9F1F0] z-40 w-[90%] md:w-[500px] flex flex-col md:gap-4 gap-1 overflow-hidden">
            <p className=" font-primary font-semibold w-fit mx-auto  text-xl mt-3 md:text-2xl">
              Order Summary
            </p>
            <div>
              <p className="flex justify-between font-primary font-semibold text-lg  mx-10 py-2">
                Shipping<span className="font-primary">Rs. 100</span>
              </p>
            </div>
            <div>
              <p className="flex justify-between font-primary  font-semibold mx-10 text-lg">
                Sub Total{" "}
                <span className="font-primary">
                  Rs.{slectedItemPrice + 100}
                </span>
              </p>
            </div>
            <div className="bg-[#328a85] md:text-2xl text-xl hover:no-underline  mt-3 py-3 rounded-[10px] flex items-center justify-around font-bold">
              <div className="text-white w-[200px]">
                <p className="font-bold text-white font-primary">
                  Total :{" "}
                  {selectedItemNum ? <>({selectedItemNum} items)</> : null}
                </p>{" "}
                <h1 className="my-3 font-primary text-[16px]">
                  Rs : {slectedItemPrice + 100}
                </h1>
              </div>
              <div>
                {selectedCartItems.length > 0 ? (
                  <Link to="/checkout" className="hover:no-underline">
                    {" "}
                    <p className=" bg-teal-500 text-white font-primary p-3 rounded-md text-[14px] ">
                      Proceed to Checkout
                    </p>
                  </Link>
                ) : (
                  <p className="hover:cursor-pointer bg-teal-500 text-white font-primary p-3 rounded-md text-[14px] ">
                    Proceed to Checkout
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="w-full h-full flex justify-center flex-col lg:gap-4 items-center">
            <p className="text-2xl font-bold font-primary ">
              Your Cart is empty
            </p>
            <img
              className="w-[400px] h-[350px] object-contain"
              src="https://cdn.discordapp.com/attachments/1123144974683361401/1125350006325510174/empty.gif"
              alt="shop now"
            />
            <div>
              <a href="#offers" className="hover:no-underline">
                <button
                  onClick={onClose}
                  className="text-black hover:text-white transition-all bg-[#328a85] font-primary px-5 py-3 rounded"
                >
                  Go to Shop
                </button>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItems;
