import { Routes, Route } from "react-router-dom";

import Layout from "./Clinique/Layout";

import Dashboard from "./Pages/Dashboard";
import Patients from "./Pages/Patients";
import Medecins from "./Pages/Medecins";
import RendezVous from "./Pages/RendezVous";
import NotFound from "./Pages/NotFound";

function App() {

  return (

    <Routes>

      <Route element={<Layout />}>

        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/patients"
          element={<Patients />}
        />

        <Route
          path="/medecins"
          element={<Medecins />}
        />

        <Route
          path="/rendezvous"
          element={<RendezVous />}
        />

      </Route>

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>

  );

}

export default App;