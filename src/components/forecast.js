import React from "react";
import { Row, Col, Button } from "antd";
import { RollbackOutlined } from '@ant-design/icons';

const Forecast = ({ weatherForecast, backToHome }) => {
  return (
    <div className="forecast-container">
      <Row justify="end">
        <Button type="primary" onClick={backToHome} className="button forecast-buttom">
          <RollbackOutlined />
        </Button>
      </Row>
      <Row className="card-header" justify="center">
        <Col span={24} className="location">
          <span>{weatherForecast.location.name}, {weatherForecast.location.region}<br />{weatherForecast.location.country}</span>
        </Col>
        <Row>
          <Col span={24}>
            <span className="weather-condition">{weatherForecast.current.condition.text}</span>
          </Col>
          <Col span={24}>
             <img src={weatherForecast.current.condition.icon} alt="Weather Icon" className="" />
          </Col>
        </Row>
        <Row justify="center" className="weather-details">
          <Col span={25}>
            <Row>
              <span>Sensação térmica: {weatherForecast.current.feelslike_c}°</span>
            </Row>
            <Row>
              <span>Umidade: {weatherForecast.current.humidity}%</span>
            </Row>
            <Row>
              <span>Vento: {weatherForecast.current.wind_kph} km/h {weatherForecast.current.wind_dir}</span>
            </Row>
          </Col>
        </Row>
      </Row>
      <Row justify="end" className="card-footer">
        <span className="temp">{weatherForecast.current.temp_c}°</span>
        <div className="temp-scale">
          <span>Celcius</span>
        </div>
      </Row>
    </div>
  );
};

export default Forecast;
