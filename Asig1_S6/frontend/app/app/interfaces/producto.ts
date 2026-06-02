export interface ValorTotalProducto {
    productType: string;
    valor_total: number;
}

export interface ValorTotalMarca {
    brandCode: string;
    valor_total: number;
}

export interface PromedioLinea {
    lineCode: string;
    promedio_valor: number;
    cantidad_productos: number;
}