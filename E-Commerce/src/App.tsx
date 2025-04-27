import { Toaster } from "./components/ui/sonner";
import AllRoutes from "./routes/AllRoutes";
import Navigation from "./shared/components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <AllRoutes />
      <Toaster position="top-right" richColors />
    </>
  );
}

export default App;
