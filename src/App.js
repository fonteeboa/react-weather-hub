  import React, { useState } from "react";
  import './App.css';
  
  function App() {
    const [city, setCity] = useState("");
    const [weatherForecast, setWeatherForecast] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleSearch = () => {
      setIsLoading(true);
      fetch(
        `${process.env.REACT_APP_BASE_URL}current.json?key=${process.env.REACT_APP_KEY}&q=${city}&lang=pt`
      )
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          } else if (res.status === 400) {
            console.log(res);
            return setHasError(true);
          }
        })
        .then((data) => {
          console.log(data);
          setIsLoading(false);
          setWeatherForecast(data);
        });
    };
  
    const backToHome = () => {
      setIsLoading(false);
      setHasError(false);
      setWeatherForecast(null);
      setCity("");
    }
  
    return (
      <>
      <div>
        <div className="container body">
          <div className="box rounded-circle">
            {!isLoading && !hasError && !weatherForecast && <div className="centralized">
              <div className="paddingCss justify-content-md-center">
                <h1 className="col-md-9 text-center">Previsão do Tempo</h1>
                <p className="col-md-9 text-center">Verique agora a previsão do tempo na sua cidade!</p>
                <br />
                <p className="col-md-9 text-center">
                  Digite da sua cidade no campo abaixo o nome da sua cidade em seguida
                  clique em pesquisar.
                </p>
                <div className="col-md-9 text-center">
                  <input
                    type="text"
                    className="form-control"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="col-md-9 text-center paddingbtn">
                  <button className="btn btn-primary btn-lg form-control" onClick={handleSearch}>
                    Pesquisar
                  </button>
                </div>
              </div>
            </div>}
  
            {!isLoading && !hasError && weatherForecast ? (
              <>
                <div className="paddingResp">
                  <div className="text-center">
                    <p className="lead">
                    {weatherForecast.location.name}
                    </p>
                    <p className="lead">
                      {weatherForecast.location.region + ', ' + weatherForecast.location.country}
                    </p>

                    <div> 
                      <img
                        src={`${weatherForecast.current.condition.icon}`}
                        alt="Weather Icon"
                      />
                      <p className="lead">
                        {weatherForecast.current.condition.text}
                      </p>
                    </div>
                    <p className="lead">
                      Temperatura: {weatherForecast.current.temp_c}&#8451; - Sensação Térmica: {weatherForecast.current.feelslike_c}&#8451;
                    </p>
                    <div>
                      {weatherForecast.current.wind_dir === 'S' && <p className="lead">Umidade: {weatherForecast.current.humidity}% - Vento: &#129107;{weatherForecast.current.wind_kph} km/h</p>}
                      {weatherForecast.current.wind_dir === 'SW' && <p className="lead">Umidade: {weatherForecast.current.humidity}% - Vento: &#129111;{weatherForecast.current.wind_kph} km/h</p>}
                      {weatherForecast.current.wind_dir === 'SSW' && <p className="lead">Umidade: {weatherForecast.current.humidity}% - Vento: &#129111;{weatherForecast.current.wind_kph} km/h</p>}
                      {weatherForecast.current.wind_dir === 'WSW' && <p className="lead">Umidade: {weatherForecast.current.humidity}% - Vento: &#129111;{weatherForecast.current.wind_kph} km/h</p>}
                      {weatherForecast.current.wind_dir === 'W' && <p className="lead">Umidade: {weatherForecast.current.humidity}% - Vento: &#129104;{weatherForecast.current.wind_kph} km/h</p>}
                      {weatherForecast.current.wind_dir === 'NW' && <p className="lead">Umidade: {weatherForecast.current.humidity}% - Vento: &#129108;{weatherForecast.current.wind_kph} km/h</p>}
                      {weatherForecast.current.wind_dir === 'WNW' && <p className="lead">Umidade: {weatherForecast.current.humidity}% - Vento: &#129108;{weatherForecast.current.wind_kph} km/h</p>}
                      {weatherForecast.current.wind_dir === 'NNW' && <p className="lead">Umidade: {weatherForecast.current.humidity}% - Vento: &#129108;{weatherForecast.current.wind_kph} km/h</p>}
                      {weatherForecast.current.wind_dir === 'N' && <p className="lead">Umidade: {weatherForecast.current.humidity}% - Vento: &#129105;{weatherForecast.current.wind_kph} km/h</p>}
                      {weatherForecast.current.wind_dir === 'NE' && <p className="lead">Umidade: {weatherForecast.current.humidity}% - Vento: &#129109;{weatherForecast.current.wind_kph} km/h</p>}
                      {weatherForecast.current.wind_dir === 'NNE' && <p className="lead">Umidade: {weatherForecast.current.humidity}% - Vento: &#129109;{weatherForecast.current.wind_kph} km/h</p>}
                      {weatherForecast.current.wind_dir === 'ENE' && <p className="lead">Umidade: {weatherForecast.current.humidity}% - Vento: &#129109;{weatherForecast.current.wind_kph} km/h</p>}
                      {weatherForecast.current.wind_dir === 'E' && <p className="lead">Umidade: {weatherForecast.current.humidity}% - Vento: &#129122;{weatherForecast.current.wind_kph} km/h</p>}
                      {weatherForecast.current.wind_dir === 'SE' && <p className="lead">Umidade: {weatherForecast.current.humidity}% - Vento: &#129110;{weatherForecast.current.wind_kph} km/h</p>}
                      {weatherForecast.current.wind_dir === 'ESE' && <p className="lead">Umidade: {weatherForecast.current.humidity}% - Vento: &#129110;{weatherForecast.current.wind_kph} km/h</p>}
                      {weatherForecast.current.wind_dir === 'SSE' && <p className="lead">Umidade: {weatherForecast.current.humidity}% - Vento: &#129110;{weatherForecast.current.wind_kph} km/h /</p>}
                    </div>
                  </div>
                </div>
                <div className="loadingScreen paddingResp">
                  <div className="col-md-7 text-center">
                    <button className="btn btn-lg form-control btn-primary " onClick={backToHome}>
                      Retornar a página inicial
                    </button>
                  </div>  
                </div>
              </>) : null
            }
  
            {isLoading && !hasError && 
              <div className="loadingScreen paddingTop">
                <span className="spinner-grow text-primary" role="status" aria-hidden="true"></span>
                <h3>Aguarde...</h3>
              </div>
            }
            
            {!isLoading && hasError && 
              <div className="loadingScreen paddingTop">
                <div className="col-md-9 text-center">
                  <p >Ocorreu um erro a carregar os dados solicitados</p>
                  <p >Verifique os dados inseridos e tente novamente</p>
                  <button className="btn btn-lg form-control btn-primary " onClick={backToHome}>
                    Retornar a página inicial
                  </button>
                </div>  
              </div>
            }
          </div>
        </div>
  
      </div>
      </>
    );
  }
  
  export default App;
  