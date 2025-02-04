import BrandSection from './components/HomePage/BrandSection';
import BrowseByStyle from './components/HomePage/BrowseByStyle ';
import HappyCustomers from './components/HomePage/Carousel';
import HeroSection from './components/HomePage/HeroSection';
import NewArrivals from './components/HomePage/NewArrivals';

export default function Home() {
  return (
    <>
      

      {/* Hero Section */}
      <HeroSection />

      {/* Brand Section */}
      <BrandSection />

      {/* New Arrivals */}
      <NewArrivals />

      <hr style={{width :'80%', margin:"0 auto", textAlign:'center'}} />

      {/* Top Selling */}
      {/* <TopSelling /> */}

      <BrowseByStyle />

      <HappyCustomers />


    </>
  );
}
