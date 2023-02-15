import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation";
import Home from "./routes/home/home";
import SignIn from "./routes/sign-in/SignIn";

function App() {
  const Shop = () => {
    return <h1>I am the shop page</h1>;
  };

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
