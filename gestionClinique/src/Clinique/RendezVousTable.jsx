import { useClinic } from "../Context/ClinicContext";
import Icon from "./Icon";
import { btnIcon } from "./style";

function RendezVousTable({
  rendezVous,
  onView,
  onEdit,
  onDelete,
}) {

  const { patients, medecins } = useClinic();

  const getPatient = (id) => {
    const patient = patients.find((p) => p.id == id);
    return patient
      ? `${patient.prenom} ${patient.nom}`
      : "Patient introuvable";
  };

  const getMedecin = (id) => {
    const medecin = medecins.find((m) => m.id == id);
    return medecin
      ? `Dr. ${medecin.prenom} ${medecin.nom}`
      : "Médecin introuvable";
  };

  const badgeColor = (statut) => {
    switch (statut) {
      case "Confirmé":
        return {
          background: "#dcfce7",
          color: "#166534",
        };

      case "Annulé":
        return {
          background: "#fee2e2",
          color: "#991b1b",
        };

      default:
        return {
          background: "#fef9c3",
          color: "#854d0e",
        };
    }
  };

  if (rendezVous.length === 0) {
    return (
      <div
        style={{
          background: "#fff",
          padding: "40px",
          textAlign: "center",
          borderRadius: "10px",
        }}
      >
        <h3>Aucun rendez-vous enregistré</h3>
      </div>
    );
  }

  return (
    <div
      style={{
        overflowX: "auto",
        background: "#fff",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,.1)",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
                <thead
          style={{
            background: "#2563eb",
            color: "#fff",
          }}
        >
          <tr>
            <th style={th}>Patient</th>
            <th style={th}>Médecin</th>
            <th style={th}>Date</th>
            <th style={th}>Heure</th>
            <th style={th}>Statut</th>
            <th style={th}>Actions</th>
          </tr>
        </thead>
    <tbody>

          {rendezVous.map((rdv) => (

            <tr
              key={rdv.id}
              style={{
                borderBottom: "1px solid #ddd",
              }}
            >
                          <td style={td}>
                {getPatient(rdv.patientId)}
            </td>
            <td style={td}>
                {getMedecin(rdv.medecinId)}
            </td>
            <td style={td}>
                {rdv.date}
            </td>
            <td style={td}>
                {rdv.heure}
            </td>
                          <td style={td}>

                <span
                  style={{
                    ...badgeColor(rdv.statut),
                    padding: "5px 10px",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    fontSize: "12px",
                  }}
                >
                  {rdv.statut}
                </span>

              </td>
                          <td style={td}>

                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                  }}
                >

                  <button
                    style={btnIcon}
                    onClick={() => onView(rdv)}
                  >
                    <Icon
                      name="eye"
                      color="#0ea5e9"
                    />
                  </button>

                  <button
                    style={btnIcon}
                    onClick={() => onEdit(rdv)}
                  >
                    <Icon
                      name="edit"
                      color="#2563eb"
                    />
                  </button>

                  <button
                    style={btnIcon}
                    onClick={() => onDelete(rdv)}
                  >
                    <Icon
                      name="trash"
                      color="red"
                    />
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

const th = {
  padding: "15px",
  textAlign: "left",
};

const td = {
  padding: "15px",
};

export default RendezVousTable;



            
                
                      