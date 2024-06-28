import React from "react";
import { Button, Typography } from "antd";

const { Text } = Typography;

const ErrorContainer = ({ backToHome }) => (
  <div className="error-container">
    <div className="padding-div">
      <div>
        <Text>Ocorreu um erro ao carregar os dados solicitados.</Text>
        <Text>Verifique os dados inseridos e tente novamente.</Text>
      </div>
      <div className="padding">

        <Button type="primary" onClick={backToHome} className="button otherButton">
          Retornar à página inicial
        </Button>
      </div>
    </div>
  </div>
);

export default ErrorContainer;
