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
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
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
        <SkillsSection />
        <div className="max-w-[1440px] mx-auto border-t border-gray-200 dark:border-gray-700 "></div>
        <ProfileSection />
        <div className="max-w-[1440px] mx-auto border-t border-gray-200 dark:border-gray-700"></div>
        <ProjectsSection />
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
