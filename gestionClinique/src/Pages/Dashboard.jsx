import { useClinic } from "../Context/ClinicContext";
import CardStat from "../Clinique/CardStat";

function Dashboard() {

  const {
    patients,
    medecins,
    rendezVous,
  } = useClinic();

  const aujourdHui = new Date()
    .toISOString()
    .split("T")[0];

  const rdvJour = rendezVous.filter(
    (rdv) => rdv.date === aujourdHui
  );

  return (
    <div>

      <h1
        style={{
          marginBottom: "25px",
        }}
      >
        Tableau de bord
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        <CardStat
          title="Patients"
          value={patients.length}
          icon="users"
          color="#2563eb"
        />

        <CardStat
          title="Médecins"
          value={medecins.length}
          icon="doctor"
          color="#16a34a"
        />

        <CardStat
          title="Rendez-vous"
          value={rendezVous.length}
          icon="calendar"
          color="#ea580c"
        />

        <CardStat
          title="Aujourd'hui"
          value={rdvJour.length}
          icon="clock"
          color="#9333ea"
        />
      </div>

      <div
        style={{
          marginTop: "40px",
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 5px rgba(0,0,0,.1)",
        }}
      >
        <h2>Résumé</h2>

        <p>
          Nombre total de patients :{" "}
          <strong>{patients.length}</strong>
        </p>

        <p>
          Nombre total de médecins :{" "}
          <strong>{medecins.length}</strong>
        </p>

        <p>
          Nombre total de rendez-vous :{" "}
          <strong>{rendezVous.length}</strong>
        </p>

        <p>
          Rendez-vous prévus aujourd'hui :{" "}
          <strong>{rdvJour.length}</strong>
        </p>
      </div>

    </div>
  );
}

export default Dashboard;