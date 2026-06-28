import { createContext, useContext, useEffect, useState } from "react";

const ClinicContext = createContext();

export function ClinicProvider({ children }) {

  /* ============================
      ETATS
  ============================ */

  const [patients, setPatients] = useState(() => {
    const data = localStorage.getItem("patients");
    return data ? JSON.parse(data) : [];
  });

  const [medecins, setMedecins] = useState(() => {
    const data = localStorage.getItem("medecins");
    return data ? JSON.parse(data) : [];
  });

  const [rendezVous, setRendezVous] = useState(() => {
    const data = localStorage.getItem("rendezVous");
    return data ? JSON.parse(data) : [];
  });

  /* ============================
      LOCAL STORAGE
  ============================ */

  useEffect(() => {
    localStorage.setItem(
      "patients",
      JSON.stringify(patients)
    );
  }, [patients]);

  useEffect(() => {
    localStorage.setItem(
      "medecins",
      JSON.stringify(medecins)
    );
  }, [medecins]);

  useEffect(() => {
    localStorage.setItem(
      "rendezVous",
      JSON.stringify(rendezVous)
    );
  }, [rendezVous]);

  /* ============================
      PATIENTS
  ============================ */

  const addPatient = (patient) => {
    setPatients((old) => [
      ...old,
      {
        id: Date.now(),
        ...patient,
      },
    ]);
  };

  const updatePatient = (patient) => {
    setPatients((old) =>
      old.map((p) =>
        p.id === patient.id ? patient : p
      )
    );
  };

  const deletePatient = (id) => {
    setPatients((old) =>
      old.filter((p) => p.id !== id)
    );

    // Supprime aussi les rendez-vous liés
    setRendezVous((old) =>
      old.filter((rdv) => rdv.patientId !== id)
    );
  };

  /* ============================
      MEDECINS
  ============================ */

  const addMedecin = (medecin) => {
    setMedecins((old) => [
      ...old,
      {
        id: Date.now(),
        ...medecin,
      },
    ]);
  };

  const updateMedecin = (medecin) => {
    setMedecins((old) =>
      old.map((m) =>
        m.id === medecin.id ? medecin : m
      )
    );
  };

  const deleteMedecin = (id) => {
    setMedecins((old) =>
      old.filter((m) => m.id !== id)
    );

    // Supprime aussi les rendez-vous liés
    setRendezVous((old) =>
      old.filter((rdv) => rdv.medecinId !== id)
    );
  };

  /* ============================
      RENDEZ-VOUS
  ============================ */

  const addRendezVous = (rdv) => {
    setRendezVous((old) => [
      ...old,
      {
        id: Date.now(),
        ...rdv,
      },
    ]);
  };

  const updateRendezVous = (rdv) => {
    setRendezVous((old) =>
      old.map((r) =>
        r.id === rdv.id ? rdv : r
      )
    );
  };

  const deleteRendezVous = (id) => {
    setRendezVous((old) =>
      old.filter((r) => r.id !== id)
    );
  };

  /* ============================
      PROVIDER
  ============================ */

  return (
    <ClinicContext.Provider
      value={{
        // Données
        patients,
        medecins,
        rendezVous,

        // Patients
        addPatient,
        updatePatient,
        deletePatient,

        // Médecins
        addMedecin,
        updateMedecin,
        deleteMedecin,

        // Rendez-vous
        addRendezVous,
        updateRendezVous,
        deleteRendezVous,
      }}
    >
      {children}
    </ClinicContext.Provider>
  );
}

export function useClinic() {
  return useContext(ClinicContext);
}