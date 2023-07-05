import { Fragment, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from './paginas/home.js';
import ScrollToTop from "react-scroll-to-top";
import NavBar from "./paginas/navbar.js";
import Footer from "./paginas/footer.js";
import ProjetoDetail from "./paginas/projetos/projeto_detail.js";

import { useLocation } from "react-router-dom";
const App = () => {

  const location = useLocation();

  return (
    <Fragment>
      <ScrollToTop smooth color='#006855' />

      <nav className="navbar sticky-top navbar-expand-md navbar-light bg-light">
        <NavBar />
      </nav>

      <main>
        <Routes>
          <Route exact path="/" element={<Home />} key={document.location.href} />
          <Route path="/projeto-detail/:id" element={<ProjetoDetail />} key={document.location.href} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>

    </Fragment >


  );

  // function NoMatch() {
  //   return (
  //     <>
  //       <h2>404: Página Não Encontrada</h2>
  //       <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
  //     </>
  //   );
  // }
}

export default App;
