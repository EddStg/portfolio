const Header = () => (
  <header className="site-header">
    <div className="shell nav">
      <a className="brand" href="#inicio" aria-label="Ir al inicio">
        JE<span>.</span>
      </a>
      <nav aria-label="Navegacion principal">
        <a href="#sobre-mi">Sobre mi</a>
        <a href="#experiencia">Experiencia</a>
        <a href="#proyectos">Proyectos</a>
      </nav>
      <a className="nav-contact" href="#contacto">Contacto</a>
    </div>
  </header>
);

export default Header;
