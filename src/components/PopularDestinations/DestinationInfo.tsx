import React from "react";
import { Mail } from "lucide-react";

const DestinationInfo: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Content */}
        <div className="md:col-span-2">
          {/* Title Section */}
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 border-t-2 border-red-500"></div>
              <span className="px-3 text-red-500 text-lg">🏷️</span>
              <div className="w-16 border-t-2 border-red-500"></div>
            </div>
            <h3 className="text-3xl font-bold">
              Rich with history, culture and spectacular architecture, there’s
              really no other place in the world quite like London.
            </h3>
          </div>

          {/* Content Sections */}
          <div className="mb-8">
            <h5 className="text-2xl font-bold mb-2">Exploring the Area</h5>
            <p className="text-gray-600">
              Meh synth Schlitz, tempor duis single-origin coffee ea next level
              ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit
              hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil,
              flexitarian Truffaut synth art party deep v chillwave.
            </p>
          </div>

          <div className="mb-8">
            <h5 className="text-2xl font-bold mb-2">Coastal Adventures</h5>
            <p className="text-gray-600">
              Exercitation photo booth stumptown tote bag Banksy, elit small
              batch freegan sed. Craft beer elit seitan exercitation, photo
              booth et 8-bit kale chips.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1697730373939-3ebcaa9d295e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Travel Scene"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* contact From */}
          <div className="mt-5">
            <button className="flex items-center gap-2 border border-red-500 text-red-500 hover:text-white hover:bg-red-500 px-4 py-2 rounded-md">
              <Mail /> Share this tour
            </button>

            <h2 className="text-xl font-bold mt-6">Leave A Reply</h2>

            <form className="mt-4">
              <div>
                <label className="block font-semibold" htmlFor="comment">
                  Comment *
                </label>
                <textarea
                  id="comment"
                  className="w-full border rounded-lg p-2 mt-1"
                  rows={6}
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div>
                  <label className="block font-semibold" htmlFor="name">
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full border rounded-lg p-2 mt-1"
                  />
                </div>
                <div>
                  <label className="block font-semibold" htmlFor="email">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full border rounded-lg p-2 mt-1"
                  />
                </div>
                <div>
                  <label className="block font-semibold" htmlFor="website">
                    Website
                  </label>
                  <input
                    id="website"
                    type="text"
                    className="w-full border rounded-lg p-2 mt-1"
                  />
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <input type="checkbox" id="save-info" className="w-4 h-4" />
                <label htmlFor="save-info">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </div>

              <div className="mt-6">
                <button className="bg-red-500 text-white px-6 py-2 rounded-lg">
                  Post Comment
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="">
          {/* Travel Tips */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h4 className="text-xl font-bold mb-4">Travel Tips</h4>
            <ul className="space-y-4">
              {[
                {
                  title: "Memorial Day to Someone Told Me to Travel",
                  date: "December 10, 2016",
                  img: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "7 Tips For Nomads On A Budget Trips",
                  date: "December 10, 2016",
                  img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "Taking A Travel Blog Victory Lap",
                  date: "December 10, 2016",
                  img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                },
              ].map((tip, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <img
                    src={tip.img}
                    alt="Tip"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{tip.title}</p>
                    <p className="text-gray-500 text-sm">{tip.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Trips */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold mb-4">Recent Trips</h4>
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 9 }).map((_, index) => (
                <img
                  key={index}
                  src={
                    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  }
                  alt="Recent Trip"
                  className="w-full h-24 object-cover rounded-md"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationInfo;
