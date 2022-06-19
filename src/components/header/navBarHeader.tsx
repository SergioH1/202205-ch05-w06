import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './navBarHeader.css';

export function NavbarHeader() {
  return (
    <div className="header">
      <ul className="header__container">
        <li key="spicie">
          <Link className="link" to="/">
            <h2 className="header__title">Just Spicies</h2>
          </Link>
        </li>
        <li key="pack">
          <Link className="link" to="packs">
            <h2 className="header__title">Packs</h2>
          </Link>
        </li>

        <li key="Uni">
          <Link className="link" to="unidad">
            <h2 className="header__title">Unidad</h2>
          </Link>
        </li>
      </ul>
      <ShoppingCart className="icon-shopping" fontSize="large" />
    </div>
  );
}
