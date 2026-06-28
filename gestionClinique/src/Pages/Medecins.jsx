import { useState } from "react";
import { useClinic } from "../Context/ClinicContext";

import MedecinForm from "../Clinique/MedecinForm";
import MedecinTable from "../Clinique/MedecinTable";
import Modal from "../Clinique/Modal";
import ConfirmDialog from "../Clinique/ConfirmDialog";

function Medecins() {

  const {
    medecins,
    addMedecin,
    updateMedecin,
    deleteMedecin,
  } = useClinic();

  const [openModal, setOpenModal] = useState(false);
  const [selectedMedecin, setSelectedMedecin] = useState(null);
  const [toDelete, setToDelete] = useState(null);
  const [search, setSearch] = useState("");

  // Ajouter
  const handleAdd = (data) => {
    addMedecin(data);
    setOpenModal(false);
  };

  // Modifier
  const handleUpdate = (data) => {
    updateMedecin({
      ...selectedMedecin,
      ...data,
    });

    setSelectedMedecin(null);
    setOpenModal(false);
  };

  // Supprimer
  const handleDelete = () => {
    deleteMedecin(toDelete.id);
    setToDelete(null);
  };

  // Recherche
  const filteredMedecins = medecins.filter((m) => {
    const text = (
      m.nom +
      " " +
      m.prenom +
      " " +
      m.specialite
    ).toLowerCase();

    return text.includes(search.toLowerCase());
  });

  return (
    <div>

      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <h1>Gestion des Médecins</h1>

        <button
          onClick={() => {
            setSelectedMedecin(null);
            setOpenModal(true);
          }}
        >
          Nouveau médecin
        </button>
      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Rechercher..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "15px",
        }}
      />

      {/* TABLE */}
      <MedecinTable
        medecins={filteredMedecins}
        onView={(m) => alert(`Dr. ${m.prenom} ${m.nom}`)}
        onEdit={(m) => {
          setSelectedMedecin(m);
          setOpenModal(true);
        }}
        onDelete={(m) => setToDelete(m)}
      />

      {/* MODAL FORM */}
      {openModal && (
        <Modal
          title={
            selectedMedecin
              ? "Modifier médecin"
              : "Ajouter médecin"
          }
          onClose={() => setOpenModal(false)}
        >
          <MedecinForm
            initial={selectedMedecin}
            onSubmit={
              selectedMedecin
                ? handleUpdate
                : handleAdd
            }
            onClose={() => setOpenModal(false)}
          />
        </Modal>
      )}

      {/* CONFIRM DELETE */}
      {toDelete && (
        <ConfirmDialog
          message="Voulez-vous vraiment supprimer ce médecin ?"
          onConfirm={handleDelete}
          onCancel={() => setToDelete(null)}
        />
      )}

    </div>
  );
}

export default Medecins;