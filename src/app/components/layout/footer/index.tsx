import { portfolio } from "@/data/portfolio";

const Footer = () => (
  <footer>
    <div className="shell footer-inner">
      <p>© {new Date().getFullYear()} {portfolio.name}. Construido con Next.js.</p>
      <a href="#inicio">Volver arriba ↑</a>
    </div>
  </footer>
);

export default Footer;

