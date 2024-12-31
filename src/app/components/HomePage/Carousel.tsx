export default function HappyCustomers() {
  return (
    <section className="w-full py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-center text-2xl font-bold mb-6">OUR HAPPY CUSTOMERS</h2>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Customer 1 */}
          <div className="border rounded-lg p-4 shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Sarah M. <span className="text-green-500">✔</span></h3>
            <p className="text-gray-600 text-sm">
              &quot;I&apos;m blown away by the quality and style of the clothes I received from Shop.co. 
              From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.&quot;
            </p>
          </div>

          {/* Customer 2 */}
          <div className="border rounded-lg p-4 shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Alex K. <span className="text-green-500">✔</span></h3>
            <p className="text-gray-600 text-sm">
              &quot;Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. 
              The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.&quot;
            </p>
          </div>

          {/* Customer 3 */}
          <div className="border rounded-lg p-4 shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</div>
            </div>
            <h3 className="font-semibold text-lg mb-2">James L. <span className="text-green-500">✔</span></h3>
            <p className="text-gray-600 text-sm">
              &quot;As someone who&apos;s always on the lookout for unique fashion pieces, I&apos;m thrilled to have stumbled upon Shop.co. 
              The selection of clothes is not only diverse but also on-point with the latest trends.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
