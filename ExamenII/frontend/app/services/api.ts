import axios from "axios";
const API = "http://localhost:5000";

export const getPromedioCategoria = async () => {
    const response = await axios.get(`${API}/promediocate`);
    return response.data;
};
export const getCantidadMarca = async () => {
    const response = await axios.get(`${API}/conteomarca`);
    return response.data;
};