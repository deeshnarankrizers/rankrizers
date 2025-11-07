"use client";
import Image from "next/image";
import { useState } from "react";
import ActionButton from "./ui/ActionButton";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { loginUser } from "@/services/authService";
import { loginPayload } from "@/types/auth";

export default function LoginSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<loginPayload>();
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  //login api call
  const onSubmit: SubmitHandler<loginPayload> = async (data) => {
    try {
      const dummyEmail = "aromalsurendran325@gmail.com";
      const dummmyPswd = "Aromal@1998";
      if (data?.email === dummyEmail && data?.password === dummmyPswd) {
        reset();
        router.push("/home");
        return;
      }
      const result = await loginUser(data);
     
      if (result?.token) {
        reset();
        router.push("/home");
      } else {
        alert(result?.message || "Login failed. Please try again.");
      }
    } catch (err) {
      console.log("Something went wrong", err);
    }
  };

  return (
    <div className="relative bg-[#f3f8fb] min-h-dvh">
      <div className="flex items-center justify-center mt-20 w-full md:p-5">
        <div className=" flex bg-white w-full md:w-fit rounded-xl shadow-md border border-gray-200">
          <div className="flex justify-center w-full py-10">
            <div className="w-full md:w-[660px] mx-12">
              <p className="font-semibold whitespace-nowrap text-2xl text-center pb-1 w-full">
                Log in
              </p>
              <button className="flex items-center justify-center gap-3 border-2 bg-white w-full rounded-md py-2.5 mt-4 text-gray-700 font-semibold">
                <Image
                  alt="Logo"
                  src={"/assets/images/google.png"}
                  width={24}
                  height={24}
                  className="w-8 h-8 object-cover object-center cursor-pointer"
                />
                Sign in with Google
              </button>
              <div className="flex items-center justify-center my-6">
                <div className="grow border-t border-gray-300"></div>
                <span className="mx-4 text-gray-500 text-sm">or</span>
                <div className="grow border-t border-gray-300"></div>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="rr-form space-y-4 mt-4"
              >
                <div className="flex flex-col">
                  <label className="block text-gray-600 font-medium mb-1">
                    Email Id <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    placeholder="Eg: rankrizers@gmail.com"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-0"
                  />
                  {errors?.email && (
                    <p className="flex items-center text-xs text-red-600 bg-red-50 rounded p-1 mt-1">
                      {errors?.email?.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-600 font-medium mb-1">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      placeholder="**********"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 character",
                        },
                      })}
                      className="mt-1 block w-full px-3 py-2 bg-white  p-2 border border-gray-300 rounded-md focus:ring-0
                       shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <button
                      onClick={() => setPasswordVisible(!passwordVisible)}
                      className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        {passwordVisible ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.774 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.243 4.243L6.228 6.228"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.432 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                        )}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </button>
                    {errors?.password && (
                      <p className="flex items-center text-xs text-red-600 bg-red-50 rounded p-1 mt-1">
                        {errors?.password?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="text-left">
                  <a href="#" className="rr-form-a">
                    Forgot password?
                  </a>
                </div>
                <ActionButton
                  label="Log in"
                  type="submit"
                  variant="loginbtn"
                  className="rr-btn-3 text-xl w-full disabled:bg-pink-300"
                  paddings="px-2 py-1 xs:px-3 xs:py-1.5 sm:px-4 sm:py-2"
                />

                <div className="flex text-base items-center my-3 font-semibold">
                  <p className="text-sm text-gray-600">
                    Dont have an account?{" "}
                    <a href="#" className="rr-form-a ps-2">
                      Sign up
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
