import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Neuro from "./components/Neuro";
import Process from "./components/Process";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Publications from "./components/Publications";
import PostPage from "./components/PostPage";
import { useLocation } from "./router";
import { posts } from "./data/posts";

const SITE = "Gisela Mottin";
const HOME_TITLE = "Gisela Mottin | Psicóloga e Psicanalista em Porto Alegre";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Neuro />
      <Process />
      <Gallery />
      <Contact />
    </>
  );
}

export default function App() {
  const { path, hash } = useLocation();

  // Rola para a âncora (#sobre...) ou volta ao topo ao trocar de página
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [path, hash]);

  let page = <Home />;
  let title = HOME_TITLE;

  if (path === "/publicacoes") {
    page = <Publications />;
    title = `Publicações | ${SITE}`;
  } else if (path.startsWith("/publicacoes/")) {
    const slug = decodeURIComponent(path.slice("/publicacoes/".length));
    const post = posts.find((p) => p.slug === slug);
    page = <PostPage slug={slug} />;
    title = post ? `${post.title} | ${SITE}` : `Texto não encontrado | ${SITE}`;
  }

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <Header />
      <main>{page}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
