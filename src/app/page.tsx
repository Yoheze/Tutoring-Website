import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import AboutMe from "../../components/About-me/About_me";
import Credentials from "../../components/Credentials/credentials";
import Subjects from "../../components/Subjects/subjects";
import TutoringStyle from "../../components/Testimonials/testimonials";
import Price from "../../components/Price/price";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Credentials />
      <Subjects />
      <TutoringStyle />
      <Price />
    </>
  );
}
