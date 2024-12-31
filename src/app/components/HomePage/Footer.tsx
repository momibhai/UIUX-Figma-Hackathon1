import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-100">
    {/* Newsletter Section */}
    <div className="bg-black text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-2xl font-bold text-center md:text-left mb-4 md:mb-0">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-2 w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full md:w-72 px-4 py-2 rounded-full text-black outline-none"
          />
          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold shadow-md hover:bg-gray-200 transition">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  
    {/* Footer Links Section */}
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* Branding Section */}
        <div>
          <h3 className="text-lg font-bold mb-3">SHOP.CO</h3>
          <p className="text-gray-600 text-sm">
            We have clothes that suit your style and which you’re proud to wear. From women to men.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-600 hover:text-black">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
  
        {/* Other Links */}
        <div>
          <h4 className="font-semibold text-sm mb-4">COMPANY</h4>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-4">HELP</h4>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-4">FAQ</h4>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-4">RESOURCES</h4>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How-to Blog</li>
            <li>YouTube Playlist</li>
          </ul>
        </div>
      </div>
  
      {/* Payment Logos */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <Image src="/images/visa.png" alt="Visa" width={70} height={70} />
        <Image src="/images/mastercard.png" alt="Mastercard" width={70} height={70} />
        <Image src="/images/paypal.png" alt="PayPal" width={70} height={70} />
        <Image src="/images/apple-pay.png" alt="Apple Pay" width={70} height={70} />
        <Image src="/images/google-pay.png" alt="Google Pay" width={70} height={70} />
      </div>
    </div>
  
    {/* Footer Bottom Section */}
    <div className="text-center text-gray-600 text-sm py-4">
      Shop.co © 2000-2023, All Rights Reserved
    </div>
  </footer>
  
  );
}
