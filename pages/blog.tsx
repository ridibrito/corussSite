import NavbarSite from "../components/site/navbarSite";
import Footer from "/components/site/Footer";
import News from "/components/site/news";
import PrecosSite from "/components/site/PrecosSite";

export default function Produtos() {
  return (
    <>
      <NavbarSite />
      <div className="bg-gray-100 dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-sky-600 dark:text-white">
            Blog
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Informações sobre o mercado e principalmente sobre o coruss CRM.
          </p>
        </div>

        <aside
          aria-label="Related articles"
          className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800"
        >
          <div className="px-4 mx-auto max-w-screen-xl">
            <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
              Artigos relacionados
            </h2>
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              <article className="max-w-xs">
                <a href="#"></a>
                <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">Our first office</a>
                </h2>
                <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                >
                  Read in 2 minutes
                </a>
              </article>
              <article className="max-w-xs">
                <a href="#"></a>
                <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">Enterprise design tips</a>
                </h2>
                <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                >
                  Read in 12 minutes
                </a>
              </article>
              <article className="max-w-xs">
                <a href="#"></a>
                <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">We partnered with Google</a>
                </h2>
                <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                >
                  Read in 8 minutes
                </a>
              </article>
              <article className="max-w-xs">
                <a href="#"></a>
                <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">Our first project with React</a>
                </h2>
                <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                >
                  Read in 4 minutes
                </a>
              </article>
            </div>
          </div>
        </aside>
      </div>

      <div>
        <div className="max-w-7xl mx-auto my-12">
          <PrecosSite />
        </div>
        <div>
          <News />
          <Footer />
        </div>
      </div>
    </>
  );
}
