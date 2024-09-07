import { useEffect, useState } from "react";
import Card from "./components/card";
import axios from "axios";

function App() {
  const BASE_URL = "https://xcountries-backend.azurewebsites.net/all";
  const [countries, setCountries] = useState([]);
  const fetchCountries = async () => {
    try {
      const result = await axios.get(BASE_URL);
      if (result.status === 200) {
        setCountries(result.data);
      }
    } catch (err) {
      console.error("Error fetching data: ");
    }
  };
  useEffect(() => {
    fetchCountries();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBlock: "20px",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      {countries?.map((item, index) => {
        return (
          <div key={index}>
            <Card imgPath={item.flag} alt={item.abbr} title={item.name} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
