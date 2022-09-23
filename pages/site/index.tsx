import Seo from "../../components/Seo";
import NavbarSite from "../../components/site/navbarSite";
import TabsSite from "../../components/site/tabsSite";
import HeaderSite from "../../components/site/headerSite";
import News from "/components/site/news";
import Footer from "/components/site/Footer";
import Diferecas from "/components/site/Diferencas";

const Home = () => {
  <Seo title="Coruss" description="Bem vindo a liberdade" />;
  return (
    <>
      <div>
        <NavbarSite />
        <HeaderSite />
        <TabsSite />   
        <Diferecas />    
        <News />
        <Footer />
        
      </div>
     
    </>
  );
};
export default Home;
