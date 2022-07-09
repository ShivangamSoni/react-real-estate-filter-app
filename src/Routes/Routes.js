import { Routes as RouterRoutes, Route, Navigate } from "react-router-dom";

import Rent from "./pages/Rent/Rent";
import NotFound from "./pages/NotFound/NotFound";

const Routes = () => {
  return (
    <main>
      <RouterRoutes>
        <Route path="/" element={<Navigate to="/rent" />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
    </main>
  );
};

export default Routes;
