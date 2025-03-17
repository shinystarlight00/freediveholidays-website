import { useState } from "react";
import Header from "../../components/Layout/Header/Header";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Layout/Footer/Footer";
import { Button, Input } from "../../components/UI";
import { Mail } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  date: string;
  persons: string;
}

export default function TourDetail() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    persons: "1",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header />
      <Hero />

      <div className="max-w-7xl mx-auto mt-5 p-6 grid md:grid-cols-3 gap-6">
        {/* Left Side */}
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-4xl font-bold">French Autumn</h1>

          <div className="border-t border-b border-gray-200 py-4 my-6">
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <span className="font-medium">5 days</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-10 h-10 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <line x1="20" y1="8" x2="20" y2="14"></line>
                    <line x1="23" y1="11" x2="17" y2="11"></line>
                  </svg>
                </div>
                <span className="font-medium">Age 12+</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-10 h-10 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <span className="font-medium">Sep, Oct, Nov</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-10 h-10 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <span className="font-medium">Availability 50</span>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-semibold">Day 1</h2>
          <p className="text-gray-600">Description about the day...</p>
          <img
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            className="rounded-lg mt-4"
            alt="Autumn Leaves"
          />

          <h2 className="text-xl font-semibold">Day 4</h2>
          <p className="text-gray-600">More detailed itinerary...</p>

          <div className="mt-8 space-y-6">
            {/* Tour Details Table */}
            <div className="border-t border-b border-gray-200">
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-4 px-2 font-semibold">Departure</div>
                <div className="py-4 px-2">
                  San Francisco International Airport
                </div>
              </div>
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-4 px-2 font-semibold">Departure Time</div>
                <div className="py-4 px-2">
                  Please arrive by 10:20 AM for a prompt departure at 10:50 AM
                </div>
              </div>
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="py-4 px-2 font-semibold">Return Time</div>
                <div className="py-4 px-2">Approximately 8:30 PM</div>
              </div>
            </div>

            {/* Included */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Included</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Airfare</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Local transportation</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>5 Star Accomodation</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Professional Guide</span>
                </div>
              </div>
            </div>

            {/* Not Included */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Not Included</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                  <span>Departure Taxes</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                  <span>Entry Fees</span>
                </div>
              </div>
            </div>

            {/* Maps */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Maps</h3>
              <div className="relative h-80 w-full border rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.76457410133!2d2.2769948739278364!3d48.85894658138276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Reviews */}
            <div>
              <h3 className="text-xl font-semibold mb-4">4 Reviews</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Accomodation</span>
                    <div className="flex text-yellow-400">
                      <span>★★★★☆</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span>Meals</span>
                    <div className="flex text-yellow-400">
                      <span>★★★★☆</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span>Value For Money</span>
                    <div className="flex text-yellow-400">
                      <span>★★★★☆</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Destination</span>
                    <div className="flex text-yellow-400">
                      <span>★★★★☆</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span>Transport</span>
                    <div className="flex text-yellow-400">
                      <span>★★★☆☆</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span>Overall</span>
                    <div className="flex text-yellow-400">
                      <span>★★★★☆</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Individual Review */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Jack Dawson"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">Jack Dawson</h4>
                    <p className="text-sm text-gray-500">
                      December 18, 2019 at 4:41 pm
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Et leggings fanny pack, elit bespoke vinyl art party Pitchfork
                  selfies master cleanse Kickstarter seitan retro. Drinking
                  vinegar stumptown yr pop-up artisan sunt. Deep v cliche lomo
                  biodiesel Neutra selfies. Shorts fixie consequat flexitarian
                  four loko tempor duis single-origin coffee. Banksy, elit small
                  batch freegan sed.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Accomodation</span>
                      <div className="flex text-yellow-400">
                        <span>★★★★☆</span>
                      </div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Meals</span>
                      <div className="flex text-yellow-400">
                        <span>★★★☆☆</span>
                      </div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Value For Money</span>
                      <div className="flex text-yellow-400">
                        <span>★★★★☆</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Destination</span>
                      <div className="flex text-yellow-400">
                        <span>★★★★★</span>
                      </div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Transport</span>
                      <div className="flex text-yellow-400">
                        <span>★★★☆☆</span>
                      </div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Overall</span>
                      <div className="flex text-yellow-400">
                        <span>★★★★☆</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Jessica Medina"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">Jessica Medina</h4>
                    <p className="text-sm text-gray-500">
                      December 15, 2018 at 4:41 pm
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Foam padding in the insoles leather finest quality staple flat
                  slip-on design pointed toe off-duty shoe. Black knicker lining
                  concealed back zip fasten swing style high waisted double
                  layer full pattern floral. Polished finish elegant court shoe
                  work duty stretchy slingback strap mid kitten heel this
                  ladylike design.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Accomodation</span>
                      <div className="flex text-yellow-400">
                        <span>★★★★☆</span>
                      </div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Meals</span>
                      <div className="flex text-yellow-400">
                        <span>★★★☆☆</span>
                      </div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Value For Money</span>
                      <div className="flex text-yellow-400">
                        <span>★★★★☆</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Destination</span>
                      <div className="flex text-yellow-400">
                        <span>★★★★★</span>
                      </div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Transport</span>
                      <div className="flex text-yellow-400">
                        <span>★★★☆☆</span>
                      </div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Overall</span>
                      <div className="flex text-yellow-400">
                        <span>★★★★☆</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Write a Review Form */}
              <div className="mt-10 border-t border-gray-200 pt-8">
                <h3 className="text-xl font-bold mb-6">Write A Review</h3>

                <form>
                  <div className="mb-4">
                    <label className="block mb-2">
                      Comment <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      className="w-full border border-gray-300 rounded-md p-3 min-h-[150px]"
                      required
                    ></textarea>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <label className="block mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                      />
                    </div>

                    <div>
                      <label className="block mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                      />
                    </div>

                    <div>
                      <label className="block mb-2">Website</label>
                      <input
                        type="url"
                        className="w-full border border-gray-300 rounded-md p-2"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-gray-600">
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </span>
                    </label>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Accomodation</span>
                        <div className="flex text-gray-400">
                          <span>☆☆☆☆☆</span>
                        </div>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span>Meals</span>
                        <div className="flex text-gray-400">
                          <span>☆☆☆☆☆</span>
                        </div>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span>Value For Money</span>
                        <div className="flex text-gray-400">
                          <span>☆☆☆☆☆</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Destination</span>
                        <div className="flex text-gray-400">
                          <span>☆☆☆☆☆</span>
                        </div>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span>Transport</span>
                        <div className="flex text-gray-400">
                          <span>☆☆☆☆☆</span>
                        </div>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span>Overall</span>
                        <div className="flex text-gray-400">
                          <span>☆☆☆☆☆</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="bg-red-500 text-white font-medium py-2 px-6 rounded-md hover:bg-red-600 transition-colors"
                  >
                    Post Comment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Booking Form */}
        <div>
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            <h2 className="text-xl font-bold p-6 bg-black text-white">
              $5,000 <span className="text-sm">Per Person</span>
            </h2>
            <div className="mt-4 space-y-4 p-6">
              <Input
                name="fullName"
                placeholder="Full Name"
                onChange={handleChange}
              />
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                onChange={handleChange}
              />
              <Input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                onChange={handleChange}
              />
              <Input name="date" type="date" onChange={handleChange} />
              <select
                name="persons"
                className="w-full p-2 border rounded"
                onChange={handleChange}
              >
                <option>1 person</option>
                <option>2 persons</option>
              </select>
              <Button className="w-full bg-red-500 text-white py-2">
                Book This Tour
              </Button>
            </div>
          </div>

          <button className="w-full mt-6 flex items-center gap-2 text-center border border-red-500 text-red-500 hover:text-white hover:bg-red-500 p-5 rounded-md">
            <Mail /> Share this tour
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
