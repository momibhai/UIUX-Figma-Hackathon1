import Footer from "../components/HomePage/Footer";
import MainNav from "../components/navbar/MainNav";
import { TrashIcon } from '@heroicons/react/24/solid';


const CartPage = () => {
  return (
    <>
      <MainNav />
      <div className="px-4 md:px-8 lg:px-16 py-8">
        {/* Page Heading */}
        <h1 className="text-2xl md:text-3xl font-bold mb-8">YOUR CART</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md relative">
            {/* Item 1 */}
             <>
              {/* Delete Button */}
              <button className="absolute top-4 right-4 text-red-500 text-lg">
                <TrashIcon className="w-6 h-6 text-red-600 hover:text-red-800" />
              </button>

              <div className="flex gap-6 items-center">
                {/* Image */}
                <img
                  src="/images/Product1.png"
                  alt="Gradient Graphic T-shirt"
                  className="w-[150px] h-[160px] rounded-lg object-cover"
                />
                {/* Details */}
                <div className="flex flex-col justify-between space-y-2">
                  <h3 className="text-lg font-semibold">
                    Gradient Graphic T-shirt
                  </h3>
                  <p className="text-gray-500 text-sm">Size: Large</p>
                  <p className="text-gray-500 text-sm">Color: White</p>
                  <span className="text-2xl font-semibold">$145</span>
                </div>
              </div>

              {/* Quantity Controller */}
              <div className="flex justify-end mt-[-30px]">
                <div className="flex items-center border rounded-2xl bg-gray-200">
                  <button className="px-3 py-1 text-gray-500">-</button>
                  <span className="px-3 py-1">1</span>
                  <button className="px-3 py-1 text-gray-500">+</button>
                </div>
              </div>
                 <hr className="mt-5 mb-5" />
             </>
            {/* Item 2 */}
             <>
              {/* Delete Button */}
              <button className="absolute right-5 text-red-500 text-lg">
                <TrashIcon className="w-6 h-6 text-red-600 hover:text-red-800" />
              </button>

              <div className="flex gap-6 items-center">
                {/* Image */}
                <img
                  src="/images/Product6.png"
                  alt="Gradient Graphic T-shirt"
                  className="w-[150px] h-[160px] rounded-lg object-cover"
                />
                {/* Details */}
                <div className="flex flex-col justify-between space-y-2">
                  <h3 className="text-lg font-semibold">
                    Checkered Shirt
                  </h3>
                  <p className="text-gray-500 text-sm">Size: Mediu,</p>
                  <p className="text-gray-500 text-sm">Color: Red</p>
                  <span className="text-2xl font-semibold">$180</span>
                </div>
              </div>

              {/* Quantity Controller */}
              <div className="flex justify-end mt-[-30px]">
                <div className="flex items-center border rounded-2xl bg-gray-200">
                  <button className="px-3 py-1 text-gray-500">-</button>
                  <span className="px-3 py-1">1</span>
                  <button className="px-3 py-1 text-gray-500">+</button>
                </div>
              </div>
                 <hr className="mt-5 mb-5" />
             </>
            {/* Item 3 */}
             <>
              {/* Delete Button */}
              <button className="absolute right-5 text-red-500 text-lg">
                <TrashIcon className="w-6 h-6 text-red-600 hover:text-red-800" />
              </button>

              <div className="flex gap-6 items-center">
                {/* Image */}
                <img
                  src="/images/Product5.png"
                  alt="Gradient Graphic T-shirt"
                  className="w-[150px] h-[160px] rounded-lg object-cover"
                />
                {/* Details */}
                <div className="flex flex-col justify-between space-y-2">
                  <h3 className="text-lg font-semibold">
                    Skinny Fit Jeans
                  </h3>
                  <p className="text-gray-500 text-sm">Size: Medium</p>
                  <p className="text-gray-500 text-sm">Color: Blue</p>
                  <span className="text-2xl font-semibold">$240</span>
                </div>
              </div>

              {/* Quantity Controller */}
              <div className="flex justify-end mt-[-30px]">
                <div className="flex items-center border rounded-2xl bg-gray-200">
                  <button className="px-3 py-1 text-gray-500">-</button>
                  <span className="px-3 py-1">1</span>
                  <button className="px-3 py-1 text-gray-500">+</button>
                </div>
              </div>
                 <hr className="mt-5 mb-5" />
             </>
              

            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-semibold">$565</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Discount (-20%)</span>
                <span className="text-red-500 font-semibold">-$113</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Delivery Fee</span>
                <span className="font-semibold">$15</span>
              </div>
            </div>
            <div className="border-t border-gray-300 my-4"></div>
            <div className="flex justify-between">
              <span className="font-semibold text-lg">Total</span>
              <span className="font-semibold text-lg">$467</span>
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Add promo code"
                className="w-full border border-gray-300 rounded-3xl px-4 py-2 mb-4"
              />
              <button className="w-full bg-black text-white rounded-3xl px-4 py-2">
                Apply
              </button>
            </div>
            <button className="w-full bg-black text-white rounded-3xl px-4 py-3 mt-4">
              Go to Checkout →
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CartPage;
