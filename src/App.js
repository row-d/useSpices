import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "routes/AppRouter";

const App = () => {
  return (
    <BrowserRouter className="flow">
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
