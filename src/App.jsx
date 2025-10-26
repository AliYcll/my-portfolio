import React from "react";
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
  return (
    <AppProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 pt-[100px] md:pt-[150px]">
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
        <Header />
        <HeroSection />
        <div className="border-t border-gray-200 dark:border-gray-700 "></div>
        <SkillsSection />
        <div className="border-t border-gray-200 dark:border-gray-700 "></div>
        <ProfileSection />
        <div className="border-t border-gray-200 dark:border-gray-700"></div>
        <ProjectsSection />
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
