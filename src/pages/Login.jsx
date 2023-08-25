import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import CarouselUI from "../Component/CarouselUI";
import slide1 from "../assets/images/slide-01.jpg";
import slide2 from "../assets/images/slide-02.jpg";
import slide3 from "../assets/images/slide-03.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  const [isShowPass, setIsShowPass] = useState(false);

  const handleshowPass = () => {
    setIsShowPass(!isShowPass);
  };

  const slideImages = [slide1, slide2, slide3];

  return (
    <div className="bg-slate-200 h-screen w-full flex items-center justify-center font-primary">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] h-[90%] bg-slate-50 shadow-md rounded-md">
        {/* 1st part */}
        <div className="py-4 px-4 w-[80%] h-fit mx-auto">
          <h1 className="text-3xl font-bold font-primary">Sign in !!</h1>
          <p className="my-2 font-primary">
            Welcome back ! Please enter your email and password
          </p>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-bold font-primary">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="border-gray-500 bg-transparent border-[1px] font-primary mb-2 outline-none p-3 rounded-md placeholder:text-sm"
            />
          </div>

          <div className="flex flex-col gap-2 relative">
            <label htmlFor="password" className="font-bold font-primary">
              Password
            </label>
            <input
              type={isShowPass ? "text" : "password"}
              required
              placeholder="Enter your password"
              className="border-gray-500 font-primary bg-transparent border-[1px] outline-none p-3 pr-16 rounded-md placeholder:text-sm"
            />
            {isShowPass ? (
              <AiFillEyeInvisible
                size={30}
                className="absolute right-5 bottom-[10px] cursor-pointer text-gray-400"
                onClick={handleshowPass}
              />
            ) : (
              <AiFillEye
                size={30}
                className="absolute right-5 bottom-[10px] cursor-pointer text-gray-400"
                onClick={handleshowPass}
              />
            )}
          </div>
          <div className="flex w-full items-center justify-between mt-4 font-bold text-sm">
            <label
              htmlFor="check"
              className="hover:cursor-pointer flex items-center w-fit"
            >
              <input type="checkbox" name="check" id="check" className="mr-2" />
              <span className="font-primary">Remember me for 30 days</span>
            </label>

            <p className="hover:cursor-pointer font-primary">
              Forgot password ?
            </p>
          </div>

          <button className="font-primary bg-slate-800 text-lg text-white w-full rounded-md mt-4 py-2 px-10">
            Sign in
          </button>

          <button className="text-lg font-primary w-full rounded-md mt-4 py-2 px-10 border-[1px] border-gray-500 justify-center gap-5 flex items-center">
            <FcGoogle size={28} /> Sign in with Google
          </button>
          <p className="mt-4 w-fit mx-auto text-gray-600 font-primary">
            Don&apos;t have an account ?{" "}
            <Link to={"/register"}>
              <span className="font-bold text-black cursor-pointer font-primary">
                Sign up for free
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
            height="592"
          />
          <div className="absolute top-0 left-0 bg-gradient-to-tl from-black/60 w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Login;
