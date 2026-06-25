use graficos;

Select * From Product;

Select brandCode, COUNT(*) AS cantidad
From product
Group By brandCode;

Select categoryCode, AVG(value) AS promedio
From product
Group By categoryCode;
