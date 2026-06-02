import axios from "axios";

const API_URL = "http://localhost:3000";

export const getValorTotalProducto = async () => {
    const response = await axios.get(`${API_URL}/valor-total-tipo-producto`);
    return response.data;
}

export const getValorTotalMarca = async () => {
    const response = await axios.get(`${API_URL}/valor-total-marca`);
    return response.data;
}

export const getPromedioLinea = async () => {
    const response = await axios.get(`${API_URL}/promedio-linea`);
    return response.data;
}