import Icon from "./Icon";
import GsBadge from "./GsBadge";
import { btnIcon } from "./style";

function PatientTable({
  patients,
  onView,
  onEdit,
  onDelete,
}) {

  if (patients.length === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "40px",
          background: "#fff",
          borderRadius: "10px",
        }}
      >
        <h3>Aucun patient enregistré</h3>
      </div>
    );
  }

  return (
    <div
      style={{
        overflowX: "auto",
        background: "#fff",
        borderRadius: "10px",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
       <thead>

<tr>

<th>Patient</th>

<th>Age</th>

<th>Sexe</th>

<th>Groupe</th>

<th>Téléphone</th>

<th>Email</th>

<th>Mutuelle</th>

<th>Actions</th>

</tr>

</thead>
 <tbody>

{

patients.map((patient)=>(

<tr key={patient.id}>
    <td>

<strong>

{patient.prenom}

{" "}

{patient.nom}

</strong>

</td>
<td>

{patient.age}

</td>
<td>

{patient.age}

</td>
<td>

{

patient.sexe==="M"

?

"Masculin"

:

"Féminin"

}

</td>
<td>

<GsBadge

gs={patient.groupe_sanguin}

/>

</td>
<td>

{patient.telephone}

</td>
<td>

{patient.email}

</td>
<td>

{patient.mutuelle}

</td>
<td>

<div
style={{
display:"flex",
gap:"8px"
}}
>

<button

style={btnIcon}

onClick={()=>onView(patient)}

>

<Icon

name="eye"

color="#0ea5e9"

/>

</button>

<button

style={btnIcon}

onClick={()=>onEdit(patient)}

>

<Icon

name="edit"

color="#2563eb"

/>

</button>

<button

style={btnIcon}

onClick={()=>onDelete(patient)}

>

<Icon

name="trash"

color="red"

/>

</button>

</div>

</td>
</tr>

))

}

</tbody>

</table>

</div>

);

}

export default PatientTable;


