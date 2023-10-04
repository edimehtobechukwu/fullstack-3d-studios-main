import dynamic from "next/dynamic";

import NavBar from "./NavBar";
import Header from "./Header";
import CustomButton from "./CustomButton";
import Work from "./Work";
import Projects from "./Projects";
import Service from "./Service";
import TestimonialCard from "./TestimonialCard";
import Contact from "./Contact";
import CustomFaq from "./CustomFaq";
import Footer from "./Footer";

// Home Sections
import Stories from "./Stories";
import ShowReel from "./ShowReel";
import Services from "./Services";
import Works from "./Works";
import Benefits from "./Benefits";
import Clients from "./Clients";
import Testimonials from "./Testimonials";
import Faqs from "./Faqs";

const DynamicMap = dynamic(() => import("./Map"), {
  ssr: false,
});

export {
  NavBar,
  Header,
  CustomButton,
  Work,
  Projects,
  DynamicMap,
  Service,
  TestimonialCard,
  Contact,
  CustomFaq,
  Footer,
  Stories,
  ShowReel,
  Services,
  Works,
  Benefits,
  Clients,
  Testimonials,
  Faqs,
};
