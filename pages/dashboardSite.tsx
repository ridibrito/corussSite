import Footer from "/components/site/Footer";
import NavbarSite from "/components/site/navbarSite";
import News from "/components/site/news";
import Image from "next/image";

export default function DashboardSite() {
   return(
    <>
    <NavbarSite />
    <section className="bg-white dark:bg-gray-900 block">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Dashboard</h2>
            <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
            <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
        </div>
        <div className=" gap-4 mt-8">
            <Image alt='coruss' width='600' height='400' className="w-full rounded-lg" src="/admcoruss.png" />
           
        </div>
    </div>
    
</section>
<News />
<Footer />
    </>
   )
}