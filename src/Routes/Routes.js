import { Routes as RouterRoutes, Route } from "react-router-dom";

import Rent from "./pages/Rent/Rent";

const Routes = () => {
  return (
    <main>
      <RouterRoutes>
        <Route path="/rent" element={<Rent />} />
      </RouterRoutes>
    </main>
  );
};

export default Routes;
