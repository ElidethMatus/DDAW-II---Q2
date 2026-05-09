export default function Conversiones({ resultados }: { resultados: string[] }) {
  return (
    <ul>
      <li>{resultados[0]}</li>
      <li>{resultados[1]}</li>
      <li>{resultados[2]}</li>
    </ul>
  );
}