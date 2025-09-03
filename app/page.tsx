import Header from './components/header';
import Hero from "./components/hero";
import TrendingDest from './components/trendingdest';
import PropertySliders from './components/propertySliders';
import TripGuide from './components/tripGuide';
import WeekendDeals from './components/weekendDeals';
import TravelDeals from './components/travelDeals';
import Footer from './components/footer';

// import SearchForm from './components/searchForm';
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TrendingDest />
      <PropertySliders />
      <TripGuide />
      <WeekendDeals />
      <TravelDeals />
      <Footer />
 
    </>
  );
}
