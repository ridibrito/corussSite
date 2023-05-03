import Seo from "../components/Seo";
import NavbarSite from "../components/site/navbarSite";
import HeaderSite from "../components/site/headerSite";
import News from "/components/site/news";
import Footer from "/components/site/Footer";
import Diferecas from "/components/site/Diferencas";
import Tabs from "/components/site/Tabs";

const Home = () => {
  <Seo title="Coruss" description="Bem vindo a liberdade" />;
  return (
    <>
      <div>
        <NavbarSite />
        <HeaderSite />
        <Tabs />
        <Diferecas />
        <News />
        <Footer />
      </div>
    </>
  );
};
export default Home;
