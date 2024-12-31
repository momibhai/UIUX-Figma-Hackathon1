import Navbar from './components/navbar'; // Ensure the navbar component is in the correct path
import BrandSection from './components/HomePage/BrandSection';
import BrowseByStyle from './components/HomePage/BrowseByStyle ';
import HappyCustomers from './components/HomePage/Carousel';
import Footer from './components/HomePage/Footer';
import HeroSection from './components/HomePage/HeroSection';
import NewArrivals from './components/HomePage/NewArrivals';
import TopSelling from './components/HomePage/TopSelling';

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Brand Section */}
      <BrandSection />

      {/* New Arrivals */}
      <NewArrivals />

      <hr style={{width :'80%', margin:"0 auto", textAlign:'center'}} />

      {/* Top Selling */}
      <TopSelling />

      <BrowseByStyle />

      <HappyCustomers />

      <Footer/>

    </>
  );
}
