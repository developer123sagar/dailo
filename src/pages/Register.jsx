import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import CarouselUI from "../Component/CarouselUI";
import slide1 from "../assets/images/slide-01.jpg";
import slide2 from "../assets/images/slide-02.jpg";
import slide3 from "../assets/images/slide-03.jpg";
import { Link } from "react-router-dom";

const Register = () => {
  const [isShowPass1, setIsShowPass1] = useState(false);
  const [isShowPass2, setIsShowPass2] = useState(false);

  const handleshowPass1 = () => {
    setIsShowPass1(!isShowPass1);
  };

  const handleshowPass2 = () => {
    setIsShowPass2(!isShowPass2);
  };

  const slideImages = [slide1, slide2, slide3];

  return (
    <div className="bg-slate-200 h-screen w-full flex items-center justify-center font-primary">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] h-[95%] bg-slate-50 shadow-md rounded-md">
        {/* 1st part */}
        <div className="py-3 px-4 w-[80%] h-fit mx-auto">
          <h1 className="text-3xl font-bold font-primary">Sign up free !!</h1>
          <p className="my-2 font-primary">
            Welcome ! Please enter your details to signup
          </p>

          <div className="flex flex-col">
            <label htmlFor="email" className="font-bold font-primary">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="border-gray-500 bg-transparent border-[1px] font-primary mb-2 outline-none p-[10px] rounded-md placeholder:text-sm"
            />
          </div>

          <div className="flex flex-col mb-1 relative">
            <label htmlFor="password" className="font-bold font-primary">
              Password
            </label>
            <input
              type={isShowPass1 ? "text" : "password"}
              required
              placeholder="Enter your password"
              className="border-gray-500 font-primary bg-transparent border-[1px] outline-none p-[10px] pr-16 rounded-md placeholder:text-sm"
            />
            {isShowPass1 ? (
              <AiFillEyeInvisible
                size={30}
                className="absolute right-5 bottom-[10px] cursor-pointer text-gray-400"
                onClick={handleshowPass1}
              />
            ) : (
              <AiFillEye
                size={30}
                className="absolute right-5 bottom-[10px] cursor-pointer text-gray-400"
                onClick={handleshowPass1}
              />
            )}
          </div>

          <div className="flex flex-col relative">
            <label htmlFor="password" className="font-bold font-primary">
              Confirm Password
            </label>
            <input
              type={isShowPass2 ? "text" : "password"}
              required
              placeholder="Enter your password"
              className="border-gray-500 font-primary bg-transparent border-[1px] outline-none p-[10px] pr-16 rounded-md placeholder:text-sm"
            />
            {isShowPass2 ? (
              <AiFillEyeInvisible
                size={30}
                className="absolute right-5 bottom-[10px] cursor-pointer text-gray-400"
                onClick={handleshowPass2}
              />
            ) : (
              <AiFillEye
                size={30}
                className="absolute right-5 bottom-[10px] cursor-pointer text-gray-400"
                onClick={handleshowPass2}
              />
            )}
          </div>

          <button className="font-primary bg-slate-800 text-lg text-white w-full rounded-md mt-3 py-2 px-10">
            Sign up
          </button>

          <button className="text-lg font-primary w-full rounded-md mt-3 py-2 px-10 border-[1px] border-gray-500 justify-center gap-5 flex items-center">
            <FcGoogle size={28} /> Sign up with Google
          </button>

          <p className="mt-2 w-fit mx-auto text-gray-600 font-primary">
            Already have an account ?{" "}
            <Link to={"/login"}>
              <span className="font-bold text-black cursor-pointer font-primary">
                Login
              </span>
            </Link>
          </p>
        </div>

        {/* 2nd part */}
        <div className="relative w-full h-fit">
          <CarouselUI
            slideImages={slideImages}
            indicator={false}
            status={false}
            arrows={false}
            height="625"
          />
          <div className="absolute top-0 left-0 bg-gradient-to-tl from-black/60 w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Register;
