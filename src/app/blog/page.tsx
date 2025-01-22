import React from "react";
import Navbar from "../shop/navbar";
import Delivery from "../shop/delivery";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";

const page = () => {
  const blogs = [
    {
      id: 1,
      image: "/Rectangle 68 (3).png",
      title: "Going all-in with millennial design",
      date: "14 Oct 2022",
      author: "Admin",
      category: "Wood",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    },
    {
      id: 2,
      image: "/Rectangle 68 (2).png",
      title: "The future of modern workspaces",
      date: "20 Nov 2022",
      author: "Editor",
      category: "Architecture",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    },
    {
      id: 3,
      image: "/Rectangle 68 (1).png",
      title: "Handmade pieces that took time to make",
      date: "05 Dec 2022",
      author: "Guest",
      category: "Environment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    },
  ];
  const categories = [
    { name: "Crafts", count: 2 },
    { name: "Design", count: 8 },
    { name: "Handmade", count: 7 },
    { name: "Interior", count: 1 },
    { name: "Wood", count: 6 },
  ];

  const recentPosts = [
    {
      id: 1,
      title: "Going all-in with millennial design",
      date: "03 Aug 2022",
      image: "/Rectangle 69 (4).png",
    },
    {
      id: 2,
      title: "Exploring new ways of decorating",
      date: "03 Aug 2022",
      image: "/Rectangle 69 (3).png",
    },
    {
      id: 3,
      title: "Handmade pieces that took time to make",
      date: "03 Aug 2022",
      image: "/Rectangle 69 (2).png",
    },
    {
      id: 4,
      title: "Modern home in Milan",
      date: "03 Aug 2022",
      image: "/Rectangle 69 (1).png",
    },
    {
      id: 5,
      title: "Colorful office redesign",
      date: "03 Aug 2022",
      image: "/Rectangle 69.png",
    },
  ];
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
            Blog
          </h1>
          <p className="text-[10px] md:text-[16px] relative -top-4 md:top-0 font-medium text-black pt-2">
            Home <AiOutlineRight className="inline-block" />
            <span className="font-light"> Blog</span>
          </p>
        </div>
      </div>

      {/* blog */}
      <div className="flex  md:px-40 ">
        <div className=" mt-10 md:mt-20  md:flex-[3]">
          {/* Grid Container */}
          <div className="grid grid-cols-1 gap-6 md:gap-10 w-[80%] mx-auto md:mx-0">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-lg overflow-hidden "
              >
                {/* Blog Image */}
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={400}
                  className="w-full  object-cover"
                />
                {/* Blog Content */}
                <div className="py-6">
                  <div className="text-[12px] md:text-[16px] text-[#9F9F9F] mb-3 flex gap-3 md:gap-4">
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <Image
                        src={"/dashicons_admin-users.png"}
                        alt=""
                        width={16}
                        height={16}
                        className="md:h-[16px] md:w-[16px] h-[14px] w-[14px]"
                      />
                      <p>{blog.author}</p>
                    </div>
                    <div className="flex items-center gap-2gap-1.5 md:gap-2">
                      <Image
                        src={"/uis_calender.png"}
                        alt=""
                        width={16}
                        height={16}
                        className="md:h-[16px] md:w-[16px] h-[14px] w-[14px]"
                      />
                      <p>{blog.date}</p>
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <Image
                        src={"/ci_tag.png"}
                        alt=""
                        width={16}
                        height={16}
                        className="md:h-[16px] md:w-[16px] h-[14px] w-[14px]"
                      />
                      <p>{blog.category}</p>
                    </div>
                  </div>
                  <h2 className="text-lg md:text-2xl font-medium mb-3">{blog.title}</h2>
                  <p className="text-[#9F9F9F] text-[13px] md:text-[15px] mb-4">
                    {blog.description}
                  </p>
                 
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* category section */}
        <div className=" md:block hidden mt-20 relative -left-16">
          {/* Search Bar */}
          <div className="mb-">
            <input
              type="text"
              className="w-full border border-[#9F9F9F] rounded-[10px] pl-4 pr-12 py-4 "
            />
            <Image
              src={"/akar-icons_search (1).png"}
              alt=""
              width={22}
              height={22}
              className="relative -top-10 left-[88%]"
            />
          </div>
          <div className="py-6 bg-white  rounded-lg w-[280px]  ">
            {/* Categories Section */}
            <div className="mb-6 px-4">
              <h2 className="text-2xl font-medium mb-4">Categories</h2>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className="flex justify-between text-[16px] text-[#9F9F9F] leading-[50px] cursor-pointer hover:text-black"
                  >
                    <span>{category.name}</span>
                    <span>{category.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts Section */}
            <div className="px-4 mt-20">
              <h2 className="text-2xl font-medium mb-10 ">Recent Posts</h2>
              <ul className="space-y-8">
                {recentPosts.map((post) => (
                  <li key={post.id} className="flex items-center space-x-4">
                    {/* Post Image */}
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={300}
                      height={300}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    {/* Post Details */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-700 hover:text-blue-500">
                        {post.title}
                      </h3>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Delivery />
    </div>
  );
};

export default page;
