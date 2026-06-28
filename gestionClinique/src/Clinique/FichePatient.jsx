import Field from "./Field";

function FichePatient({ patient }) {
  if (!patient) return null;

  return (
    <div>

      <div
        style={{
          textAlign: "center",
          marginBottom: "25px",
        }}
      >
        <div
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            background: "#2563eb",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "32px",
            margin: "0 auto",
          }}
        >
          {patient.prenom.charAt(0)}
          {patient.nom.charAt(0)}
        </div>

        <h2 style={{ marginTop: "15px" }}>
          {patient.prenom} {patient.nom}
        </h2>
      </div>

      <Field label="Nom">
        <p>{patient.nom}</p>
      </Field>

      <Field label="Prénom">
        <p>{patient.prenom}</p>
      </Field>

      <Field label="Sexe">
        <p>{patient.sexe}</p>
      </Field>

      <Field label="Date de naissance">
        <p>{patient.dateNaissance}</p>
      </Field>

      <Field label="Téléphone">
        <p>{patient.telephone}</p>
      </Field>

      <Field label="Email">
        <p>{patient.email || "-"}</p>
      </Field>

      <Field label="Adresse">
        <p>{patient.adresse || "-"}</p>
      </Field>

      <Field label="Groupe sanguin">
        <p>{patient.groupeSanguin || "-"}</p>
      </Field>

      <Field label="Allergies">
        <p>{patient.allergies || "Aucune"}</p>
      </Field>

      <Field label="Antécédents médicaux">
        <p>{patient.antecedents || "Aucun"}</p>
      </Field>

    </div>
  );
}

export default FichePatient;