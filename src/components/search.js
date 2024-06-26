import React from "react";
import { Input, Button, Typography, message } from "antd";

const { Title, Text } = Typography;

const Search = ({ city, setCity, handleSearch }) => {

  const validInput = async () => {
    if (city) {
      const response = await fetch(`${process.env.REACT_APP_RAPID_URL}?&offset=0&limit=1&namePrefix=${city}`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": process.env.REACT_APP_RAPID_KEY,
          "x-rapidapi-host": process.env.REACT_APP_RAPID_HOST
        }
      });
      const data = await response.json();
      const dataFilter = data.data.length > 0 ? data.data.filter(citie => citie.name.toLowerCase() === city.toLowerCase()) : [];
      if (dataFilter.length> 0) {
        handleSearch();
      } else {
        message.error("Cidade inválida")
      }
    }
  };

  return (
    <div className="search-container">
    <Title level={2}>Previsão do Tempo</Title>
    <Text>Verifique agora a previsão do tempo na sua cidade!</Text>
      <Input
        type="text"
        placeholder="Digite o nome da sua cidade"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="input"
      />
      <Button type="primary" onClick={validInput} className="button">
        Pesquisar
      </Button>
  </div>
  )
};


export default Search;
