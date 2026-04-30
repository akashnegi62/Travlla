"use client";
import AboutHero from "@/components/About/AboutHero";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserFriends,
  FaCoins,
  FaConciergeBell,
} from "react-icons/fa";

const exclusiveResorts = [
  {
    name: "Rosewood Maldives Resort",
    points: "2,500 / Night",
    img: "/img/location/loc2.webp",
  },
  {
    name: "Swiss Alps Chalet",
    points: "1,800 / Night",
    img: "/img/location/loc4.webp",
  },
  {
    name: "Kyoto Heritage Villa",
    points: "2,100 / Night",
    img: "/img/location/loc6.webp",
  },
];

export default function BookHolidayPage() {
  return (
    <main className="bg-[#f0f9f9] min-h-screen pb-24">
      <AboutHero title="Member Booking Portal" />

      {/* --- MEMBER BOOKING DASHBOARD --- */}
      <section className="container mx-auto px-4 -mt-16 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border-t-8 border-[#004b62]"
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 border-b border-gray-100 pb-8">
            <div>
              <h2 className="text-3xl font-bold text-[#004b62]">
                Welcome Back, Member!
              </h2>
              <p className="text-gray-500 mt-2">
                Use your membership points to book your next getaway.
              </p>
            </div>
            <div className="mt-6 md:mt-0 bg-[#fcf8f1] px-8 py-4 rounded-2xl text-center border border-[#8bc34a]/30">
              <span className="block text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">
                Available Points
              </span>
              <span className="text-3xl font-black text-[#8bc34a] flex items-center justify-center gap-2">
                <FaCoins className="text-xl" /> 45,000
              </span>
            </div>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Destination */}
            <div className="bg-gray-50 p-4 rounded-2xl flex items-center gap-4 focus-within:ring-2 ring-[#a3e635] transition-all">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#004b62] shadow-sm">
                <FaMapMarkerAlt />
              </div>
              <div className="flex-1">
                <label className="block text-xs font-bold text-gray-400 uppercase">
                  Destination
                </label>
                <select className="w-full bg-transparent font-bold text-[#004b62] outline-none cursor-pointer">
                  <option>Select Resort...</option>
                  <option>Maldives Resort</option>
                  <option>Swiss Alps Chalet</option>
                  <option>Kyoto Heritage Villa</option>
                  <option>Bali Jungle Retreat</option>
                </select>
              </div>
            </div>

            {/* Dates */}
            <div className="bg-gray-50 p-4 rounded-2xl flex items-center gap-4 focus-within:ring-2 ring-[#a3e635] transition-all">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#004b62] shadow-sm">
                <FaCalendarAlt />
              </div>
              <div className="flex-1">
                <label className="block text-xs font-bold text-gray-400 uppercase">
                  Check In - Out
                </label>
                <input
                  type="text"
                  placeholder="Select Dates"
                  className="w-full bg-transparent font-bold text-[#004b62] outline-none placeholder:text-[#004b62]"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="bg-gray-50 p-4 rounded-2xl flex items-center gap-4 focus-within:ring-2 ring-[#a3e635] transition-all">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#004b62] shadow-sm">
                <FaUserFriends />
              </div>
              <div className="flex-1">
                <label className="block text-xs font-bold text-gray-400 uppercase">
                  Guests
                </label>
                <select className="w-full bg-transparent font-bold text-[#004b62] outline-none cursor-pointer">
                  <option>2 Adults, 0 Kids</option>
                  <option>2 Adults, 2 Kids</option>
                  <option>4 Adults, 0 Kids</option>
                </select>
              </div>
            </div>

            {/* Submit */}
            <button className="bg-[#004b62] text-white rounded-2xl font-bold text-lg hover:bg-[#a3e635] hover:text-[#004b62] transition-all shadow-lg">
              Check Availability
            </button>
          </form>
        </motion.div>
      </section>

      {/* --- EXCLUSIVE MEMBER RESORTS --- */}
      <section className="container mx-auto px-4 mt-24">
        <div className="text-center mb-12">
          <span className="text-[#a3e635] font-bold uppercase tracking-widest bg-[#004b62] px-4 py-1 rounded-full text-xs">
            Exclusive Access
          </span>
          <h2 className="text-4xl font-bold text-[#004b62] mt-6">
            Trending Member Destinations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {exclusiveResorts.map((resort, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[40px] overflow-hidden shadow-xl group border border-transparent hover:border-[#a3e635] transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={resort.img}
                  alt={resort.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2 border border-white/20">
                  <FaCoins className="text-[#8bc34a]" /> {resort.points}
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-[#004b62] mb-4">
                  {resort.name}
                </h3>
                <button className="bg-[#f0f9f9] text-[#004b62] px-8 py-3 rounded-full font-bold text-sm group-hover:bg-[#004b62] group-hover:text-white transition-colors">
                  View Availability
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- VIP CONCIERGE --- */}
      <section className="container mx-auto px-4 mt-24">
        <div className="bg-[#004b62] rounded-[40px] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('/img/map.png')] bg-cover bg-center" />
          <div className="relative z-10 md:w-2/3 mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Custom Arrangements?
            </h2>
            <p className="text-gray-300 text-lg">
              Contact your dedicated VIP Concierge to arrange yacht rentals,
              private chefs, or complex multi-destination itineraries.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <button className="bg-[#a3e635] text-[#004b62] px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all shadow-[0_0_30px_rgba(163,230,53,0.3)] flex items-center gap-3">
              <FaConciergeBell /> Contact Concierge
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
