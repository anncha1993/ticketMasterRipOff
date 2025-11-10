import { Link } from "react-router-dom";
import "../styles/navigation.scss";
import "../styles/layout.scss";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Logo</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Hjem</Link>
            </li>
            <li>
              <Link to="kategori/musikk">Musikk</Link>
            </li>
            <li>
              <Link to="kategori/sport">Sport</Link>
            </li>
            <li>
              <Link to="kategori/show">Show</Link>
            </li>
          </ul>
        </nav>
        <span>Log in</span>
      </header>
      <main>{children}</main>
    </>
  );
}
