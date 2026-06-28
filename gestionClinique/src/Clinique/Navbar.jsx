import "../Styles/navbar.css";
import { useTheme } from "../Context/ThemeContext";

function Navbar() {

  const date = new Date();
  const { darkMode, toggleTheme } = useTheme();

  return (

    <header className="navbar">

      <h2>

        Gestion de Clinique

      </h2>

      <div className="user">

        <span>

          {date.toLocaleDateString()}

        </span>

        <img

          src="https://i.pravatar.cc/40"

          alt="profil"

        />
        <div className="user">

    <button
        className="theme-btn"
        onClick={toggleTheme}
    >
        {darkMode ? "☀️" : "🌙"}
    </button>

    <span>
        {date.toLocaleDateString()}
    </span>

    <img
        src="https://dicebear.com"
        alt=""
    />

</div>

      </div>

    </header>

  );

}

export default Navbar;