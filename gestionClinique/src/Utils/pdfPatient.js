import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const exportPatientsPDF = (patients) => {
  const doc = new jsPDF();

  // Titre
  doc.setFontSize(18);
  doc.text("Liste des Patients", 14, 20);

  // Date de génération
  doc.setFontSize(10);
  doc.text(
    `Date : ${new Date().toLocaleDateString()}`,
    14,
    28
  );

  // Tableau
  autoTable(doc, {
    startY: 35,
    head: [[
      "Nom",
      "Prénom",
      "Sexe",
      "Téléphone",
      "Email",
      "Groupe Sanguin"
    ]],
    body: patients.map((patient) => [
      patient.nom,
      patient.prenom,
      patient.sexe,
      patient.telephone,
      patient.email || "-",
      patient.groupeSanguin || "-"
    ]),
  });

  doc.save("Liste_Patients.pdf");
};