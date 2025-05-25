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
          {/* Logo */}
          <div className="absolute top-[39%] left-1/2 -translate-x-1/2 -translate-y-1/2 sm:top-[40%] sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 md:top-[40%] md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 lg:static lg:translate-x-0 lg:translate-y-0 flex w-[200px] h-[157px] rounded-[21px] bg-white justify-center items-center lg:ml-[173px] mb-6 lg:justify-start">
            <Image
              src={"/images/logo.webp"}
              alt={"Logo"}
              width={160}
              height={130}
              className="w-[120px] md:w-[160px]"
            />
          </div>

          {/* Login Form */}
          <div className="mt-[30px] lg:mt-[40px]">
            <form className="w-full">
              <h2 className="text-[24px] md:text-[30px] font-bold">
                Welcome 👋
              </h2>
              <p className="text-sm md:text-base text-[#A6AAAC] mt-1">
                Please login here
              </p>

              <div className="mt-6">
                <label
                  htmlFor="email"
                  className="block text-sm mb-1 text-[#0F1416]"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value="email"
                  className="w-full h-[48px] md:h-[56px] px-3 py-2 border border-[#FFCA01] rounded-[10px] shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="block text-sm mb-1 text-[#0F1416]"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  value="password"
                  className="w-full h-[48px] md:h-[56px] px-3 py-2 border border-[#FFCA01] rounded-[10px] shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>

              <div className="mt-5 mb-6 flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Remember me
                </label>
                <Link href="/forget" className="text-primary">
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full h-[48px] md:h-[56px] bg-[#2F4832] text-white rounded-[10px] hover:bg-[#2F4832]/90 transition cursor-pointer"
              >
                Login
              </button>
              <div className="mt-5 2xl:mt-8 text-center text-base text-default-600">
                Don't have an account?{" "}
                <Link href="/signup" className="text-[#2F4832]">
                  {" "}
                  Sign Up{" "}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
