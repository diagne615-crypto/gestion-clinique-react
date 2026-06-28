import { useState } from "react";

import PatientForm from "../Clinique/PatientForm";
import PatientTable from "../Clinique/PatientTable";
import Modal from "../Clinique/Modal";
import ConfirmDialog from "../Clinique/ConfirmDialog";
import { exportPatientsPDF } from "../Utils/pdfPatient";
import { toast } from "react-toastify";

function Patients() {

  const [patients, setPatients] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);

  const [patientEdit, setPatientEdit] = useState(null);

  const [patientDelete, setPatientDelete] = useState(null);

  const [search, setSearch] = useState("");

  // Ajouter
  const addPatient = (data) => {

    const nouveauPatient = {
      id: Date.now(),
      ...data,
      dateCreation: new Date().toLocaleDateString(),
    };

    setPatients([...patients, nouveauPatient]);

    setModalOpen(false);
  };

  // Modifier
  const updatePatient = (data) => {

    setPatients(
      patients.map((p) =>
        p.id === patientEdit.id
          ? { ...patientEdit, ...data }
          : p
      )
    );

    setPatientEdit(null);

    setModalOpen(false);

  };

  // Supprimer
  const deletePatient = () => {

    setPatients(
      patients.filter(
        (p) => p.id !== patientDelete.id
      )
    );

    setPatientDelete(null);

  };

  // Recherche
  const patientsFiltres = patients.filter((patient) => {

    const texte =
      (
        patient.prenom +
        " " +
        patient.nom
      ).toLowerCase();

    return texte.includes(search.toLowerCase());

  });

  return (
    <div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <h1>Gestion des Patients</h1>

        <button
          onClick={() => {
            setPatientEdit(null);
            setModalOpen(true);
          }}
        >
          Nouveau patient
        </button>
      </div>

      <input
        type="text"
        placeholder="Rechercher..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <br />
      <br />

      <PatientTable
        patients={patientsFiltres}
        onView={(patient) =>
          alert(
            patient.prenom +
              " " +
              patient.nom
          )
        }
        onEdit={(patient) => {
          setPatientEdit(patient);
          setModalOpen(true);
        }}
        onDelete={(patient) =>
          setPatientDelete(patient)
        }
      />

      {modalOpen && (
        <Modal
          title={
            patientEdit
              ? "Modifier un patient"
              : "Ajouter un patient"
          }
          onClose={() =>
            setModalOpen(false)
          }
        >
          <PatientForm
            initial={patientEdit}
            onSubmit={
              patientEdit
                ? updatePatient
                : addPatient
            }
            onClose={() =>
              setModalOpen(false)
            }
          />
        </Modal>
      )}

      {patientDelete && (
        <ConfirmDialog
          message="Voulez-vous vraiment supprimer ce patient ?"
          onConfirm={deletePatient}
          onCancel={() =>
            setPatientDelete(null)
          }
        />
      )}
      <button
  onClick={() => exportPatientsPDF(patients)}
>
  Exporter PDF
</button>


    </div>
  );
}

export default Patients;