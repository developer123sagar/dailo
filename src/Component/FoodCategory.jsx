import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { addProduct } from "../Redux/Slices/CartProductSlice";
import { useDispatch } from "react-redux";

const FoodCategory = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <>
      <section className=" grid md:grid-cols-2 grid-cols-1 mt-2 md:mt-12 h-[480px] md:h-[490px] overflow-hidden w-full">
        {data?.map((item, id) => (
          <div key={`${item}..${id}`}>
            <div className="bg-[#F9F1F0] md:p-6 px-2 py-2 flex  md:rounded-[20px] rounded-[10px] md:mx-10 lx:mx-10  my-3 gap-3 ">
              <div className=" bg-white rounded-[12px] overflow-hidden w-[100px] md:w-[120px]">
                <img
                  src={item.image}
                  className="md:h-28 h-20  w-[120px] bg-cover "
                  alt={item.name}
                />
              </div>

              <div className="flex  md:gap-5 gap-8 items-center ">
                <div className="flex  w-full  ">
                  <div className=" justify-between">
                    <h3 className="font-semibold text-black capitalize text-sm md:text-xl md:w-36 w-20 truncate">
                      {item.name}
                    </h3>
                    <p className=" text-black font-medium ">{item.category}</p>
                  </div>
                </div>
                <p className=" text-sm md:text-2xl flex font-normal">
                  <span className="text-[#328a85] md:text-2xl text-sm  font-bold ">
                    Rs.{" "}
                  </span>
                  <span>{item.price}</span>
                </p>

                <h1 className="cart " >
                  {" "}
                  <FaShoppingCart
                    className="hover:cursor-pointer"
                    onClick={() => dispatch(addProduct(item))}
                    size={20}
                  />
                </h1>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default FoodCategory;
