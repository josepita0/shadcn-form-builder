import "./App.css";
import { DrawerBuilder } from "./components/drawer-builder/drawer-builder";
import { useDrawerStore } from "./lib/stores/useDrawerStore";

function App() {
  // const [count, setCount] = useState(0);

  const { toggleDrawer } = useDrawerStore();

  return (
    <>
      <DrawerBuilder>
        <div></div>{" "}
      </DrawerBuilder>
    </>
  );
}

export default App;
