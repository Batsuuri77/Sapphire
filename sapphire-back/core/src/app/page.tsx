import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import Footer from "./components/footer";
import MainWrapper from "./components/mian/MainWrapper";

export default function Home() {
  return (
    <>
      <MainWrapper>
        <section className="h-screen w-screen flex flex-col items-center justify-between ">
          <div className="flex flex-col justify-between items-center w-screen px-10">
            {/* Intro section */}
            <div className="flex flex-col gap-5 justify-between items-center mb-10 mt-20">
              <h1 className="text-xl font-semibold">
                Welcome to{" "}
                <span className="text-blue-600 font-bold">KIZUN</span> system
                1.0
              </h1>
              <p className="text-sm text-gray-700 font-semibold text-center px-1">
                This platform is designed to empower SMB business owners by
                providing a centralized solution to efficiently manage their
                online stores.
              </p>
            </div>
            {/* Login section */}
            <div className="flex flex-col gap-5 justify-between items-center mb-10">
              <h2 className="text-left font-semibold text-lg text-gray-800">
                Log in to your account
              </h2>

              <form action="">
                <div className="flex flex-col gap-1 justify-between mb-4">
                  <label htmlFor="" className="text-sm font-bold text-gray-700">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="text-sm rounded-md py-1 px-2 shadow-2xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col  gap-2 justify-between mb-4">
                  <label htmlFor="" className="text-sm font-bold text-gray-700">
                    Password
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type="email"
                      name="email"
                      className="text-sm rounded-md py-1 px-2 shadow-2xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder=""
                    />
                    <EyeIcon className="w-6 h-6 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 bg-gray-200 rounded-2xl p-1" />
                    <EyeSlashIcon className="w-6 h-6 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 bg-gray-200 rounded-2xl p-1" />
                  </div>
                  <a
                    href="/auth/forgot-password"
                    className="text-blue-500 hover:underline ml-2 text-xs text-right italic"
                  >
                    Forgot your password?
                  </a>
                </div>
                <button className="bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 w-full">
                  Log In
                </button>
              </form>
              <p className="text-sm text-gray-700 font-semibold">
                Don&apos;t have an account?
                <a
                  href="/auth/signup"
                  className="text-blue-500 hover:underline ml-2 font-semibold"
                >
                  Sign Up
                </a>
              </p>
            </div>
          </div>
          {/* Footer section */}
          <Footer />
        </section>
      </MainWrapper>
    </>
  );
}
