import React from "react";
import Card from "./components/Card";
import './App.css';
import img_mysql from "./imagens/mysql.png";
import img_php from "./imagens/php.png";
import img_rn from "./imagens/react-native.png";
import img_react from "./imagens/react.png";

export default function App(){
  return(
    <div className="container">
      <Card title="MySQL" text="Gerenciador de Banco de Dados Relacional" link="https://www.mysql.com" img={img_mysql} />
      <Card title="PHP" text="Linguagem script para Web" link="https://www.php.com" img={img_php} />
      <Card title="React.js" text="Framework para front-end Web" link="https://www.pt-br.reactjs.org" img={img_react} />
      <Card title="React Native" text="Framework para front-end Mobile" link="https://www.reactnative.dev" img={img_rn} />

    </div>
  );
}