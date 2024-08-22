// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { DrawerBuilder } from "./components/drawer-builder/drawer-builder";
import "./App.css";
import { Button } from "./components/ui/button";
import { useDrawerStore } from "./lib/stores/useDrawerStore";

function App() {
  // const [count, setCount] = useState(0);

  const { toggleDrawer } = useDrawerStore();

  return (
    <>
      <Button className="text-black" onClick={() => toggleDrawer()}>
        hola bello
      </Button>

      <DrawerBuilder>
        <div></div>{" "}
      </DrawerBuilder>
    </>
  );
}

export default App;
