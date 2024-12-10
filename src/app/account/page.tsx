import React from "react";
import Navbar from "../shop/navbar";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import Delivery from "../shop/delivery";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="relative w-full">
        {/* Background Image */}
        <Image
          src={"/Rectangle 1.png"}
          alt="Hero Background"
          objectFit="cover"
          className="w-full h-full"
          height={300}
          width={300}
        />
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <Image
            src={"/Meubel House_Logos-05.png"}
            alt=""
            width={90}
            height={90}
            className="md:h-[90px] md:w-[90px] h-[50px] w-[50px]"
          />
          <h1 className="text-[18px] md:text-[48px] relative -top-2 md:top-0 font-medium md:mt-[-30px] text-black">
            My Account
          </h1>
          <p className="text-[10px] md:text-[16px] relative -top-4 md:top-0 font-medium text-black pt-2">
            Home <AiOutlineRight className="inline-block" />
            <span className="font-light"> My Account</span>
          </p>
        </div>
      </div>

      <div className="bg-white flex justify-center items-center py-10 md:py-16">
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2  gap-12 md:gap-32 bg-white rounded-lg p-8">
          {/* Login Section */}
          <div className="pr-4">
            <h2 className="text-[24px] md:text-[36px] font-semibold  mb-5 md:mb-7">
              Log In
            </h2>
            <form action="#" method="POST">
              <div className="mb-4">
                <label
                  htmlFor="login-email"
                  className="block md:text-[16px] text-[14px] font-medium mb-2 md:mb-4"
                >
                  Username or email address
                </label>
                <input
                  type="email"
                  id="login-email"
                  name="login-email"
                  className="w-full border placeholder:text-[14px] md:placeholder:text-[16px] border-[#9F9F9F] rounded-[6px] p-3 md:p-4"
                  required
                />
              </div>
              <div className=" ">
                <label
                  htmlFor="login-password"
                  className="block md:text-[16px] text-[14px] font-medium mb-2 md:mb-4"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="login-password"
                  name="login-password"
                  className="w-full border placeholder:text-[14px] md:placeholder:text-[16px] border-[#9F9F9F] rounded-[6px] p-3 md:p-4"
                  required
                />
              </div>
              <div className="flex items-center my-4 md:my-7">
                <input
                  type="checkbox"
                  id="remember-me"
                  name="remember-me"
                  className="w-4 h-4 text-black focus:ring-black border-[#9F9F9F] rounded-md "
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 md:ml-4 text-[12px] md:text-[16px] "
                >
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="text-[14px]  md:text-[16px] border border-black py-1.5 md:py-2.5  px-10 md:px-14 rounded-[10px] hover:bg-black transition hover:text-white duration-200"
              >
                Log In
              </button>
              <p className="mt-3 md:mt-4 text-[12px] md:text-[16px] inline-block ml-3 md:ml-8">
                <a className="text-black no-underline cursor-pointer">
                  Lost Your Password?
                </a>
              </p>
            </form>
          </div>

          {/* Register Section */}
          <div className="md:pl-4 md:pr-0 pr-5">
            <h2 className="text-[24px] md:text-[36px]  font-semibold mb-5 md:mb-7">
              Register
            </h2>
            <form action="#" method="POST">
              <div className="mb-4">
                <label
                  htmlFor="register-email"
                  className="block md:text-[16px] text-[14px] font-medium mb-2 md:mb-4"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="register-email"
                  name="register-email"
                  className="w-full border placeholder:text-[14px] md:placeholder:text-[16px] border-[#9F9F9F] rounded-[6px] p-3 md:p-4"
                  required
                />
              </div>
              <p className="text-[12px] md:text-[16px]  my-4 ">
                A link to set a new password will be sent to your email address.
              </p>
              <p className="text-[12px] md:text-[16px] mb-2 md:mb-4">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <a href="#" className="text-black font-semibold no-underline">
                  privacy policy
                </a>
                .
              </p>
              <button
                type="submit"
                className="text-[14px] md:text-[16px] mt-4 border border-black py-1.5 md:py-2.5 px-10 md:px-14 rounded-[10px] hover:bg-black transition hover:text-white duration-200"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>

      <Delivery />
    </div>
  );
};

export default page;
