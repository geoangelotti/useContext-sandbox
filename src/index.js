import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const UserContext = React.createContext();

const App = () => {
  const { firstName, lastName } = {
    firstName: "Dave",
    lastName: "Thomas"
  };

  return (
    <UserContext.Provider value={{ firstName, lastName }}>
      <Main />
    </UserContext.Provider>
  );
};

const Navbar = () => {
  const { firstName, lastName } = useContext(UserContext);

  return (
    <nav>
      <span className="title">Cool App</span>
      <span>
        Hello, {firstName} {lastName}!
      </span>
    </nav>
  );
};

const Main = () => {
  return (
    <>
      <Navbar />
      <main>
        <h2>App Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          aspernatur quos minima, fuga quidem harum consequatur tempora animi
          omnis laborum tenetur, quod dignissimos quis. Ea optio eos expedita
          earum excepturi.
        </p>
      </main>
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
