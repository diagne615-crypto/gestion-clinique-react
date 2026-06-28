import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const exportRendezVousPDF = (
  rendezVous,
  patients,
  medecins
) => {

  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Liste des Rendez-vous", 14, 20);

  doc.setFontSize(10);
  doc.text(
    `Date : ${new Date().toLocaleDateString()}`,
    14,
    28
  );

  autoTable(doc, {
    startY: 35,

    head: [[
      "Patient",
      "Médecin",
      "Date",
      "Heure",
      "Statut"
    ]],

    body: rendezVous.map((rdv) => {

      const patient = patients.find(
        (p) => p.id === rdv.patientId
      );

      const medecin = medecins.find(
        (m) => m.id === rdv.medecinId
      );

      return [
        patient
          ? `${patient.prenom} ${patient.nom}`
          : "-",

        medecin
          ? `Dr. ${medecin.prenom} ${medecin.nom}`
          : "-",

        rdv.date,
        rdv.heure,
        rdv.statut,
      ];

    }),
  });

  doc.save("Liste_RendezVous.pdf");
};