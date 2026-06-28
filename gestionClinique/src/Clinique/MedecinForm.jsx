import { useState } from "react";
import Field from "./Field";
import Icon from "./Icon";
import { inputStyle, btnPrimary, btnSecondary } from "./style";

function MedecinForm({ initial, onSubmit, onClose }) {

  const specialites = [
    "Médecine Générale",
    "Cardiologie",
    "Pédiatrie",
    "Dermatologie",
    "Gynécologie",
    "Neurologie",
    "Ophtalmologie",
    "Dentisterie",
    "Orthopédie",
    "Urologie",
  ];

  const [form, setForm] = useState(
    initial || {
      nom: "",
      prenom: "",
      sexe: "M",
      specialite: "Médecine Générale",
      telephone: "",
      email: "",
      adresse: "",
      horaires: "",
    }
  );

  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  const validate = () => {

    let err = {};

    if (!form.nom.trim())
      err.nom = "Le nom est obligatoire.";

    if (!form.prenom.trim())
      err.prenom = "Le prénom est obligatoire.";

    if (!form.specialite.trim())
      err.specialite = "La spécialité est obligatoire.";

    if (!form.telephone.trim())
      err.telephone = "Le téléphone est obligatoire.";

    if (
      form.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      err.email = "Adresse email invalide.";
    }

    setErrors(err);

    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!validate()) return;

    onSubmit(form);

  };

  return (
    <form onSubmit={handleSubmit}>
              <Field label="Nom" required>

        <input
          style={inputStyle}
          value={form.nom}
          onChange={handleChange("nom")}
        />

        {errors.nom && (
          <p style={{ color: "red" }}>
            {errors.nom}
          </p>
        )}

      </Field>
            <Field label="Prénom" required>

        <input
          style={inputStyle}
          value={form.prenom}
          onChange={handleChange("prenom")}
        />

        {errors.prenom && (
          <p style={{ color: "red" }}>
            {errors.prenom}
          </p>
        )}

      </Field>
            <Field label="Sexe">

        <select
          style={inputStyle}
          value={form.sexe}
          onChange={handleChange("sexe")}
        >
          <option value="M">Masculin</option>
          <option value="F">Féminin</option>
        </select>

      </Field>
            <Field label="Spécialité" required>

        <select
          style={inputStyle}
          value={form.specialite}
          onChange={handleChange("specialite")}
        >
          {specialites.map((sp) => (
            <option key={sp} value={sp}>
              {sp}
            </option>
          ))}
        </select>

        {errors.specialite && (
          <p style={{ color: "red" }}>
            {errors.specialite}
          </p>
        )}

      </Field>
            <Field label="Téléphone" required>

        <input
          style={inputStyle}
          value={form.telephone}
          onChange={handleChange("telephone")}
          placeholder="77 123 45 67"
        />

        {errors.telephone && (
          <p style={{ color: "red" }}>
            {errors.telephone}
          </p>
        )}

      </Field>
            <Field label="Email">

        <input
          type="email"
          style={inputStyle}
          value={form.email}
          onChange={handleChange("email")}
          placeholder="medecin@email.com"
        />

        {errors.email && (
          <p style={{ color: "red" }}>
            {errors.email}
          </p>
        )}

      </Field>
            <Field label="Adresse">

        <input
          style={inputStyle}
          value={form.adresse}
          onChange={handleChange("adresse")}
        />

      </Field>
            <Field
        label="Horaires de consultation"
        hint="Exemple : Lundi à Vendredi de 08h à 16h"
      >

        <textarea
          style={{
            ...inputStyle,
            minHeight: "90px",
            resize: "vertical",
          }}
          value={form.horaires}
          onChange={handleChange("horaires")}
        />

      </Field>
          <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <button
          type="button"
          style={btnSecondary}
          onClick={onClose}
        >
          Annuler
        </button>

        <button
          type="submit"
          style={btnPrimary}
        >
          <Icon
            name={initial ? "edit" : "add"}
            size={15}
            color="#fff"
          />

          {initial ? "Modifier" : "Ajouter"}
        </button>
      </div>

    </form>
  );
}

export default MedecinForm;

              


