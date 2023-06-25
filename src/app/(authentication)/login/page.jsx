"use client";
import { useState } from "react";

export default function Login() {
  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });

  const handleOchange = ({ target: { name, value } }) =>
    setLoginValues({ ...loginValues, [name]: value });
  return (
    <section className="shadow-match-card p-6 font-righteous min-h-full mt-8">
      <h2 className="text-2xl text-center text-light-green ">Login To Your Account</h2>
      <form className="flex flex-col gap-4 items-center font-inter">
        <div className="w-full flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            required
            name="email"
            onChange={handleOchange}
            value={loginValues.email}
            className="h-[2.5rem] rounded-md pl-2 text-dark-grey outline-none caret-light-green border focus:border-dark-green"
          />
        </div>

        <div className="w-full flex flex-col">
          <label htmlFor="email">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleOchange}
            value={loginValues.password}
            required
            className="h-[2.5rem] rounded-md pl-2 text-dark-grey outline-none caret-light-green border focus:border-dark-green"
          />
        </div>

        <button
          type="submit"
          className="bg-light-green hover:bg-dark-green transition-colors duration-200 text-white w-full h-[2.5rem] rounded-md"
        >
          Login
        </button>
      </form>
    </section>
  );
}
