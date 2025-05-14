// src/App.js
import { useState } from "react";
import "./styles/globals.css"; // Assuming globals.css is in src/styles/

// Import Data
import { properties as allProperties } from "./data/propertiesData";

// Import Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PropertiesPage from "./pages/PropertiesPage";
// import PropertyDetailPage from "./pages/PropertyDetailPage";
import ContactPage from "./pages/ContactPage";

// Import Utils
import { formatPrice } from "./utils/formatters";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [activeFilters, setActiveFilters] = useState({
    type: "all",
    status: "all",
    priceRange: "all",
    city: "all",
  });

  // Filter properties based on active filters
  const filteredProperties = allProperties.filter((property) => {
    return (
      (activeFilters.type === "all" || property.type === activeFilters.type) &&
      (activeFilters.status === "all" ||
        property.status === activeFilters.status) &&
      (activeFilters.city === "all" || property.city === activeFilters.city) &&
      (activeFilters.priceRange === "all" ||
        (activeFilters.priceRange === "low" && property.price < 500000) ||
        (activeFilters.priceRange === "medium" &&
          property.price >= 500000 &&
          property.price < 1000000) ||
        (activeFilters.priceRange === "high" && property.price >= 1000000))
    );
  });

  // Navigate to property details
  const viewPropertyDetails = (property) => {
    setSelectedProperty(property);
    setActiveTab("propertyDetail");
  };

  const renderPage = () => {
    switch (activeTab) {
      case "home":
        return (
          <HomePage
            properties={allProperties}
            setActiveTab={setActiveTab}
            viewPropertyDetails={viewPropertyDetails}
            formatPrice={formatPrice}
          />
        );
      case "about":
        return <AboutPage />;
      case "properties":
        return (
          <PropertiesPage
            filteredProperties={filteredProperties}
            activeFilters={activeFilters}
            setActiveFilters={setActiveFilters}
            viewPropertyDetails={viewPropertyDetails}
            formatPrice={formatPrice}
          />
        );
      // case "propertyDetail":
      //   return (
      //     <PropertyDetailPage
      //       selectedProperty={selectedProperty}
      //       setActiveTab={setActiveTab}
      //       formatPrice={formatPrice}
      //     />
      //   );
      case "contact":
        return <ContactPage />;
      default:
        return (
          <HomePage
            properties={allProperties}
            setActiveTab={setActiveTab}
            viewPropertyDetails={viewPropertyDetails}
            formatPrice={formatPrice}
          />
        );
    }
  };

  return (
    <div>
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setSelectedProperty={setSelectedProperty}
      />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}
