import "./App.css";
import Section from "./assets/components/Section";
import data from "./assets/data.json";
import logo from "./assets/img/logo-a79c3484.png";
function App() {
  return (
    <>
      <div>
        <div className="header">
          <img src={logo} alt="netflix" className="logo" />
        </div>
        {data.map((type) => {
          return <Section category={type.category} images={type.images} />;
        })}
      </div>
    </>
  );
}

export default App;
