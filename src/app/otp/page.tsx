import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className=" max-h-[1000px] flex flex-col-reverse lg:flex-row lg:max-w-[1540px] mx-auto">
      <div className="w-full lg:w-[845px] order-1 lg:order-none relative">
        <Image
          src={"/images/login.png"}
          alt="Login Image"
          width={845}
          height={1024}
          className=" w-full h-[300px] sm:h-[300px] md:h-[450px] lg:h-screen object-cover"
        />
      </div>

      <div className="w-full lg:w-1/2 flex justify-center items-center p-6 md:p-10">
      
        <div className="w-full max-w-[445px]">
          
          {/* Login Form */}
          <div className="mt-[30px] lg:mt-[40px]">
            <p>Back</p>
            <form className="w-full">
              <h2 className="text-[24px] md:text-[30px] font-bold">
                Enter OTP
              </h2>
              <p className="text-sm md:text-base text-[#A6AAAC] mt-1">
                We have share a code of your registered email address perry.wilson@example.com
              </p>

              <div className="mt-6">
                <input
                  id="email"
                  type="email"
                  required
                  value="4"
                  className="w-full h-[48px] md:h-[56px] md:w-[56px] px-3 py-2 border border-[#FFCA01] rounded-[10px] shadow-sm focus:outline-none focus:ring focus:ring-blue-200 text-center"
                />
                <input
                  id="email"
                  type="email"
                  required
                  value="0"
                  className="w-full ml-4 h-[48px] md:h-[56px] md:w-[56px] px-3 py-2 border border-[#FFCA01] rounded-[10px] shadow-sm focus:outline-none focus:ring focus:ring-blue-200 text-center"
                />
              </div>

              <button
                type="submit"
                className="w-full h-[48px] md:h-[56px] mt-6 bg-[#2F4832] text-white rounded-[10px] hover:bg-[#2F4832]/90 transition cursor-pointer"
              >
                Verify
              </button>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  );
}
