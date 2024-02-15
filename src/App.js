import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Drake from "./pages/Drake";
import Grandview from "./pages/Grandview";
import Dmacc from "./pages/Dmacc";

// layouts
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element={<RootLayout />}>
      <Route index element={<Home />}/>
      <Route path="drake" element={<Drake />}/>
      <Route path="grandview" element={<Grandview />}/>
      <Route path="dmacc" element={<Dmacc />}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
