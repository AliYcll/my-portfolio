import React, { useRef, useState, useEffect } from "react";
import { AppProvider } from "./context/AppContext";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProfileSection from "./components/ProfileSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (headerRef.current) {
        
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    handleResize(); // Initial measurement

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [headerRef]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - (headerHeight + 20);

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <AppProvider headerHeight={headerHeight}>
      <div className="min-h-screen bg-white dark:bg-[#252128] text-gray-900 dark:text-white transition-colors duration-300">
        <ToastContainer
          position="bottom-left"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Header ref={headerRef} headerHeight={headerHeight} />
        <main style={{ paddingTop: headerHeight }}>
          <HeroSection />
          <SkillsSection />
          <div className="border-t border-gray-200 dark:border-gray-700 "></div>
          <ProfileSection />
          <div className="border-t border-gray-200 dark:border-gray-700"></div>
          <ProjectsSection />
          <Footer />
        </main>
      </div>
    </AppProvider>
  );
}

export default App;

