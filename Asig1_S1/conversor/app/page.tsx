import Conversiones from "./components/conversiones";

export default function Resultados() {

  const temperatura = 40;


  const fahrenheit = (temperatura * 9/5) + 32;
  const kelvin = temperatura + 273.15;
  const kelvinAFahrenheit = (kelvin - 273.15) * 9/5 + 32;

  const resultados = [
  `Celsius a Fahrenheit: ${fahrenheit} F`,
  `Celsius a Kelvin: ${kelvin} K`,
  `Kelvin a Fahrenheit: ${kelvinAFahrenheit} F`
  ];

  return (
    <div>
      <h1>Resultados de calculos</h1>
      <Conversiones resultados={resultados} />
    </div>
  );
}