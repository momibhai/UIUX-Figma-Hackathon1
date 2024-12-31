import Footer from "../components/HomePage/Footer";
import MainNav from "../components/navbar/MainNav";

const Caterory = () => {
  return (
    <>
    <MainNav />
    <div className="flex flex-col md:flex-row gap-6 mt-10">
  {/* Sidebar */}
  <aside className="bg-white shadow-md p-6 md:ml-20 rounded-lg w-full md:w-1/5 border border-solid border-gray">
    <h3 className="text-lg font-bold mb-4">Filters</h3>
    
    {/* Category Filter */}
    <div className="mb-6">
      <h4 className="text-sm font-semibold mb-2">Category</h4>
      <ul className="space-y-2">
        {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map((category) => (
          <li key={category}>
            <button className="text-gray-700 hover:text-black text-sm">{category}</button>
          </li>
        ))}
      </ul>
    </div>

    {/* Price Filter */}
    <div className="mb-6">
      <h4 className="text-sm font-semibold mb-2">Price</h4>
      <div className="flex items-center gap-2">
        <input type="range" className="w-full" min="50" max="200" />
      </div>
      <div className="text-sm text-gray-500 mt-2">$50 - $200</div>
    </div>

{/* Color Filters */}
    <div className="mb-6">
  <h4 className="text-sm font-semibold mb-2">Colors</h4>
  <div className="flex gap-3">
    {["blue", "orange", "green", "purple", "pink", "black", "white"].map((color) => (
      <span
        key={color}
        style={{ backgroundColor: color }}
        className="w-6 h-6 rounded-full border cursor-pointer"
      ></span>
    ))}
  </div>
</div>


    {/* Size Filter */}
    <div className="mb-6">
      <h4 className="text-sm font-semibold mb-2">Size</h4>
      <div className="flex flex-wrap gap-2">
        {["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"].map((size) => (
          <button
            key={size}
            className="text-sm bg-gray-200 px-5 py-2 rounded-2xl  hover:border-black"
          >
            {size}
          </button>
        ))}
      </div>
    </div>

    {/* Dress Style Filter */}
    <div>
      <h4 className="text-sm font-semibold mb-2">Dress Style</h4>
      <ul className="space-y-2">
        {["Casual", "Formal", "Party", "Gym"].map((style) => (
          <li key={style}>
            <button className="text-gray-700 hover:text-black text-sm">{style}</button>
          </li>
        ))}
      </ul>
    </div>

    {/* Apply Filters Button */}
    <button className="mt-6 bg-black text-white text-sm font-semibold py-3 px-4 rounded-full w-full">
      Apply Filter
    </button>
  </aside>

  {/* Product Grid */}
  <section className="w-full md:w-3/4">
    <h2 className="text-2xl font-bold mb-6">Casual</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Reusable Product Card */}
      {[
        { name: "Gradient Graphic T-shirt", price: "$145", rating: "3.5/5", image: "/images/Product2.png" },
        { name: "Polo with Tipping Details", price: "$180", rating: "4.5/5", image: "/images/Product3.png" },
        { name: "Black Striped T-shirt", price: "$120", rating: "5.0/5", image: "/images/Product4.png", discount: "$160", sale: "-30%" },
        { name: "Skinny Fit Jeans", price: "$240", rating: "3.5/5", image: "/images/Product5.png", discount: "$260", sale: "-20%" },
        { name: "Checkered Shirt", price: "$180", rating: "4.5/5", image: "/images/Product6.png" },
        { name: "Sleeve Striped T-shirt", price: "$130", rating: "4.5/5", image: "/images/Product7.png", discount: "$160", sale: "-30%" },
        { name: "Vertical Striped Shirt", price: "$212", rating: "5/5", image: "/images/Product8.png", discount: "$160", sale: "-30%" },
        { name: "Courage Graphic T-shirt", price: "$145", rating: "4.0/5", image: "/images/Product9.png", discount: "$160", sale: "-30%" },
        { name: "Loose Fit Bermuda Shorts", price: "$80", rating: "3.0/5", image: "/images/Product10.png", discount: "$160", sale: "-30%" },
      ].map((product) => (
        <div key={product.name} className="bg-white rounded-lg shadow-md p-4">
          <img src={product.image} alt={product.name} className="w-[250px] h-[300px] object-cover rounded-lg mb-4 mx-auto" />
          <h3 className="text-gray-800 font-semibold text-sm mb-1 text-center">{product.name}</h3>
          <div className="text-yellow-500 text-sm mb-1 text-center">⭐⭐⭐⭐⭐ {product.rating}</div>
          <div className="flex justify-center items-center gap-2">
            <span className="text-black font-bold">{product.price}</span>
            {product.discount && <span className="line-through text-gray-500">{product.discount}</span>}
            {product.sale && <span className="text-red-500 text-sm">{product.sale}</span>}
          </div>
        </div>
      ))}
    </div>
    {/* Pagination */}
    <div className="flex justify-between items-center mt-6">
      <button className="text-gray-700 hover:text-black text-sm">Previous</button>
      <div className="text-sm text-gray-500">
        Page <strong>1</strong> of <strong>10</strong>
      </div>
      <button className="text-gray-700 hover:text-black text-sm">Next</button>
    </div>
  </section>
</div>


<br /><br />
    <Footer />
    </>
  );
}

export default Caterory;
