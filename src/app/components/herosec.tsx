import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex items-center justify-between space-y-20 bg-[#FBEBB5] h-screen px-6 md:px-12 lg:px-24">
      {/* Text Content */}
      <div className="mt-20 relative -right-24">
        <h1 className="text-3xl md:text-[60px] font-medium leading-tight text-black">
          Rocket single <br /> seater
        </h1>
        <a
          href="#"
          className="mt-12 inline-block text-[24px] font-medium text-black underline underline-offset-[18px] decoration-2 "
        >
          Shop Now
        </a>
      </div>

      {/* Image */}
      <div className="flex-shrink-0 mt-10">
        <Image
          src="/Rocket single seater 1 copy2.png" 
          alt="Rocket single seater"
                  className="w-full max-w-md md:max-w-lg xl:max-w-2xl"
                  width={400}
                  height={400}
        />
      </div>
    </section>
  );
}
