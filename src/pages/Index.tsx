import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Courses from "@/components/sections/Courses";
import Instructors from "@/components/sections/Instructors";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-body">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Courses />
        <Instructors />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
