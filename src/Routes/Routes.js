import { Routes as RouterRoutes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";

import Rent from "./pages/Rent/Rent";

const Routes = () => {
  return (
    <main>
      <RouterRoutes>
        <Route path="/rent" element={<Rent />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
    </main>
  );
};

export default Routes;
