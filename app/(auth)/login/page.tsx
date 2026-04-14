"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGoogle, FaFacebookF, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdChevronRight } from "react-icons/md";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-white">
      {/* Left Side: Full Height Image (Desktop) */}
      <div className="relative hidden lg:flex lg:w-1/2 h-screen top-0">
        <Image
          src="/img/login-bg.avif"
          alt="Waterfall background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 p-16 flex flex-col justify-between text-white">
          {/* --- LOGO --- */}
          <div className="relative w-32 h-32">
            <Link href="/" className="">
              <Image
                src={"/img/newlogo.jpeg"}
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl font-bold mb-6 leading-tight"
            >
              Welcome back!
            </motion.h1>
            <p className="text-slate-100 text-lg max-w-md">
              Log in to your account to manage your bookings, preferences, and
              more.
            </p>
          </div>
          <div className="flex gap-6 text-sm opacity-70">
            <span>Viatio 2024. All rights reserved.</span>
          </div>
        </div>
      </div>

      {/* Right Side: Content */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6 md:p-16 lg:p-24 overflow-y-auto">
        <div className="w-full max-w-md">
          {/* Mobile Header Image */}
          <div className="lg:hidden w-full h-56 relative rounded-3xl overflow-hidden mb-8 shadow-xl">
            <Image
              src="/img/login-bg.avif"
              alt="Waterfall"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white">
              <h2 className="text-2xl font-bold">Login Now!</h2>
              <p className="text-sm opacity-90">
                Welcome back! Please enter your details.
              </p>
            </div>
          </div>

          <div className="hidden lg:block mb-10">
            <h2 className="text-4xl font-bold text-slate-900">Login Now!</h2>
            <p className="text-slate-500 mt-3">
              Welcome back! Please enter your details.
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="jonathan_doe@email.com"
                className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••••"
                className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-11.5 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded-lg border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
                <span className="text-slate-600 font-medium group-hover:text-slate-900">
                  Remember me
                </span>
              </label>
              <Link
                href="#"
                className="text-slate-900 font-bold hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-100"
            >
              Log In <MdChevronRight size={22} />
            </motion.button>
          </form>

          <div className="mt-8 text-center text-slate-600">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="text-slate-900 font-extrabold hover:underline"
            >
              Sign Up
            </Link>
          </div>

          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-100"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-slate-400 font-bold tracking-widest">
                Or continue with
              </span>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-2 flex items-center justify-center gap-3 py-4 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all font-bold text-slate-700">
              <FaGoogle className="text-red-500 text-xl" /> Google
            </button>
            <button className="flex-1 flex items-center justify-center py-4 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all">
              <FaFacebookF className="text-blue-600 text-xl" />
            </button>
            <button className="flex-1 flex items-center justify-center py-4 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all">
              <FaXTwitter className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
