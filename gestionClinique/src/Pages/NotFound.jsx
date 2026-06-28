import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f7fb",
      }}
    >
      <div
        style={{
          textAlign: "center",
          background: "#fff",
          padding: "50px",
          borderRadius: "15px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
          maxWidth: "500px",
        }}
      >
        <h1
          style={{
            fontSize: "90px",
            color: "#2563eb",
            marginBottom: "10px",
          }}
        >
          404
        </h1>

        <h2
          style={{
            marginBottom: "15px",
            color: "#333",
          }}
        >
          Page introuvable
        </h2>

        <p
          style={{
            color: "#666",
            marginBottom: "30px",
          }}
        >
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>

        <Link
          to="/"
          style={{
            background: "#2563eb",
            color: "#fff",
            textDecoration: "none",
            padding: "12px 25px",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          Retour au tableau de bord
        </Link>
      </div>
    </div>
  );
}

export default NotFound;