import React, { useState } from "react";
import { Layout } from "antd";
import Search from "../components/search";
import Loading from "../components/loading";
import Error from "../components/error";
import Forecast from "../components/forecast";

const { Content } = Layout;

function HomePage() {
  const [city, setCity] = useState("");
  const [weatherForecast, setWeatherForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(true);

  const handleSearch = () => {
    setIsLoading(true);
    setHasError(false);
    fetch(
      `${process.env.REACT_APP_BASE_URL}current.json?key=${process.env.REACT_APP_KEY}&q=${city}&lang=pt`
    )
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error('Error fetching data');
        }
      })
      .then((data) => {
        setIsLoading(false);
        setWeatherForecast(data);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
        setHasError(true);
      });
  };

  const backToHome = () => {
    setCity("");
    setWeatherForecast(null);
    setIsLoading(false);
    setHasError(false);
  };

  return (
    <>
      <h4 className="title text-pop-up-top">Weather Hub</h4>
      <Layout className="container">
        <Content className="content">
          {!isLoading && !hasError && !weatherForecast && (
            <Search city={city} setCity={setCity} handleSearch={handleSearch} />
          )}
          {isLoading && <Loading />}
          {!isLoading && hasError && <Error backToHome={backToHome} />}
          {!isLoading && weatherForecast && (
            <Forecast weatherForecast={weatherForecast} backToHome={backToHome} className="animate__animated animate__fadeIn"/>
          )}
        </Content>
      </Layout>
    </>
  );
}

export default HomePage;
