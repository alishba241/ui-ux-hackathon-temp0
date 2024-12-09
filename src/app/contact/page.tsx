import React from "react";
import Navbar from "../shop/navbar";
import Delivery from "../shop/delivery";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";

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
          />
          <h1 className="text-[48px] font-medium mt-[-30px] text-black">
            Contact
          </h1>
          <p className="text-[16px] font-medium text-black pt-2">
            Home <AiOutlineRight className="inline-block" />
            <span className="font-light"> Contact</span>
          </p>
        </div>
      </div>

      {/* contact section */}

      <div className="">
        <div className="flex flex-col justify-center items-center mt-20 text-center">
          <h1 className="text-[36px] font-semibold">Get In Touch With Us</h1>
          <p className="text-[16px] text-[#9F9F9F] mt-2 w-[50%]">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="flex justify-center">
          <div className=" flex justify-center w-[60%] mb-16 mt-32 gap- max-w-[1200px] ">
            {/* left column */}

                      <div className="flex-1 flex flex-col gap-10">
                          {/* box 1 */}
              <div className="w-[190px] ">
                <div className="flex gap-5 items-center">
                  <Image
                    src={"/Vector (7).png"}
                    alt=""
                    width={20}
                    height={20}
                  />
                                  <h1 className="text-[24px] font-medium">Address</h1>
                </div>
                 <p className="text-[16px] relative left-10 mt-1">
                  236 5th SE Avenue, New <br /> York NY10000, United States
                </p>
                          </div>
                          {/* box 2 */}

                 <div className="w-[170px] ">
                <div className="flex gap-5 items-center">
                  <Image
                    src={"/Vector (8).png"}
                    alt=""
                    width={20}
                    height={20}
                  />
                                  <h1 className="text-[24px] font-medium">Phone</h1>
                </div>
                 <p className="text-[16px] relative left-10 mt-1">
                 Mobile: +(84) 546-6789
                              </p>
                              <p className="text-[16px] relative left-10 mt-1">
                              Hotline: +(84) 456-6789
                              </p>
                          </div>
                          {/* box 3 */}
                          
                          <div className="w-[200px] ">
                <div className="flex gap-5 items-center">
                  <Image
                    src={"/Vector (9).png"}
                    alt=""
                    width={20}
                    height={20}
                  />
                                  <h1 className="text-[24px] font-medium">Working Time</h1>
                </div>
                 <p className="text-[16px] relative left-10 mt-1">
                                  Monday-Friday: 9:00 <br /> - 22:00</p>
            <p className="text-[16px] relative left-10 mt-1">Saturday-Sunday: 9:00 <br />- 21:00</p>

                
              </div>
            </div>
            {/* right column */}

                      <div className="flex-1">
                          <form action="" className="w-full max-w-[600px]">
                             <div>
        <label className="block text-[16px] font-medium mb-4">Your name</label>
        <input
          placeholder="Abc"
          type="text"
          className="w-full border border-[#9F9F9F] rounded-[6px] p-4"
        />
      </div>
      <div>
        <label className="block text-[16px] font-medium mb-4 mt-7">
          Email address
        </label>
        <input
          type="text"
          placeholder="Abc@def.com"
          className="w-full border border-[#9F9F9F] rounded-[6px] p-4"
        />
      </div>
      <div>
        <label className="block text-[16px] font-medium mb-4 mt-7">
          Subject
        </label>
        <input
          type="text"
          placeholder="This is an optional"
          className="w-full border border-[#9F9F9F] rounded-[6px] p-4"
        />
      </div>
      <div>
        <label className="block text-[16px] font-medium mb-4 mt-7">
          Message
        </label>
        <textarea
          placeholder="Hi! I'd like to ask about"
          className="w-full border border-[#9F9F9F] rounded-[6px] p-6 resize-none"
        ></textarea>
      </div>
                          </form>
                          

                                    <button
          type="submit"
          className=" py-2 px-20 border mt-10 border-black rounded-[12px] text-black text-center hover:bg-black hover:text-white duration-200"
        >
         Submit
        </button>
      
            </div>
          </div>
        </div>
      </div>

      <Delivery />
    </div>
  );
};

export default page;
