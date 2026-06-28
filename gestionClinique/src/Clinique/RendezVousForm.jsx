import { useState } from "react";
import { useClinic } from "../Context/ClinicContext";

import Field from "./Field";
import Icon from "./Icon";
import {
  inputStyle,
  btnPrimary,
  btnSecondary,
} from "./style";

function RendezVousForm({
  initial,
  onSubmit,
  onClose,
}) {

  const {
    patients,
    medecins,
  } = useClinic();

  const statuts = [
    "En attente",
    "Confirmé",
    "Annulé",
  ];

  const [form, setForm] = useState(
    initial || {
      patientId: "",
      medecinId: "",
      date: "",
      heure: "",
      motif: "",
      statut: "En attente",
      observations: "",
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

    if (!form.patientId)
      err.patientId = "Choisissez un patient.";

    if (!form.medecinId)
      err.medecinId = "Choisissez un médecin.";

    if (!form.date)
      err.date = "Choisissez une date.";

    if (!form.heure)
      err.heure = "Choisissez une heure.";

    if (!form.motif.trim())
      err.motif = "Le motif est obligatoire.";

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
              <Field label="Patient" required>

        <select
          style={inputStyle}
          value={form.patientId}
          onChange={handleChange("patientId")}
        >

          <option value="">
            Sélectionner un patient
          </option>

          {

            patients.map((patient)=>(
              <option
                key={patient.id}
                value={patient.id}
              >

                {patient.prenom} {patient.nom}

              </option>
            ))

          }

        </select>

        {

          errors.patientId &&
          <p style={{color:"red"}}>
            {errors.patientId}
          </p>

        }

      </Field>
            <Field label="Médecin" required>

        <select
          style={inputStyle}
          value={form.medecinId}
          onChange={handleChange("medecinId")}
        >

          <option value="">
            Sélectionner un médecin
          </option>

          {

            medecins.map((medecin)=>(
              <option
                key={medecin.id}
                value={medecin.id}
              >

                Dr. {medecin.prenom} {medecin.nom}

              </option>
            ))

          }

        </select>

        {

          errors.medecinId &&
          <p style={{color:"red"}}>
            {errors.medecinId}
          </p>

        }

      </Field>
            <Field label="Date" required>

        <input
          type="date"
          style={inputStyle}
          value={form.date}
          onChange={handleChange("date")}
        />

        {

          errors.date &&
          <p style={{color:"red"}}>
            {errors.date}
          </p>

        }

      </Field>
            <Field label="Heure" required>

        <input
          type="time"
          style={inputStyle}
          value={form.heure}
          onChange={handleChange("heure")}
        />

        {

          errors.heure &&
          <p style={{color:"red"}}>
            {errors.heure}
          </p>

        }

      </Field>
            <Field label="Motif" required>

        <textarea

          style={{
            ...inputStyle,
            minHeight:"80px",
            resize:"vertical"
          }}

          value={form.motif}

          onChange={handleChange("motif")}

        />

        {

          errors.motif &&
          <p style={{color:"red"}}>
            {errors.motif}
          </p>

        }

      </Field>
            <Field label="Statut">

        <select
          style={inputStyle}
          value={form.statut}
          onChange={handleChange("statut")}
        >

          {

            statuts.map((statut)=>(
              <option key={statut}>
                {statut}
              </option>
            ))

          }

        </select>

      </Field>
            <Field label="Observations">

        <textarea

          style={{
            ...inputStyle,
            minHeight:"80px",
            resize:"vertical"
          }}

          value={form.observations}

          onChange={handleChange("observations")}

          placeholder="Observations supplémentaires..."

        />

      </Field>
            <div

        style={{
          display:"flex",
          justifyContent:"flex-end",
          gap:"10px",
          marginTop:"20px"
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

            name={initial ? "edit":"add"}

            size={15}

            color="#fff"

          />

          {

            initial

            ?

            "Modifier"

            :

            "Planifier"

          }

        </button>

      </div>

    </form>

  );

}

export default RendezVousForm;
