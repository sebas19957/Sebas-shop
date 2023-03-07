import { ICity } from "../interfaces";

const listDepartment = [
  {
    name: "Bogotá",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Atlántico",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Huila",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Atlántico",
  },
  {
    name: "Risaralda",
  },
  {
    name: "Santander",
  },
  {
    name: "Cesar",
  },
  {
    name: "Tolima",
  },
  {
    name: "Meta",
  },
  {
    name: "Magdalena",
  },
  {
    name: "Córdoba",
  },
  {
    name: "Caldas",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Nariño",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Huila",
  },
  {
    name: "Quindío",
  },
  {
    name: "Cauca",
  },
  {
    name: "Sucre",
  },
  {
    name: "Santander",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Nariño",
  },
  {
    name: "Santander",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Casanare",
  },
  {
    name: "Risaralda",
  },
  {
    name: "La Guajira",
  },
  {
    name: "Santander",
  },
  {
    name: "Caquetá",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Huila",
  },
  {
    name: "Magdalena",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Chocó",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Bolívar",
  },
  {
    name: "La Guajira",
  },
  {
    name: "La Guajira",
  },
  {
    name: "Santander",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Cauca",
  },
  {
    name: "Cesar",
  },
  {
    name: "Nariño",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Arauca",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Magdalena",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Córdoba",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Atlántico",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Córdoba",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Córdoba",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Caldas",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Tolima",
  },
  {
    name: "Meta",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Risaralda",
  },
  {
    name: "Caquetá",
  },
  {
    name: "San Andrés y Providencia",
  },
  {
    name: "Sucre",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Huila",
  },
  {
    name: "Córdoba",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Guaviare",
  },
  {
    name: "La Guajira",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Córdoba",
  },
  {
    name: "Putumayo",
  },
  {
    name: "Caldas",
  },
  {
    name: "Magdalena",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Caldas",
  },
  {
    name: "Sucre",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Putumayo",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Magdalena",
  },
  {
    name: "Santander",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Putumayo",
  },
  {
    name: "Córdoba",
  },
  {
    name: "Arauca",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Córdoba",
  },
  {
    name: "Sucre",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Córdoba",
  },
  {
    name: "Atlántico",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Santander",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Cesar",
  },
  {
    name: "Nariño",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Cauca",
  },
  {
    name: "Tolima",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Córdoba",
  },
  {
    name: "Córdoba",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Córdoba",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Cauca",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Córdoba",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Casanare",
  },
  {
    name: "Vichada",
  },
  {
    name: "Cauca",
  },
  {
    name: "Nariño",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Quindío",
  },
  {
    name: "Córdoba",
  },
  {
    name: "Córdoba",
  },
  {
    name: "Arauca",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Chocó",
  },
  {
    name: "Nariño",
  },
  {
    name: "Magdalena",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Nariño",
  },
  {
    name: "Huila",
  },
  {
    name: "Cesar",
  },
  {
    name: "Tolima",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "La Guajira",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Cauca",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Sucre",
  },
  {
    name: "La Guajira",
  },
  {
    name: "Cauca",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Tolima",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Meta",
  },
  {
    name: "Cauca",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Córdoba",
  },
  {
    name: "Sucre",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Cauca",
  },
  {
    name: "Huila",
  },
  {
    name: "Caquetá",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Quindío",
  },
  {
    name: "La Guajira",
  },
  {
    name: "Santander",
  },
  {
    name: "Meta",
  },
  {
    name: "Sucre",
  },
  {
    name: "Huila",
  },
  {
    name: "Atlántico",
  },
  {
    name: "Cauca",
  },
  {
    name: "Huila",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Sucre",
  },
  {
    name: "Risaralda",
  },
  {
    name: "Caquetá",
  },
  {
    name: "Córdoba",
  },
  {
    name: "Cauca",
  },
  {
    name: "Magdalena",
  },
  {
    name: "Magdalena",
  },
  {
    name: "Nariño",
  },
  {
    name: "Córdoba",
  },
  {
    name: "Cauca",
  },
  {
    name: "Magdalena",
  },
  {
    name: "Cauca",
  },
  {
    name: "Amazonas",
  },
  {
    name: "Risaralda",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Nariño",
  },
  {
    name: "Magdalena",
  },
  {
    name: "Santander",
  },
  {
    name: "Caldas",
  },
  {
    name: "Tolima",
  },
  {
    name: "Quindío",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Cesar",
  },
  {
    name: "Tolima",
  },
  {
    name: "Tolima",
  },
  {
    name: "Tolima",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Santander",
  },
  {
    name: "Tolima",
  },
  {
    name: "Huila",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Córdoba",
  },
  {
    name: "Chocó",
  },
  {
    name: "Putumayo",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "La Guajira",
  },
  {
    name: "Córdoba",
  },
  {
    name: "Huila",
  },
  {
    name: "Tolima",
  },
  {
    name: "Vaupés",
  },
  {
    name: "Magdalena",
  },
  {
    name: "Atlántico",
  },
  {
    name: "Risaralda",
  },
  {
    name: "Cauca",
  },
  {
    name: "Caldas",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Atlántico",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Atlántico",
  },
  {
    name: "Arauca",
  },
  {
    name: "Cauca",
  },
  {
    name: "Córdoba",
  },
  {
    name: "Sucre",
  },
  {
    name: "Cesar",
  },
  {
    name: "Cauca",
  },
  {
    name: "Caldas",
  },
  {
    name: "Casanare",
  },
  {
    name: "Nariño",
  },
  {
    name: "Chocó",
  },
  {
    name: "Magdalena",
  },
  {
    name: "Meta",
  },
  {
    name: "Atlántico",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Caquetá",
  },
  {
    name: "Meta",
  },
  {
    name: "Nariño",
  },
  {
    name: "Nariño",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Nariño",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Santander",
  },
  {
    name: "Casanare",
  },
  {
    name: "Casanare",
  },
  {
    name: "Huila",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Cesar",
  },
  {
    name: "Guaviare",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Putumayo",
  },
  {
    name: "Caquetá",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Tolima",
  },
  {
    name: "Risaralda",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Tolima",
  },
  {
    name: "Cesar",
  },
  {
    name: "Córdoba",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Nariño",
  },
  {
    name: "Atlántico",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Meta",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Cesar",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Huila",
  },
  {
    name: "Tolima",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Córdoba",
  },
  {
    name: "Caldas",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Cesar",
  },
  {
    name: "Tolima",
  },
  {
    name: "Caquetá",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Cesar",
  },
  {
    name: "Cauca",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Putumayo",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Nariño",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Magdalena",
  },
  {
    name: "Sucre",
  },
  {
    name: "Putumayo",
  },
  {
    name: "Nariño",
  },
  {
    name: "Caquetá",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Cauca",
  },
  {
    name: "Cauca",
  },
  {
    name: "Caldas",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Huila",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Magdalena",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Cauca",
  },
  {
    name: "Nariño",
  },
  {
    name: "Sucre",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Huila",
  },
  {
    name: "Nariño",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Tolima",
  },
  {
    name: "Guainía",
  },
  {
    name: "La Guajira",
  },
  {
    name: "Atlántico",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Chocó",
  },
  {
    name: "Santander",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Atlántico",
  },
  {
    name: "Santander",
  },
  {
    name: "Cesar",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Vichada",
  },
  {
    name: "Sucre",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Vichada",
  },
  {
    name: "Magdalena",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Magdalena",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Santander",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Chocó",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Magdalena",
  },
  {
    name: "Atlántico",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Chocó",
  },
  {
    name: "Cesar",
  },
  {
    name: "Nariño",
  },
  {
    name: "Cauca",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Quindío",
  },
  {
    name: "Atlántico",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Cauca",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Santander",
  },
  {
    name: "Magdalena",
  },
  {
    name: "Atlántico",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Sucre",
  },
  {
    name: "Santander",
  },
  {
    name: "Santander",
  },
  {
    name: "Atlántico",
  },
  {
    name: "Santander",
  },
  {
    name: "Sucre",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Tolima",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Sucre",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Santander",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Santander",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Atlántico",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Santander",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Santander",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Magdalena",
  },
  {
    name: "Chocó",
  },
  {
    name: "Tolima",
  },
  {
    name: "Santander",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Nariño",
  },
  {
    name: "Santander",
  },
  {
    name: "Atlántico",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Casanare",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Santander",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Meta",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Magdalena",
  },
  {
    name: "Santander",
  },
  {
    name: "Casanare",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Santander",
  },
  {
    name: "Tolima",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Santander",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Santander",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Quindío",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Amazonas",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Santander",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Sucre",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Santander",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Quindío",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Atlántico",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Vichada",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Arauca",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Santander",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Santander",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Antioquia",
  },
  {
    name: "La Guajira",
  },
  {
    name: "Arauca",
  },
  {
    name: "Santander",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Santander",
  },
  {
    name: "Santander",
  },
  {
    name: "Chocó",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Santander",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Santander",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Santander",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Santander",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Atlántico",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Atlántico",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Quindío",
  },
  {
    name: "Caldas",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Quindío",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Atlántico",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Santander",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Nariño",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Cauca",
  },
  {
    name: "Córdoba",
  },
  {
    name: "Caldas",
  },
  {
    name: "Atlántico",
  },
  {
    name: "San Andrés y Providencia",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Cauca",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Meta",
  },
  {
    name: "Putumayo",
  },
  {
    name: "Córdoba",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Nariño",
  },
  {
    name: "Cauca",
  },
  {
    name: "Nariño",
  },
  {
    name: "Casanare",
  },
  {
    name: "Tolima",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Nariño",
  },
  {
    name: "Caldas",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Nariño",
  },
  {
    name: "Risaralda",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Nariño",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Nariño",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Caldas",
  },
  {
    name: "Magdalena",
  },
  {
    name: "Tolima",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Santander",
  },
  {
    name: "Nariño",
  },
  {
    name: "Nariño",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Nariño",
  },
  {
    name: "Nariño",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Caldas",
  },
  {
    name: "Nariño",
  },
  {
    name: "Risaralda",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Córdoba",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Tolima",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Cauca",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Caldas",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Cauca",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Córdoba",
  },
  {
    name: "Caldas",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Cauca",
  },
  {
    name: "Cauca",
  },
  {
    name: "Nariño",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Cesar",
  },
  {
    name: "Santander",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Nariño",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "La Guajira",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Magdalena",
  },
  {
    name: "Nariño",
  },
  {
    name: "Caldas",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Nariño",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Caldas",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Huila",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Putumayo",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Cauca",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Sucre",
  },
  {
    name: "Sucre",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Risaralda",
  },
  {
    name: "Sucre",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Nariño",
  },
  {
    name: "Sucre",
  },
  {
    name: "Nariño",
  },
  {
    name: "Nariño",
  },
  {
    name: "Sucre",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Cesar",
  },
  {
    name: "Nariño",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Santander",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Santander",
  },
  {
    name: "Sucre",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Risaralda",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Huila",
  },
  {
    name: "Tolima",
  },
  {
    name: "Nariño",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Caldas",
  },
  {
    name: "Huila",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Arauca",
  },
  {
    name: "Santander",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Cauca",
  },
  {
    name: "Tolima",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Cauca",
  },
  {
    name: "Nariño",
  },
  {
    name: "Sucre",
  },
  {
    name: "Santander",
  },
  {
    name: "Nariño",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Boyacá",
  },
  {
    name: "La Guajira",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Quindío",
  },
  {
    name: "Magdalena",
  },
  {
    name: "Tolima",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Córdoba",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Santander",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Huila",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Huila",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Santander",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Caldas",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Nariño",
  },
  {
    name: "Tolima",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Santander",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Cesar",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Tolima",
  },
  {
    name: "Cauca",
  },
  {
    name: "Sucre",
  },
  {
    name: "Nariño",
  },
  {
    name: "Tolima",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Risaralda",
  },
  {
    name: "La Guajira",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Chocó",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Tolima",
  },
  {
    name: "Cauca",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Huila",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Tolima",
  },
  {
    name: "Caldas",
  },
  {
    name: "La Guajira",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Córdoba",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Santander",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Magdalena",
  },
  {
    name: "Sucre",
  },
  {
    name: "Huila",
  },
  {
    name: "Santander",
  },
  {
    name: "Caldas",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Huila",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Santander",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Nariño",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Santander",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Putumayo",
  },
  {
    name: "Caldas",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Nariño",
  },
  {
    name: "Santander",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Magdalena",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Nariño",
  },
  {
    name: "Nariño",
  },
  {
    name: "Tolima",
  },
  {
    name: "Huila",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Cauca",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Cauca",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Huila",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Nariño",
  },
  {
    name: "La Guajira",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Putumayo",
  },
  {
    name: "Nariño",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Santander",
  },
  {
    name: "Tolima",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Huila",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Putumayo",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Tolima",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Tolima",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Tolima",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Tolima",
  },
  {
    name: "Magdalena",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Huila",
  },
  {
    name: "Caldas",
  },
  {
    name: "Cauca",
  },
  {
    name: "Huila",
  },
  {
    name: "Chocó",
  },
  {
    name: "Nariño",
  },
  {
    name: "Huila",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Cesar",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Caldas",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Santander",
  },
  {
    name: "Santander",
  },
  {
    name: "Quindío",
  },
  {
    name: "Chocó",
  },
  {
    name: "Cauca",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Meta",
  },
  {
    name: "Nariño",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Nariño",
  },
  {
    name: "Santander",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Meta",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Santander",
  },
  {
    name: "Caldas",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Santander",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Cesar",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Santander",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Risaralda",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Cauca",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Sucre",
  },
  {
    name: "Magdalena",
  },
  {
    name: "Cesar",
  },
  {
    name: "Santander",
  },
  {
    name: "Santander",
  },
  {
    name: "Tolima",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Santander",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Meta",
  },
  {
    name: "Caquetá",
  },
  {
    name: "Huila",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Casanare",
  },
  {
    name: "Santander",
  },
  {
    name: "Huila",
  },
  {
    name: "Tolima",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Huila",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Magdalena",
  },
  {
    name: "Tolima",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Huila",
  },
  {
    name: "Chocó",
  },
  {
    name: "Nariño",
  },
  {
    name: "Meta",
  },
  {
    name: "Chocó",
  },
  {
    name: "Santander",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Santander",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Quindío",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Nariño",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Santander",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Meta",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Cesar",
  },
  {
    name: "Nariño",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Cesar",
  },
  {
    name: "Tolima",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Valle del Cauca",
  },
  {
    name: "Cesar",
  },
  {
    name: "Chocó",
  },
  {
    name: "Nariño",
  },
  {
    name: "Huila",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Risaralda",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Santander",
  },
  {
    name: "Tolima",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Santander",
  },
  {
    name: "Cesar",
  },
  {
    name: "Cauca",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Santander",
  },
  {
    name: "Santander",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Putumayo",
  },
  {
    name: "Meta",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Santander",
  },
  {
    name: "Tolima",
  },
  {
    name: "Santander",
  },
  {
    name: "Santander",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Huila",
  },
  {
    name: "Cesar",
  },
  {
    name: "Caquetá",
  },
  {
    name: "Nariño",
  },
  {
    name: "Meta",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Santander",
  },
  {
    name: "Casanare",
  },
  {
    name: "Chocó",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Santander",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Chocó",
  },
  {
    name: "Nariño",
  },
  {
    name: "Chocó",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Chocó",
  },
  {
    name: "Santander",
  },
  {
    name: "Magdalena",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Huila",
  },
  {
    name: "Nariño",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Chocó",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Nariño",
  },
  {
    name: "Magdalena",
  },
  {
    name: "Bolívar",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Tolima",
  },
  {
    name: "Santander",
  },
  {
    name: "Huila",
  },
  {
    name: "Chocó",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Caquetá",
  },
  {
    name: "Nariño",
  },
  {
    name: "Caquetá",
  },
  {
    name: "Santander",
  },
  {
    name: "Tolima",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Casanare",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Cesar",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Chocó",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Caquetá",
  },
  {
    name: "Tolima",
  },
  {
    name: "Tolima",
  },
  {
    name: "Santander",
  },
  {
    name: "Chocó",
  },
  {
    name: "Caquetá",
  },
  {
    name: "Caquetá",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Santander",
  },
  {
    name: "Santander",
  },
  {
    name: "Santander",
  },
  {
    name: "Meta",
  },
  {
    name: "Nariño",
  },
  {
    name: "Santander",
  },
  {
    name: "Meta",
  },
  {
    name: "Santander",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Meta",
  },
  {
    name: "Meta",
  },
  {
    name: "Caldas",
  },
  {
    name: "Norte de Santander",
  },
  {
    name: "Casanare",
  },
  {
    name: "Casanare",
  },
  {
    name: "Cundinamarca",
  },
  {
    name: "Cauca",
  },
  {
    name: "Chocó",
  },
  {
    name: "Meta",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Huila",
  },
  {
    name: "Caquetá",
  },
  {
    name: "Casanare",
  },
  {
    name: "Casanare",
  },
  {
    name: "Meta",
  },
  {
    name: "Tolima",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Chocó",
  },
  {
    name: "Meta",
  },
  {
    name: "Casanare",
  },
  {
    name: "Meta",
  },
  {
    name: "Meta",
  },
  {
    name: "Chocó",
  },
  {
    name: "Meta",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Meta",
  },
  {
    name: "Meta",
  },
  {
    name: "Casanare",
  },
  {
    name: "Casanare",
  },
  {
    name: "Antioquia",
  },
  {
    name: "Cauca",
  },
  {
    name: "Chocó",
  },
  {
    name: "Casanare",
  },
  {
    name: "Chocó",
  },
  {
    name: "Boyacá",
  },
  {
    name: "Chocó",
  },
  {
    name: "Chocó",
  },
  {
    name: "Putumayo",
  },
  {
    name: "Meta",
  },
  {
    name: "Guaviare",
  },
  {
    name: "Vaupés",
  },
  {
    name: "Guaviare",
  },
  {
    name: "Vaupés",
  },
  {
    name: "Córdoba",
  },
];

const noRepeat: {}[] = [];

listDepartment.forEach(function (objeto) {
  if (
    !noRepeat.some(function (obj: any) {
      return obj.name === objeto.name;
    })
  ) {
    noRepeat.push(objeto);
  }
});

noRepeat.sort((a: any, b: any) => {
  let nombreA = a.name.toUpperCase(); // convierte los nombres a mayúsculas para evitar problemas de mayúsculas/minúsculas
  let nombreB = b.name.toUpperCase();

  if (nombreA < nombreB) {
    return -1;
  }

  if (nombreA > nombreB) {
    return 1;
  }

  // si los nombres son iguales, no hace falta cambiar la posición
  return 0;
});

export const departments = noRepeat;
