import { useState } from "react";
import Field from "./Field";
import { inputStyle, btnPrimary, btnSecondary } from "./style";
import Icon from "./Icon";

function PatientForm({ initial, onSubmit, onClose }) {

  const groupes = [
    "A+",
    "A-",
    "B+",
    "B-",
    "AB+",
    "AB-",
    "O+",
    "O-",
  ];

  const [form, setForm] = useState(
    initial || {
      nom: "",
      prenom: "",
      age: "",
      sexe: "M",
      telephone: "",
      email: "",
      groupe_sanguin: "A+",
      adresse: "",
      antecedents: "",
      mutuelle: "",
    }
  );

  const [errors, setErrors] = useState({});

  const handleChange = (champ) => (e) => {
    setForm({
      ...form,
      [champ]: e.target.value,
    });
  };const validate = () => {

  let err = {};

  if (!form.nom.trim())
    err.nom = "Le nom est obligatoire.";

  if (!form.prenom.trim())
    err.prenom = "Le prénom est obligatoire.";

  if (
    form.age &&
    (form.age < 0 || form.age > 130)
  ) {
    err.age = "Âge invalide.";
  }

  if (
    form.email &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
  ) {
    err.email = "Email invalide.";
  }

  setErrors(err);

  return Object.keys(err).length === 0;
};
const handleSubmit = (e) => {

  e.preventDefault();

  if (!validate()) return;

  onSubmit({
    ...form,
    age: Number(form.age),
  });

};
return (

<form onSubmit={handleSubmit}>
<Field label="Nom" required>

<input
style={inputStyle}
value={form.nom}
onChange={handleChange("nom")}
/>

{
errors.nom &&
<p style={{color:"red"}}>
{errors.nom}
</p>
}

</Field>
<Field label="Prénom" required>

<input
style={inputStyle}
value={form.prenom}
onChange={handleChange("prenom")}
/>

{
errors.prenom &&
<p style={{color:"red"}}>
{errors.prenom}
</p>
}

</Field>
<Field label="Âge">

<input
type="number"
style={inputStyle}
value={form.age}
onChange={handleChange("age")}
/>

{
errors.age &&
<p style={{color:"red"}}>
{errors.age}
</p>
}

</Field>;
<Field label="Sexe">

<select
style={inputStyle}
value={form.sexe}
onChange={handleChange("sexe")}
>

<option value="M">
Masculin
</option>

<option value="F">
Féminin
</option>

</select>

</Field>;
<Field label="Groupe sanguin">

<select
style={inputStyle}
value={form.groupe_sanguin}
onChange={handleChange("groupe_sanguin")}
>

{
groupes.map((g)=>(
<option key={g}>
{g}
</option>
))
}

</select>

</Field>
<Field label="Téléphone">

  <input
    type="text"
    style={inputStyle}
    value={form.telephone}
    onChange={handleChange("telephone")}
    placeholder="77 123 45 67"
  />

</Field>
<Field label="Email">

  <input
    type="email"
    style={inputStyle}
    value={form.email}
    onChange={handleChange("email")}
    placeholder="patient@email.com"
  />

  {
    errors.email &&
    <p style={{color:"red"}}>
      {errors.email}
    </p>
  }

</Field>
<Field label="Adresse">

  <input
    type="text"
    style={inputStyle}
    value={form.adresse}
    onChange={handleChange("adresse")}
    placeholder="Dakar, Sénégal"
  />

</Field>
<Field label="Mutuelle">

  <input
    type="text"
    style={inputStyle}
    value={form.mutuelle}
    onChange={handleChange("mutuelle")}
    placeholder="IPM, CNAM..."
  />

</Field>
<Field
    label="Antécédents médicaux"
    hint="Allergies, maladies chroniques..."
>

<textarea

    style={{
        ...inputStyle,
        minHeight:"90px",
        resize:"vertical"
    }}

    value={form.antecedents}

    onChange={handleChange("antecedents")}

    placeholder="Décrire les antécédents"

></textarea>

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

"Ajouter"

}

</button>

</div>
</form>

);

}

export default PatientForm;


