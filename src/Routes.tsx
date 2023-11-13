import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const SignUpScreen = React.lazy(() => import("pages/SignUpScreen"));
const LoginScreen = React.lazy(() => import("pages/LoginScreen"));
const Search = React.lazy(() => import("pages/Search"));
const Properties = React.lazy(() => import("pages/Properties"));
const Contact = React.lazy(() => import("pages/Contact"));
const PropertyDetails = React.lazy(() => import("pages/PropertyDetails"));
const AboutUs = React.lazy(() => import("pages/AboutUs"));
const AIPlatform = React.lazy(() => import("pages/AIPlatform"));
const Home1 = React.lazy(() => import("pages/Home1"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/aiplatform" element={<AIPlatform />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/propertydetails" element={<PropertyDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/search" element={<Search />} />
          <Route path="/loginscreen" element={<LoginScreen />} />
          <Route path="/signupscreen" element={<SignUpScreen />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
