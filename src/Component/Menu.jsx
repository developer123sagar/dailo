import React, { useEffect, useState } from "react";
import "../assets/css/display.css";
import FoodCategory from "./FoodCategory";
import { DessertData, DrinksData, LunchData } from "../Data";
import { Link } from "react-router-dom";
import { setFoodItems } from "../Redux/Slices/FoodDataSlice";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Menu() {
  const [activeTab, setActiveTab] = useState("Lunch");
  const [selectedTab, setSelectedTab] = useState("Lunch");

  const dispatch = useDispatch();

  useEffect(() => {
    switch (activeTab) {
      case "Dessert":
        dispatch(setFoodItems(DessertData));
        break;
      case "Lunch":
        dispatch(setFoodItems(LunchData));
        break;
      case "Drinks":
        dispatch(setFoodItems(DrinksData));
        break;
      default:
        dispatch(setFoodItems([]));
    }
  }, [activeTab, dispatch]);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    setActiveTab(tab);
  };

  const renderComponent = () => {
    switch (selectedTab) {
      case "Dessert":
        return <FoodCategory data={DessertData} />;
      case "Lunch":
        return <FoodCategory data={LunchData} />;
      case "Drinks":
        return <FoodCategory data={DrinksData} />;
      default:
        return null;
    }
  };

  return (
    <section className="section overflow-hidden" id="offers">
      <ToastContainer />
      <div className="container">
        <div className="row">
          <div className="col-lg-4 offset-lg-4 text-center">
            <div className="section-heading">
              <h6>DAILO Week</h6>
              <h2>This Week’s Special Meal Offers</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <ul className="flex justify-around items-center w-full px-3 md:px-10">
            {["Lunch", "Drinks", "Dessert"].map((item, id) => (
              <li
                onClick={() => handleTabClick(item)}
                key={`${item}.${id}`}
                className={`flex items-center mx-1 md:rounded-full rounded-md justify-center cursor-pointer text-white w-32 h-12 sm:font-semibold  md:font-bold  bg-[#328a85] hover:bg-green-700 transition-all duration-800 ${
                  activeTab === item ? "bg-green-700" : null
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
          <div>{renderComponent()}</div>
          <Link
            to={`/food/${selectedTab}`}
            className="flex justify-center w-full"
          >
            <button className="bg-green-500 w-[180px] px-5 py-3 font-bold hover:bg-[#328a85] transition-all text-white rounded">
              See more
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
