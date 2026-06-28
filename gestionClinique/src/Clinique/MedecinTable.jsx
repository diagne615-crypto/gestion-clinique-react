import Icon from "./Icon";
import { btnIcon } from "./style";

function MedecinTable({
  medecins,
  onView,
  onEdit,
  onDelete,
}) {

  if (medecins.length === 0) {
    return (
      <div
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <h3>Aucun médecin enregistré</h3>
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
        //Entête du tableau//
                <thead
          style={{
            background: "#2563eb",
            color: "#fff",
          }}
        >
          <tr>
            <th style={th}>Nom</th>
            <th style={th}>Spécialité</th>
            <th style={th}>Téléphone</th>
            <th style={th}>Email</th>
            <th style={th}>Horaires</th>
            <th style={th}>Actions</th>
          </tr>
        </thead>
        //Corps du tableau//
        <tbody>

          {medecins.map((medecin) => (

            <tr
              key={medecin.id}
              style={{
                borderBottom: "1px solid #ddd",
              }}
            >
                              <td style={td}>
                Dr. {medecin.prenom} {medecin.nom}
              </td>
                            <td style={td}>
                {medecin.specialite}
              </td>
                            <td style={td}>
                {medecin.telephone}
              </td>
                            <td style={td}>
                {medecin.email || "-"}
              </td>
                            <td style={td}>
                {medecin.horaires || "-"}
              </td>
              //Bouton//
                            <td style={td}>

                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                  }}
                >

                  <button
                    style={btnIcon}
                    onClick={() => onView(medecin)}
                  >
                    <Icon
                      name="eye"
                      color="#0ea5e9"
                    />
                  </button>

                  <button
                    style={btnIcon}
                    onClick={() => onEdit(medecin)}
                  >
                    <Icon
                      name="edit"
                      color="#2563eb"
                    />
                  </button>

                  <button
                    style={btnIcon}
                    onClick={() => onDelete(medecin)}
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
//STYLE//
const th = {
  padding: "15px",
  textAlign: "left",
};

const td = {
  padding: "15px",
};

export default MedecinTable;