import MainPage from "./app/components/pages/mainPage";
import NotFound from "./app/components/ui/notFound";
import "./app/styles/app.scss";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
