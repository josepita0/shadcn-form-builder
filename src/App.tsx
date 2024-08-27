import "./App.css";
import { useList } from "./lib/services";

function App() {
  // const [count, setCount] = useState(0);

  const { data } = useList(`character`);

  console.log({ data });

  return <>hola</>;
}

export default App;
