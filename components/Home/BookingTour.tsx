import React from 'react';
import { FaHotel, FaMapMarkerAlt, FaCalendarAlt, FaUserFriends, FaSearch } from 'react-icons/fa';

function BookingTour() {
  return (
    <section
      id="booknow"
      className="relative z-30 py-12 px-4 md:p-20 bg-[#effefe] scroll-mt-20"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-xl overflow-hidden">
          {/* Toggles */}
          <div className="flex border-b border-gray-100">
            <h1 className="flex items-center gap-3 px-6 py-4 md:px-8 md:py-5 font-bold transition-all bg-white text-[#1a3d3d] text-sm md:text-base">
              <FaHotel /> Plan Your Stay
            </h1>
          </div>

          {/* Form Fields */}
          <div className="p-6 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
              {/* Destination */}
              <div className="space-y-2">
                <label className="text-[10px] md:text-xs uppercase tracking-widest font-black text-gray-400 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[#a3e635]" /> Destination
                </label>
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="w-full text-base md:text-lg font-bold text-[#1a3d3d] border-b-2 border-gray-100 focus:border-[#a3e635] outline-none py-2 transition-all placeholder:text-gray-300 bg-transparent"
                />
              </div>

              {/* Dates */}
              <div className="space-y-2">
                <label className="text-[10px] md:text-xs uppercase tracking-widest font-black text-gray-400 flex items-center gap-2">
                  <FaCalendarAlt className="text-[#a3e635]" /> Check-in — Out
                </label>
                <input
                  type="text"
                  placeholder="Select Dates"
                  className="w-full text-base md:text-lg font-bold text-[#1a3d3d] border-b-2 border-gray-100 focus:border-[#a3e635] outline-none py-2 transition-all placeholder:text-gray-300 bg-transparent"
                />
              </div>

              {/* Adults */}
              <div className="space-y-2">
                <label className="text-[10px] md:text-xs uppercase tracking-widest font-black text-gray-400 flex items-center gap-2">
                  <FaUserFriends className="text-[#a3e635]" /> Adults
                </label>
                <select className="w-full text-base md:text-lg font-bold text-[#1a3d3d] border-b-2 border-gray-100 focus:border-[#a3e635] outline-none py-2 bg-transparent cursor-pointer">
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>3 Adults</option>
                  <option>4 Adults</option>
                  <option>5+ Adults</option>
                </select>
              </div>

              {/* Rooms */}
              <div className="space-y-2">
                <label className="text-[10px] md:text-xs uppercase tracking-widest font-black text-gray-400 flex items-center gap-2">
                  <FaHotel className="text-[#a3e635]" /> Rooms
                </label>
                <select className="w-full text-base md:text-lg font-bold text-[#1a3d3d] border-b-2 border-gray-100 focus:border-[#a3e635] outline-none py-2 bg-transparent cursor-pointer">
                  <option>1 Room</option>
                  <option>2 Rooms</option>
                  <option>3 Rooms</option>
                  <option>4+ Rooms</option>
                </select>
              </div>

              {/* Membership */}
              <div className="space-y-2">
                <label className="text-[10px] md:text-xs uppercase tracking-widest font-black text-gray-400">
                  Membership ID
                </label>
                <input
                  type="text"
                  placeholder="Enter ID (Optional)"
                  className="w-full text-base md:text-lg font-bold text-[#1a3d3d] border-b-2 border-gray-100 focus:border-[#a3e635] outline-none py-2 transition-all placeholder:text-gray-300 bg-transparent"
                />
              </div>
            </div>

            {/* Button */}
            <div className="mt-10 md:mt-12 flex justify-center">
              <button className="group relative w-full sm:w-auto bg-[#a2e734] hover:bg-[#1a3d3d] text-white px-10 py-4 md:px-16 md:py-5 rounded-full font-black uppercase tracking-widest transition-all duration-500 shadow-xl flex items-center justify-center gap-3">
                Check Rates
                <FaSearch className="group-hover:rotate-90 transition-transform duration-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingTour;