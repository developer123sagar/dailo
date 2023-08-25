import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SeeMore = () => {
  const { foodcategory } = useParams();
  const [foodType, setFoodType] = useState("");
  const [filterData, setFilterData] = useState([]);
  const { FoodItems: data } = useSelector((state) => state.foodData);

  // handling food type change (veg, non-veg, all)
  const handleFoodTypeChange = (selectedFoodType) => {
    setFoodType(selectedFoodType);
  };

  // filtering data on the basis of veg and non veg item
  useEffect(() => {
    const filter = data.filter(
      (item) => item.type === "" || item.type === foodType || foodType === ""
    );
    setFilterData(filter);
  }, [foodType, data]);

  const itemsToRender = foodType === "" ? data : filterData;

  return (
    <>
      <div className="flex items-center justify-between py-4 fixed top-0 left-0 z-10 px-5 w-full foodcategorybg">
        <p className="text-2xl font-bold">{foodcategory}</p>
        <div className="flex gap-x-5 items-center">
          <label className="hover:cursor-pointer" htmlFor="all">
            <input
              checked={foodType === ""}
              type="radio"
              name="foodType"
              id="all"
              onChange={() => handleFoodTypeChange("")}
            />
            &nbsp;All
          </label>
          <label className="hover:cursor-pointer" htmlFor="veg">
            <input
              checked={foodType === "veg"}
              type="radio"
              name="foodType"
              id="veg"
              onChange={() => handleFoodTypeChange("veg")}
            />
            &nbsp;Veg
          </label>
          <label className="hover:cursor-pointer" htmlFor="non-veg">
            <input
              checked={foodType === "non-veg"}
              type="radio"
              name="foodType"
              id="non-veg"
              onChange={() => handleFoodTypeChange("non-veg")}
            />
            &nbsp;Non-veg
          </label>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-28 w-full">
        {itemsToRender.map((item, id) => (
          <div key={`${item}.${id}`}>
            <div className="bg-[#F9F1F0] md:p-6 px-2 py-2 flex  md:rounded-[20px] rounded-[10px] md:mx-10 lg:mx-10 mx-3 my-3 gap-3 ">
              <div className="p-2 bg-white rounded-[12px] overflow-hidden w-[150px]">
                <img
                  src={item.image}
                  className="h-32 w-[150px] bg-cover "
                  alt={item.name}
                />
              </div>

              <div className="flex gap-12 items-center ">
                <div className="flex  w-full  ">
                  <div className=" justify-between">
                    <h3 className="font-semibold text-black capitalize text-2xl md:text-xl w-36 truncate">
                      {item.name}
                    </h3>
                    <p className=" text-black font-medium ">{item.category}</p>
                  </div>
                </div>
                <p className=" text-2xl flex font-normal">
                  <span className="text-[#328a85] text-2xl  font-bold ">
                    Rs.{" "}
                  </span>
                  <span>{item.price}</span>
                </p>

                <h1 className="cart">
                  {" "}
                  <FaShoppingCart size={30} />
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SeeMore;
