import { Faq, Footer, Hero, Know, Navbar, Platform, Services, Socielity, Subscribe, Testimonial, Trusted } from "../../components/pages/home-components";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
       <Trusted/>
       <Services/>
      <Socielity/>
      <Testimonial/>
       <Know/>
       <Faq/>
      <Platform/>

      <Subscribe/>
      <Footer />
    </div>
  );
};
