use graficos;
Select * From Product;
Select * From employees;


Select COUNT(*) AS total_productos From Product;


Select SUM(`value`) AS valor_total From Product;


Select AVG(`value`) AS promedio_productos From Product;


Select * From Product
Order by `value` Desc Limit 1;


Select * From Product
order by `value` ASC Limit 1;


Select valueCurrency, COUNT(*) AS cantidad_productos From Product
Group by valueCurrency;


Select valueCurrency, AVG(`value`) AS promedio_valor From Product
Group by valueCurrency;


Select productType, SUM(`value`) AS valor_total From Product
Group by productType;


Select productType, MAX(`value`) AS valor_maximo, MIN(`value`) AS valor_minimo From Product
Group by productType;


Select `categoryCode`, AVG(`value`) AS promedio_valor From Product
Group by `categoryCode`;


Select Status, COUNT(*) AS cantidad_productos From Product
Group by status;

Select Status `brandCode`, SUM(`value`) AS valor_total From Product
Group by `brandCode`;


Select COUNT(DISTINCT partNumber) AS codigos_unicos From Product;


Select `lineCode`, AVG(`value`) AS promedio_valor,
    COUNT(*) AS cantidad_productos From Product
Group by `lineCode`;


Select plannerCode, MAX(`value`) AS valor_maximo From Product
Group by plannerCode;