import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex md:flex-row flex-col-reverse items-center justify-between space-y-20 bg-[#FBEBB5] h-screen px-6 md:px-12 lg:px-24">
      {/* Text Content */}
      <div className="md:mt-20 relative md:-right-24 md:pb-0 pb-20  ">
        <h1 className="text-3xl md:text-[60px] font-medium leading-tight text-black">
          Rocket single <br /> seater
        </h1>
        <a
          href="#"
          className="mt-8 md:mt-12 inline-block text-[18px] md:text-[24px] font-medium text-black underline underline-offset-[18px] decoration-2 "
        >
          Shop Now
        </a>
      </div>

      {/* Image */}
      <div className="flex-shrink-0 mt-10">
        <Image
          src="/Rocket single seater 1 copy2.png" 
          alt="Rocket single seater"
                  className="md:h-[900px] md:w-[700px] h-[400px] w-[500px]"
                  width={600}
                  height={600}
        />
      </div>
    </section>
  );
}
