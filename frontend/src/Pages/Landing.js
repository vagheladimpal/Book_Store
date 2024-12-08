import { useEffect } from "react";
import { instance } from "../AxiosMethod/Axios";
import AboutSection from "../Component/AboutCard";
import Banner from "../Component/Banner";
import Footer from "../Component/Footer";
import { Navbar } from "../Component/Navbar";
import SecondSection from "../Component/SecondSection";

const Landing = () => {
  useEffect(()=>{
    getdata()
  },[])
  const getdata = async () => {
    try {
      const response = await instance.get('books'); // Replace with your actual endpoint
      console.log("datttaaa",response); // Log the response data
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };
  
  

  return (
    <>
      <Navbar />
      <Banner />
      <SecondSection />
      <AboutSection />
      <Footer />
    </>
  );
};
export default Landing;
