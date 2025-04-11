import "./App.css";
import { Container, CssBaseline, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Links from "./features/links/Links.tsx";

const App = () => {
  return (
    <>
      <CssBaseline />
      <main>
        <Container maxWidth="xl" sx={{ mt: 5 }}>
          <Routes>
            <Route path="/" element={<Links />} />
            <Route
              path="*"
              element={<Typography variant="h4">Not found page</Typography>}
            />
          </Routes>
        </Container>
      </main>
    </>
  );
};

export default App;
