import { ThemeProvider } from "./configs/theme-provider";
import Home from "./pages/home/Home.jsx"

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Home/>
    </ThemeProvider>
  );
}

export default App;
