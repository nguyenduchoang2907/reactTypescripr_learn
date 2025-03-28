import { Flowbite, ThemeModeScript } from "flowbite-react";
import { RouterProvider } from "react-router-dom";
import customTheme from "./utils/theme/custom-theme";
import router from "./routes/Router"; // Đảm bảo file này export đúng

function App() {
  return (
    <>
      <ThemeModeScript />
      <Flowbite theme={{ theme: customTheme }}>
        <RouterProvider router={router} />
      </Flowbite>
    </>
  );
}

export default App;
