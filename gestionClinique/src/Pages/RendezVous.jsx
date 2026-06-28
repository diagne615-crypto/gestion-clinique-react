import { useState } from "react";
import { useClinic } from "../Context/ClinicContext";

import RendezVousForm from "../Clinique/RendezVousForm";
import RendezVousTable from "../Clinique/RendezVousTable";
import Modal from "../Clinique/Modal";
import ConfirmDialog from "../Clinique/ConfirmDialog";
import { exportRendezVousPDF } from "../Utils/pdfRendezVous";

function RendezVous() {

  const {
    rendezVous,
    addRendezVous,
    updateRendezVous,
    deleteRendezVous,
    patients,
    medecins,
  } = useClinic();

  const [openModal, setOpenModal] = useState(false);
  const [selectedRdv, setSelectedRdv] = useState(null);
  const [toDelete, setToDelete] = useState(null);
  const [search, setSearch] = useState("");

  // Ajouter
  const handleAdd = (data) => {
    addRendezVous(data);
    setOpenModal(false);
  };

  // Modifier
  const handleUpdate = (data) => {

    updateRendezVous({
      ...selectedRdv,
      ...data,
    });

    setSelectedRdv(null);
    setOpenModal(false);

  };

  // Supprimer
  const handleDelete = () => {

    deleteRendezVous(toDelete.id);

    setToDelete(null);

  };

  // Recherche
  const filteredRdv = rendezVous.filter((rdv) => {

    const patient = patients.find(
      (p) => p.id == rdv.patientId
    );

    const medecin = medecins.find(
      (m) => m.id == rdv.medecinId
    );

    const texte = `
      ${patient?.prenom || ""}
      ${patient?.nom || ""}
      ${medecin?.prenom || ""}
      ${medecin?.nom || ""}
      ${rdv.date}
      ${rdv.statut}
    `.toLowerCase();

    return texte.includes(search.toLowerCase());

  });

  return (

    <div>

      {/* HEADER */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >

        <h1>Gestion des Rendez-vous</h1>

        <button
          onClick={()=>{
            setSelectedRdv(null);
            setOpenModal(true);
          }}
        >

          Nouveau rendez-vous

        </button>

      </div>

      {/* RECHERCHE */}

      <input

        type="text"

        placeholder="Rechercher un rendez-vous..."

        value={search}

        onChange={(e)=>setSearch(e.target.value)}

        style={{
          width:"100%",
          padding:"10px",
          marginBottom:"20px"
        }}

      />

      {/* TABLEAU */}

      <RendezVousTable

        rendezVous={filteredRdv}

        onView={(rdv)=>{

          const patient = patients.find(
            p=>p.id==rdv.patientId
          );

          const medecin = medecins.find(
            m=>m.id==rdv.medecinId
          );

          alert(

`Patient : ${patient?.prenom} ${patient?.nom}

Médecin : Dr. ${medecin?.prenom} ${medecin?.nom}

Date : ${rdv.date}

Heure : ${rdv.heure}

Statut : ${rdv.statut}

Motif : ${rdv.motif}`

          );

        }}

        onEdit={(rdv)=>{

          setSelectedRdv(rdv);

          setOpenModal(true);

        }}

        onDelete={(rdv)=>{

          setToDelete(rdv);

        }}

      />

      {/* MODAL */}

      {

        openModal &&

        <Modal

          title={

            selectedRdv

            ?

            "Modifier un rendez-vous"

            :

            "Planifier un rendez-vous"

          }

          onClose={()=>setOpenModal(false)}

        >

          <RendezVousForm

            initial={selectedRdv}

            onSubmit={

              selectedRdv

              ?

              handleUpdate

              :

              handleAdd

            }

            onClose={()=>setOpenModal(false)}

          />

        </Modal>

      }

      {/* CONFIRMATION */}

      {

        toDelete &&

        <ConfirmDialog

          message="Voulez-vous supprimer ce rendez-vous ?"

          onConfirm={handleDelete}

          onCancel={()=>setToDelete(null)}

        />

      }
      <button
  onClick={() =>
    exportRendezVousPDF(
      rendezVous,
      patients,
      medecins
    )
  }
>
  Exporter PDF
</button>

    </div>
    

  );

}

export default RendezVous;