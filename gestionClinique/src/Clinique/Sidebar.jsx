import { NavLink } from "react-router-dom";
import Icon from "./Icon";
import "../Styles/sidebar.css";

function Sidebar() {
  const menus = [
    {
      path: "/",
      label: "Tableau de bord",
      icon: "dashboard",
    },
    {
      path: "/patients",
      label: "Patients",
      icon: "users",
    },
    {
      path: "/medecins",
      label: "Médecins",
      icon: "doctor",
    },
    {
      path: "/rendezvous",
      label: "Rendez-vous",
      icon: "calendar",
    },
  ];

  return (
    <aside className="sidebar">

      <div className="logo">
        🏥
        <h2>Clinique AL FURQAN</h2>
      </div>

      <nav>

        {menus.map((menu) => (

          <NavLink
            key={menu.path}
            to={menu.path}
            className={({ isActive }) =>
              isActive
                ? "menu active"
                : "menu"
            }
          >
            <Icon
              name={menu.icon}
              size={20}
            />

            <span>{menu.label}</span>

          </NavLink>

        ))}

      </nav>

    </aside>
  );
}

export default Sidebar;