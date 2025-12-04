"use client";

import Link from "next/link";
import { RegisterUser } from "@/types/user.types";
import { useState } from "react";

const Register = () => {
  const [registerData, setRegisterData] = useState<RegisterUser>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <main className="w-full max-w-md px-4">
        <form
          onSubmit={handleRegister}
          className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-8 shadow-lg"
        >
          <h1 className="w-full flex justify-center text-2xl font-bold">
            Create an Account
          </h1>

          <div className="flex flex-col gap-1">
            <label className="text-lg font-medium">
              Email<span className="text-red-700">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={registerData.email}
              onChange={handleChange}
              required
              className="text-lg font-normal border rounded-md p-1.5"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-lg font-medium">
              First Name<span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={registerData.firstName}
              onChange={handleChange}
              required
              className="text-lg font-normal border rounded-md p-1.5"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-lg font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={registerData.lastName}
              onChange={handleChange}
              className="text-lg font-normal border rounded-md p-1.5"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-lg font-medium">
              Password<span className="text-red-700">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={registerData.password}
              onChange={handleChange}
              required
              className="text-lg font-normal border rounded-md p-1.5"
            />
          </div>

          <button
            type="submit"
            className="font-bold text-md border rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800 hover:cursor-pointer w-fit self-center"
          >
            Register
          </button>

          <section className="flex justify-center">
            <p>
              Already have an account?{" "}
              <Link
                href="/login"
                className="underline font-medium text-blue-500"
              >
                Login
              </Link>
            </p>
          </section>
        </form>
      </main>
    </div>
  );
};

export default Register;
