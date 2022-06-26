import { Theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import { ToastContainer } from "react-toastify";

import Routes from "./routes";

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <Routes />
      <ToastContainer />
    </Theme>
  );
}

export default App;
