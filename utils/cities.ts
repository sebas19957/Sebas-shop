const ciudades = [
  {
    city: "Bogotá",
    department: "Bogotá",
  },
  {
    city: "Medellín",
    department: "Antioquia",
  },
  {
    city: "Cali",
    department: "Valle del Cauca",
  },
  {
    city: "Barranquilla",
    department: "Atlántico",
  },
  {
    city: "Cartagena",
    department: "Bolívar",
  },
  {
    city: "Soacha",
    department: "Cundinamarca",
  },
  {
    city: "Palermo",
    department: "Huila",
  },
  {
    city: "Cúcuta",
    department: "Norte de Santander",
  },
  {
    city: "Soledad",
    department: "Atlántico",
  },
  {
    city: "Pereira",
    department: "Risaralda",
  },
  {
    city: "Bucaramanga",
    department: "Santander",
  },
  {
    city: "Valledupar",
    department: "Cesar",
  },
  {
    city: "Ibagué",
    department: "Tolima",
  },
  {
    city: "Villavicencio",
    department: "Meta",
  },
  {
    city: "Santa Marta",
    department: "Magdalena",
  },
  {
    city: "Montería",
    department: "Córdoba",
  },
  {
    city: "Manizales",
    department: "Caldas",
  },
  {
    city: "Buenaventura",
    department: "Valle del Cauca",
  },
  {
    city: "Pasto",
    department: "Nariño",
  },
  {
    city: "Bello",
    department: "Antioquia",
  },
  {
    city: "Neiva",
    department: "Huila",
  },
  {
    city: "Armenia",
    department: "Quindío",
  },
  {
    city: "Popayán",
    department: "Cauca",
  },
  {
    city: "Sincelejo",
    department: "Sucre",
  },
  {
    city: "Floridablanca",
    department: "Santander",
  },
  {
    city: "Itagüí",
    department: "Antioquia",
  },
  {
    city: "Envigado",
    department: "Antioquia",
  },
  {
    city: "Tuluá",
    department: "Valle del Cauca",
  },
  {
    city: "Tumaco",
    department: "Nariño",
  },
  {
    city: "Barrancabermeja",
    department: "Santander",
  },
  {
    city: "Tunja",
    department: "Boyacá",
  },
  {
    city: "Zipaquirá",
    department: "Cundinamarca",
  },
  {
    city: "Turbo",
    department: "Antioquia",
  },
  {
    city: "Yopal",
    department: "Casanare",
  },
  {
    city: "Dosquebradas",
    department: "Risaralda",
  },
  {
    city: "Ríohacha",
    department: "La Guajira",
  },
  {
    city: "Girón",
    department: "Santander",
  },
  {
    city: "Florencia",
    department: "Caquetá",
  },
  {
    city: "Fusagasugá",
    department: "Cundinamarca",
  },
  {
    city: "Cartago",
    department: "Valle del Cauca",
  },
  {
    city: "Pitalito",
    department: "Huila",
  },
  {
    city: "Ciénaga",
    department: "Magdalena",
  },
  {
    city: "Sogamoso",
    department: "Boyacá",
  },
  {
    city: "Quibdó",
    department: "Chocó",
  },
  {
    city: "Girardot",
    department: "Cundinamarca",
  },
  {
    city: "Duitama",
    department: "Boyacá",
  },
  {
    city: "Magangué",
    department: "Bolívar",
  },
  {
    city: "Maicao",
    department: "La Guajira",
  },
  {
    city: "Uribia",
    department: "La Guajira",
  },
  {
    city: "Piedecuesta",
    department: "Santander",
  },
  {
    city: "Facatativá",
    department: "Cundinamarca",
  },
  {
    city: "Guadalajara de Buga",
    department: "Valle del Cauca",
  },
  {
    city: "Madrid",
    department: "Cundinamarca",
  },
  {
    city: "Santander de Quilichao",
    department: "Cauca",
  },
  {
    city: "Aguachica",
    department: "Cesar",
  },
  {
    city: "Ipiales",
    department: "Nariño",
  },
  {
    city: "Chía",
    department: "Cundinamarca",
  },
  {
    city: "Jamundí",
    department: "Valle del Cauca",
  },
  {
    city: "Arauca",
    department: "Arauca",
  },
  {
    city: "Yumbo",
    department: "Valle del Cauca",
  },
  {
    city: "Mosquera",
    department: "Cundinamarca",
  },
  {
    city: "Fundación",
    department: "Magdalena",
  },
  {
    city: "Ocaña",
    department: "Norte de Santander",
  },
  {
    city: "Montelíbano",
    department: "Córdoba",
  },
  {
    city: "Chiquinquirá",
    department: "Boyacá",
  },
  {
    city: "Sabanalarga",
    department: "Atlántico",
  },
  {
    city: "Chigorodó",
    department: "Antioquia",
  },
  {
    city: "Cereté",
    department: "Córdoba",
  },
  {
    city: "Caldas",
    department: "Antioquia",
  },
  {
    city: "Funza",
    department: "Cundinamarca",
  },
  {
    city: "Los Patios",
    department: "Norte de Santander",
  },
  {
    city: "Tierralta",
    department: "Córdoba",
  },
  {
    city: "El Carmen de Bolívar",
    department: "Bolívar",
  },
  {
    city: "La Dorada",
    department: "Caldas",
  },
  {
    city: "Arjona",
    department: "Bolívar",
  },
  {
    city: "Turbaco",
    department: "Bolívar",
  },
  {
    city: "Espinal",
    department: "Tolima",
  },
  {
    city: "Acacías",
    department: "Meta",
  },
  {
    city: "Copacabana",
    department: "Antioquia",
  },
  {
    city: "Santa Rosa de Cabal",
    department: "Risaralda",
  },
  {
    city: "San Vicente del Caguán",
    department: "Caquetá",
  },
  {
    city: "San Andrés",
    department: "San Andrés y Providencia",
  },
  {
    city: "Corozal",
    department: "Sucre",
  },
  {
    city: "Villa del Rosario",
    department: "Norte de Santander",
  },
  {
    city: "Garzón",
    department: "Huila",
  },
  {
    city: "Planeta Rica",
    department: "Córdoba",
  },
  {
    city: "Necoclí",
    department: "Antioquia",
  },
  {
    city: "San José del Guaviare",
    department: "Guaviare",
  },
  {
    city: "Manaure",
    department: "La Guajira",
  },
  {
    city: "Marinilla",
    department: "Antioquia",
  },
  {
    city: "Ciénaga de Oro",
    department: "Córdoba",
  },
  {
    city: "Puerto Asís",
    department: "Putumayo",
  },
  {
    city: "Riosucio",
    department: "Caldas",
  },
  {
    city: "Plato",
    department: "Magdalena",
  },
  {
    city: "Carepa",
    department: "Antioquia",
  },
  {
    city: "Cajicá",
    department: "Cundinamarca",
  },
  {
    city: "Villamaría",
    department: "Caldas",
  },
  {
    city: "San Marcos",
    department: "Sucre",
  },
  {
    city: "Girardota",
    department: "Antioquia",
  },
  {
    city: "Florida",
    department: "Valle del Cauca",
  },
  {
    city: "Pamplona",
    department: "Norte de Santander",
  },
  {
    city: "Pradera",
    department: "Valle del Cauca",
  },
  {
    city: "Orito",
    department: "Putumayo",
  },
  {
    city: "Puerto Boyacá",
    department: "Boyacá",
  },
  {
    city: "El Banco",
    department: "Magdalena",
  },
  {
    city: "San Gil",
    department: "Santander",
  },
  {
    city: "Sabaneta",
    department: "Antioquia",
  },
  {
    city: "Valle del Guamuez",
    department: "Putumayo",
  },
  {
    city: "Puerto Libertador",
    department: "Córdoba",
  },
  {
    city: "Tame",
    department: "Arauca",
  },
  {
    city: "Barbosa",
    department: "Antioquia",
  },
  {
    city: "Lorica",
    department: "Córdoba",
  },
  {
    city: "San Onofre",
    department: "Sucre",
  },
  {
    city: "Guarne",
    department: "Antioquia",
  },
  {
    city: "El Bagre",
    department: "Antioquia",
  },
  {
    city: "Chinú",
    department: "Córdoba",
  },
  {
    city: "Baranoa",
    department: "Atlántico",
  },
  {
    city: "Puerto Berrío",
    department: "Antioquia",
  },
  {
    city: "Cimitarra",
    department: "Santander",
  },
  {
    city: "María la Baja",
    department: "Bolívar",
  },
  {
    city: "Agustín Codazzi",
    department: "Cesar",
  },
  {
    city: "Samaniego",
    department: "Nariño",
  },
  {
    city: "Carmen de Viboral",
    department: "Antioquia",
  },
  {
    city: "Yarumal",
    department: "Antioquia",
  },
  {
    city: "La Vega",
    department: "Cauca",
  },
  {
    city: "Chaparral",
    department: "Tolima",
  },
  {
    city: "Andes",
    department: "Antioquia",
  },
  {
    city: "San Andrés de Sotavento",
    department: "Córdoba",
  },
  {
    city: "Ayapel",
    department: "Córdoba",
  },
  {
    city: "Urrao",
    department: "Antioquia",
  },
  {
    city: "Zarzal",
    department: "Valle del Cauca",
  },
  {
    city: "Valencia",
    department: "Córdoba",
  },
  {
    city: "Roldanillo",
    department: "Valle del Cauca",
  },
  {
    city: "Puerto Tejada",
    department: "Cauca",
  },
  {
    city: "Santa Rosa del Sur",
    department: "Bolívar",
  },
  {
    city: "San Pelayo",
    department: "Córdoba",
  },
  {
    city: "Arboletes",
    department: "Antioquia",
  },
  {
    city: "Villeta",
    department: "Cundinamarca",
  },
  {
    city: "Aguazul",
    department: "Casanare",
  },
  {
    city: "Cumaribo",
    department: "Vichada",
  },
  {
    city: "Miranda",
    department: "Cauca",
  },
  {
    city: "El Charco",
    department: "Nariño",
  },
  {
    city: "Cáceres",
    department: "Antioquia",
  },
  {
    city: "Montenegro",
    department: "Quindío",
  },
  {
    city: "Pueblo Nuevo",
    department: "Córdoba",
  },
  {
    city: "Tuchín",
    department: "Córdoba",
  },
  {
    city: "Arauquita",
    department: "Arauca",
  },
  {
    city: "Guaduas",
    department: "Cundinamarca",
  },
  {
    city: "Pie de Pató",
    department: "Chocó",
  },
  {
    city: "Cumbal",
    department: "Nariño",
  },
  {
    city: "Aracataca",
    department: "Magdalena",
  },
  {
    city: "La Unión",
    department: "Valle del Cauca",
  },
  {
    city: "Túquerres",
    department: "Nariño",
  },
  {
    city: "Acevedo",
    department: "Huila",
  },
  {
    city: "Bosconia",
    department: "Cesar",
  },
  {
    city: "Líbano",
    department: "Tolima",
  },
  {
    city: "Villa de San Diego de Ubaté",
    department: "Cundinamarca",
  },
  {
    city: "San Juan del Cesar",
    department: "La Guajira",
  },
  {
    city: "Tarazá",
    department: "Antioquia",
  },
  {
    city: "Cajibío",
    department: "Cauca",
  },
  {
    city: "Segovia",
    department: "Antioquia",
  },
  {
    city: "Sibaté",
    department: "Cundinamarca",
  },
  {
    city: "Sampués",
    department: "Sucre",
  },
  {
    city: "Dibulla",
    department: "La Guajira",
  },
  {
    city: "El Bordo",
    department: "Cauca",
  },
  {
    city: "Santa Rosa de Osos",
    department: "Antioquia",
  },
  {
    city: "Tibú",
    department: "Norte de Santander",
  },
  {
    city: "Melgar",
    department: "Tolima",
  },
  {
    city: "Dagua",
    department: "Valle del Cauca",
  },
  {
    city: "La Macarena",
    department: "Meta",
  },
  {
    city: "Belalcázar",
    department: "Cauca",
  },
  {
    city: "Sonsón",
    department: "Antioquia",
  },
  {
    city: "San Pablo",
    department: "Bolívar",
  },
  {
    city: "San Bernardo del Viento",
    department: "Córdoba",
  },
  {
    city: "Santiago de Tolú",
    department: "Sucre",
  },
  {
    city: "Guacarí",
    department: "Valle del Cauca",
  },
  {
    city: "Timbío",
    department: "Cauca",
  },
  {
    city: "Gigante",
    department: "Huila",
  },
  {
    city: "Cartagena del Chairá",
    department: "Caquetá",
  },
  {
    city: "Tocancipá",
    department: "Cundinamarca",
  },
  {
    city: "Yarumal",
    department: "Antioquia",
  },
  {
    city: "Quimbaya",
    department: "Quindío",
  },
  {
    city: "Fonseca",
    department: "La Guajira",
  },
  {
    city: "San Vicente de Chucurí",
    department: "Santander",
  },
  {
    city: "Puerto López",
    department: "Meta",
  },
  {
    city: "San Luis de Sincé",
    department: "Sucre",
  },
  {
    city: "Campoalegre",
    department: "Huila",
  },
  {
    city: "Sabanagrande",
    department: "Atlántico",
  },
  {
    city: "Caldono",
    department: "Cauca",
  },
  {
    city: "San Agustín",
    department: "Huila",
  },
  {
    city: "San Juan Nepomuceno",
    department: "Bolívar",
  },
  {
    city: "Majagual",
    department: "Sucre",
  },
  {
    city: "Quinchía",
    department: "Risaralda",
  },
  {
    city: "Puerto Rico",
    department: "Caquetá",
  },
  {
    city: "San Antero",
    department: "Córdoba",
  },
  {
    city: "Corinto",
    department: "Cauca",
  },
  {
    city: "Pivijay",
    department: "Magdalena",
  },
  {
    city: "Puebloviejo",
    department: "Magdalena",
  },
  {
    city: "Bocas de Satinga",
    department: "Nariño",
  },
  {
    city: "Puerto Escondido",
    department: "Córdoba",
  },
  {
    city: "Silvia",
    department: "Cauca",
  },
  {
    city: "El Difícil",
    department: "Magdalena",
  },
  {
    city: "Inzá",
    department: "Cauca",
  },
  {
    city: "Leticia",
    department: "Amazonas",
  },
  {
    city: "La Virginia",
    department: "Risaralda",
  },
  {
    city: "San Pedro de Urabá",
    department: "Antioquia",
  },
  {
    city: "Remedios",
    department: "Antioquia",
  },
  {
    city: "Paipa",
    department: "Boyacá",
  },
  {
    city: "Guachavés",
    department: "Nariño",
  },
  {
    city: "Sitionuevo",
    department: "Magdalena",
  },
  {
    city: "Puerto Wilches",
    department: "Santander",
  },
  {
    city: "Neira",
    department: "Caldas",
  },
  {
    city: "Guamo",
    department: "Tolima",
  },
  {
    city: "Circasia",
    department: "Quindío",
  },
  {
    city: "Amagá",
    department: "Antioquia",
  },
  {
    city: "Chimichagua",
    department: "Cesar",
  },
  {
    city: "Planadas",
    department: "Tolima",
  },
  {
    city: "Fresno",
    department: "Tolima",
  },
  {
    city: "Purificación",
    department: "Tolima",
  },
  {
    city: "Tabio",
    department: "Cundinamarca",
  },
  {
    city: "Barbosa",
    department: "Santander",
  },
  {
    city: "Flandes",
    department: "Tolima",
  },
  {
    city: "Aipe",
    department: "Huila",
  },
  {
    city: "Sopó",
    department: "Cundinamarca",
  },
  {
    city: "Moñitos",
    department: "Córdoba",
  },
  {
    city: "Riosucio",
    department: "Chocó",
  },
  {
    city: "La Dorada",
    department: "Putumayo",
  },
  {
    city: "La Calera",
    department: "Cundinamarca",
  },
  {
    city: "Caicedonia",
    department: "Valle del Cauca",
  },
  {
    city: "Hatonuevo",
    department: "La Guajira",
  },
  {
    city: "San Carlos",
    department: "Córdoba",
  },
  {
    city: "Isnos",
    department: "Huila",
  },
  {
    city: "Coyaima",
    department: "Tolima",
  },
  {
    city: "Mitú",
    department: "Vaupés",
  },
  {
    city: "Guamal",
    department: "Magdalena",
  },
  {
    city: "Luruaco",
    department: "Atlántico",
  },
  {
    city: "Belén de Umbría",
    department: "Risaralda",
  },
  {
    city: "Argelia",
    department: "Cauca",
  },
  {
    city: "Supía",
    department: "Caldas",
  },
  {
    city: "Ciudad Bolívar",
    department: "Antioquia",
  },
  {
    city: "Repelón",
    department: "Atlántico",
  },
  {
    city: "San Juan de Urabá",
    department: "Antioquia",
  },
  {
    city: "Puerto Colombia",
    department: "Atlántico",
  },
  {
    city: "Fortul",
    department: "Arauca",
  },
  {
    city: "Morales",
    department: "Cauca",
  },
  {
    city: "Los Córdobas",
    department: "Córdoba",
  },
  {
    city: "San Benito Abad",
    department: "Sucre",
  },
  {
    city: "San Alberto",
    department: "Cesar",
  },
  {
    city: "Balboa",
    department: "Cauca",
  },
  {
    city: "Pensilvania",
    department: "Caldas",
  },
  {
    city: "Paz de Ariporo",
    department: "Casanare",
  },
  {
    city: "Buesaco",
    department: "Nariño",
  },
  {
    city: "Istmina",
    department: "Chocó",
  },
  {
    city: "Santa Ana",
    department: "Magdalena",
  },
  {
    city: "San Martín",
    department: "Meta",
  },
  {
    city: "Palmar de Varela",
    department: "Atlántico",
  },
  {
    city: "Nechí",
    department: "Antioquia",
  },
  {
    city: "Yolombó",
    department: "Antioquia",
  },
  {
    city: "Solano",
    department: "Caquetá",
  },
  {
    city: "Vistahermosa",
    department: "Meta",
  },
  {
    city: "San José",
    department: "Nariño",
  },
  {
    city: "La Unión",
    department: "Nariño",
  },
  {
    city: "Chocontá",
    department: "Cundinamarca",
  },
  {
    city: "Sandoná",
    department: "Nariño",
  },
  {
    city: "Pinillos",
    department: "Bolívar",
  },
  {
    city: "Socorro",
    department: "Santander",
  },
  {
    city: "Tauramena",
    department: "Casanare",
  },
  {
    city: "Villanueva",
    department: "Casanare",
  },
  {
    city: "Algeciras",
    department: "Huila",
  },
  {
    city: "Santa Rosa",
    department: "Bolívar",
  },
  {
    city: "Pueblo Bello",
    department: "Cesar",
  },
  {
    city: "El Retorno",
    department: "Guaviare",
  },
  {
    city: "Valdivia",
    department: "Antioquia",
  },
  {
    city: "Puerto Guzmán",
    department: "Putumayo",
  },
  {
    city: "La Montañita",
    department: "Caquetá",
  },
  {
    city: "Donmatías",
    department: "Antioquia",
  },
  {
    city: "Rioblanco",
    department: "Tolima",
  },
  {
    city: "Marsella",
    department: "Risaralda",
  },
  {
    city: "Cogua",
    department: "Cundinamarca",
  },
  {
    city: "El Zulia",
    department: "Norte de Santander",
  },
  {
    city: "Honda",
    department: "Tolima",
  },
  {
    city: "El Paso",
    department: "Cesar",
  },
  {
    city: "Canalete",
    department: "Córdoba",
  },
  {
    city: "Teorama",
    department: "Norte de Santander",
  },
  {
    city: "San José",
    department: "Nariño",
  },
  {
    city: "Ponedera",
    department: "Atlántico",
  },
  {
    city: "Alcalá",
    department: "Valle del Cauca",
  },
  {
    city: "Puerto Concordia",
    department: "Meta",
  },
  {
    city: "Achí",
    department: "Bolívar",
  },
  {
    city: "Curumaní",
    department: "Cesar",
  },
  {
    city: "Dabeiba",
    department: "Antioquia",
  },
  {
    city: "Guadalupe",
    department: "Huila",
  },
  {
    city: "Ataco",
    department: "Tolima",
  },
  {
    city: "Santa Fe de Antioquia",
    department: "Antioquia",
  },
  {
    city: "Amalfi",
    department: "Antioquia",
  },
  {
    city: "Buenavista",
    department: "Córdoba",
  },
  {
    city: "Manzanares",
    department: "Caldas",
  },
  {
    city: "Sardinata",
    department: "Norte de Santander",
  },
  {
    city: "Mutatá",
    department: "Antioquia",
  },
  {
    city: "La Jagua de Ibirico",
    department: "Cesar",
  },
  {
    city: "Natagaima",
    department: "Tolima",
  },
  {
    city: "El Doncello",
    department: "Caquetá",
  },
  {
    city: "El Colegio",
    department: "Cundinamarca",
  },
  {
    city: "Pailitas",
    department: "Cesar",
  },
  {
    city: "Timbiquí",
    department: "Cauca",
  },
  {
    city: "Tiquisio",
    department: "Bolívar",
  },
  {
    city: "Mocoa",
    department: "Putumayo",
  },
  {
    city: "Silvania",
    department: "Cundinamarca",
  },
  {
    city: "Taminango",
    department: "Nariño",
  },
  {
    city: "Ginebra",
    department: "Valle del Cauca",
  },
  {
    city: "Puerto Triunfo",
    department: "Antioquia",
  },
  {
    city: "San Jacinto",
    department: "Bolívar",
  },
  {
    city: "Nueva Granada",
    department: "Magdalena",
  },
  {
    city: "Galeras",
    department: "Sucre",
  },
  {
    city: "Villagarzón",
    department: "Putumayo",
  },
  {
    city: "San Bernardo",
    department: "Nariño",
  },
  {
    city: "El Paujíl",
    department: "Caquetá",
  },
  {
    city: "Santa Bárbara",
    department: "Antioquia",
  },
  {
    city: "Moniquirá",
    department: "Boyacá",
  },
  {
    city: "Almaguer",
    department: "Cauca",
  },
  {
    city: "Totoró",
    department: "Cauca",
  },
  {
    city: "Aguadas",
    department: "Caldas",
  },
  {
    city: "Montecristo",
    department: "Bolívar",
  },
  {
    city: "Suaza",
    department: "Huila",
  },
  {
    city: "Villapinzón",
    department: "Cundinamarca",
  },
  {
    city: "Fredonia",
    department: "Antioquia",
  },
  {
    city: "El Retén",
    department: "Magdalena",
  },
  {
    city: "Bugalagrande",
    department: "Valle del Cauca",
  },
  {
    city: "López",
    department: "Cauca",
  },
  {
    city: "Sotomayor",
    department: "Nariño",
  },
  {
    city: "Ovejas",
    department: "Sucre",
  },
  {
    city: "Samacá",
    department: "Boyacá",
  },
  {
    city: "Timaná",
    department: "Huila",
  },
  {
    city: "San Lorenzo",
    department: "Nariño",
  },
  {
    city: "Concordia",
    department: "Antioquia",
  },
  {
    city: "Simití",
    department: "Bolívar",
  },
  {
    city: "Tenjo",
    department: "Cundinamarca",
  },
  {
    city: "Rovira",
    department: "Tolima",
  },
  {
    city: "Inírida",
    department: "Guainía",
  },
  {
    city: "Urumita",
    department: "La Guajira",
  },
  {
    city: "Polonuevo",
    department: "Atlántico",
  },
  {
    city: "La Unión",
    department: "Antioquia",
  },
  {
    city: "Tadó",
    department: "Chocó",
  },
  {
    city: "Vélez",
    department: "Santander",
  },
  {
    city: "Tocaima",
    department: "Cundinamarca",
  },
  {
    city: "Villa de Leyva",
    department: "Boyacá",
  },
  {
    city: "Campo de la Cruz",
    department: "Atlántico",
  },
  {
    city: "Sabana de Torres",
    department: "Santander",
  },
  {
    city: "Pelaya",
    department: "Cesar",
  },
  {
    city: "Salgar",
    department: "Antioquia",
  },
  {
    city: "La Primavera",
    department: "Vichada",
  },
  {
    city: "Guaranda",
    department: "Sucre",
  },
  {
    city: "Suesca",
    department: "Cundinamarca",
  },
  {
    city: "Betulia",
    department: "Antioquia",
  },
  {
    city: "El Rosal",
    department: "Cundinamarca",
  },
  {
    city: "Retiro",
    department: "Antioquia",
  },
  {
    city: "Puerto Carreño",
    department: "Vichada",
  },
  {
    city: "El Piñón",
    department: "Magdalena",
  },
  {
    city: "Anorí",
    department: "Antioquia",
  },
  {
    city: "Aquitania",
    department: "Boyacá",
  },
  {
    city: "Chivolo",
    department: "Magdalena",
  },
  {
    city: "Guasca",
    department: "Cundinamarca",
  },
  {
    city: "Landázuri",
    department: "Santander",
  },
  {
    city: "Támesis",
    department: "Antioquia",
  },
  {
    city: "Obando",
    department: "Valle del Cauca",
  },
  {
    city: "Condoto",
    department: "Chocó",
  },
  {
    city: "Sopetrán",
    department: "Antioquia",
  },
  {
    city: "Tenerife",
    department: "Magdalena",
  },
  {
    city: "Juan de Acosta",
    department: "Atlántico",
  },
  {
    city: "Titiribí",
    department: "Antioquia",
  },
  {
    city: "El Carmen de Atrato",
    department: "Chocó",
  },
  {
    city: "Río de Oro",
    department: "Cesar",
  },
  {
    city: "Córdoba",
    department: "Nariño",
  },
  {
    city: "Guapí",
    department: "Cauca",
  },
  {
    city: "Jardín",
    department: "Antioquia",
  },
  {
    city: "Altos del Rosario",
    department: "Bolívar",
  },
  {
    city: "Filandia",
    department: "Quindío",
  },
  {
    city: "Manatí",
    department: "Atlántico",
  },
  {
    city: "San Jacinto del Cauca",
    department: "Bolívar",
  },
  {
    city: "Rosas",
    department: "Cauca",
  },
  {
    city: "Anolaima",
    department: "Cundinamarca",
  },
  {
    city: "Los Santos",
    department: "Santander",
  },
  {
    city: "Santa Bárbara de Pinto",
    department: "Magdalena",
  },
  {
    city: "Candelaria",
    department: "Atlántico",
  },
  {
    city: "Saboyá",
    department: "Boyacá",
  },
  {
    city: "Hatillo de Loba",
    department: "Bolívar",
  },
  {
    city: "Córdoba",
    department: "Bolívar",
  },
  {
    city: "Ebéjico",
    department: "Antioquia",
  },
  {
    city: "Caimito",
    department: "Sucre",
  },
  {
    city: "Curití",
    department: "Santander",
  },
  {
    city: "Oiba",
    department: "Santander",
  },
  {
    city: "Santa Lucía",
    department: "Atlántico",
  },
  {
    city: "Puente Nacional",
    department: "Santander",
  },
  {
    city: "La Unión",
    department: "Sucre",
  },
  {
    city: "Cisneros",
    department: "Antioquia",
  },
  {
    city: "Guayabal",
    department: "Tolima",
  },
  {
    city: "Talaigua Nuevo",
    department: "Bolívar",
  },
  {
    city: "Coveñas",
    department: "Sucre",
  },
  {
    city: "Bojacá",
    department: "Cundinamarca",
  },
  {
    city: "El Playón",
    department: "Santander",
  },
  {
    city: "El Águila",
    department: "Valle del Cauca",
  },
  {
    city: "Agua de Dios",
    department: "Cundinamarca",
  },
  {
    city: "El Tarra",
    department: "Norte de Santander",
  },
  {
    city: "Mogotes",
    department: "Santander",
  },
  {
    city: "Santo Domingo",
    department: "Antioquia",
  },
  {
    city: "Tubará",
    department: "Atlántico",
  },
  {
    city: "Regidor",
    department: "Bolívar",
  },
  {
    city: "Lenguazaque",
    department: "Cundinamarca",
  },
  {
    city: "Charalá",
    department: "Santander",
  },
  {
    city: "Medina",
    department: "Cundinamarca",
  },
  {
    city: "Granada",
    department: "Antioquia",
  },
  {
    city: "Suaita",
    department: "Santander",
  },
  {
    city: "Margarita",
    department: "Bolívar",
  },
  {
    city: "Norosí",
    department: "Bolívar",
  },
  {
    city: "Chita",
    department: "Boyacá",
  },
  {
    city: "Pesca",
    department: "Boyacá",
  },
  {
    city: "Granada",
    department: "Cundinamarca",
  },
  {
    city: "Tibaná",
    department: "Boyacá",
  },
  {
    city: "San Zenón",
    department: "Magdalena",
  },
  {
    city: "Nuquí",
    department: "Chocó",
  },
  {
    city: "Alvarado",
    department: "Tolima",
  },
  {
    city: "Zapatoca",
    department: "Santander",
  },
  {
    city: "Junín",
    department: "Cundinamarca",
  },
  {
    city: "Iles",
    department: "Nariño",
  },
  {
    city: "La Belleza",
    department: "Santander",
  },
  {
    city: "Usiacurí",
    department: "Atlántico",
  },
  {
    city: "Muzo",
    department: "Boyacá",
  },
  {
    city: "Orocué",
    department: "Casanare",
  },
  {
    city: "Guatapé",
    department: "Antioquia",
  },
  {
    city: "San Francisco",
    department: "Cundinamarca",
  },
  {
    city: "Aratoca",
    department: "Santander",
  },
  {
    city: "Uramita",
    department: "Antioquia",
  },
  {
    city: "Uribe",
    department: "Meta",
  },
  {
    city: "Motavita",
    department: "Boyacá",
  },
  {
    city: "Pedraza",
    department: "Magdalena",
  },
  {
    city: "Puerto Parra",
    department: "Santander",
  },
  {
    city: "San Luis de Palenque",
    department: "Casanare",
  },
  {
    city: "Paratebueno",
    department: "Cundinamarca",
  },
  {
    city: "Santana",
    department: "Boyacá",
  },
  {
    city: "Coromoro",
    department: "Santander",
  },
  {
    city: "Ambalema",
    department: "Tolima",
  },
  {
    city: "Tarso",
    department: "Antioquia",
  },
  {
    city: "Maripí",
    department: "Boyacá",
  },
  {
    city: "Simacota",
    department: "Santander",
  },
  {
    city: "Soatá",
    department: "Boyacá",
  },
  {
    city: "Tona",
    department: "Santander",
  },
  {
    city: "Socha",
    department: "Boyacá",
  },
  {
    city: "Salento",
    department: "Quindío",
  },
  {
    city: "Boavita",
    department: "Boyacá",
  },
  {
    city: "Guatavita",
    department: "Cundinamarca",
  },
  {
    city: "Güicán",
    department: "Boyacá",
  },
  {
    city: "Puerto Nariño",
    department: "Amazonas",
  },
  {
    city: "Cubará",
    department: "Boyacá",
  },
  {
    city: "Tasco",
    department: "Boyacá",
  },
  {
    city: "Florián",
    department: "Santander",
  },
  {
    city: "Heliconia",
    department: "Antioquia",
  },
  {
    city: "Colosó",
    department: "Sucre",
  },
  {
    city: "Albán",
    department: "Cundinamarca",
  },
  {
    city: "Sutamarchán",
    department: "Boyacá",
  },
  {
    city: "Chitaraque",
    department: "Boyacá",
  },
  {
    city: "Zipacón",
    department: "Cundinamarca",
  },
  {
    city: "Chíquiza",
    department: "Boyacá",
  },
  {
    city: "Villanueva",
    department: "Santander",
  },
  {
    city: "Caramanta",
    department: "Antioquia",
  },
  {
    city: "Tota",
    department: "Boyacá",
  },
  {
    city: "Córdoba",
    department: "Quindío",
  },
  {
    city: "El Cocuy",
    department: "Boyacá",
  },
  {
    city: "Arcabuco",
    department: "Boyacá",
  },
  {
    city: "San José de Pare",
    department: "Boyacá",
  },
  {
    city: "Labranzagrande",
    department: "Boyacá",
  },
  {
    city: "Togüí",
    department: "Boyacá",
  },
  {
    city: "Piojó",
    department: "Atlántico",
  },
  {
    city: "El Peñón",
    department: "Cundinamarca",
  },
  {
    city: "Chiscas",
    department: "Boyacá",
  },
  {
    city: "Santa Rosalía",
    department: "Vichada",
  },
  {
    city: "El Espino",
    department: "Boyacá",
  },
  {
    city: "Puerto Rondón",
    department: "Arauca",
  },
  {
    city: "Sáchica",
    department: "Boyacá",
  },
  {
    city: "Güepsa",
    department: "Santander",
  },
  {
    city: "San Mateo",
    department: "Boyacá",
  },
  {
    city: "Guavatá",
    department: "Santander",
  },
  {
    city: "Guayabal de Síquima",
    department: "Cundinamarca",
  },
  {
    city: "Chinavita",
    department: "Boyacá",
  },
  {
    city: "Concepción",
    department: "Antioquia",
  },
  {
    city: "La Jagua del Pilar",
    department: "La Guajira",
  },
  {
    city: "Cravo Norte",
    department: "Arauca",
  },
  {
    city: "Palmar",
    department: "Santander",
  },
  {
    city: "Tipacoque",
    department: "Boyacá",
  },
  {
    city: "Susacón",
    department: "Boyacá",
  },
  {
    city: "Tinjacá",
    department: "Boyacá",
  },
  {
    city: "Sora",
    department: "Boyacá",
  },
  {
    city: "Covarachía",
    department: "Boyacá",
  },
  {
    city: "Oicatá",
    department: "Boyacá",
  },
  {
    city: "Guataquí",
    department: "Cundinamarca",
  },
  {
    city: "Santa Sofía",
    department: "Boyacá",
  },
  {
    city: "Jerusalén",
    department: "Cundinamarca",
  },
  {
    city: "Gachantivá",
    department: "Boyacá",
  },
  {
    city: "Briceño",
    department: "Boyacá",
  },
  {
    city: "La Uvita",
    department: "Boyacá",
  },
  {
    city: "Encino",
    department: "Santander",
  },
  {
    city: "Vetas",
    department: "Santander",
  },
  {
    city: "Juradó",
    department: "Chocó",
  },
  {
    city: "Iza",
    department: "Boyacá",
  },
  {
    city: "Sativanorte",
    department: "Boyacá",
  },
  {
    city: "Palmas del Socorro",
    department: "Santander",
  },
  {
    city: "Almeida",
    department: "Boyacá",
  },
  {
    city: "Guacamayas",
    department: "Boyacá",
  },
  {
    city: "Galán",
    department: "Santander",
  },
  {
    city: "Tutazá",
    department: "Boyacá",
  },
  {
    city: "Cepitá",
    department: "Santander",
  },
  {
    city: "San Eduardo",
    department: "Boyacá",
  },
  {
    city: "Tununguá",
    department: "Boyacá",
  },
  {
    city: "Pajarito",
    department: "Boyacá",
  },
  {
    city: "La Victoria",
    department: "Boyacá",
  },
  {
    city: "Panqueba",
    department: "Boyacá",
  },
  {
    city: "Sativasur",
    department: "Boyacá",
  },
  {
    city: "Mahates",
    department: "Bolívar",
  },
  {
    city: "Barichara",
    department: "Santander",
  },
  {
    city: "La Estrella",
    department: "Antioquia",
  },
  {
    city: "Malambo",
    department: "Atlántico",
  },
  {
    city: "Rionegro",
    department: "Antioquia",
  },
  {
    city: "Galapa",
    department: "Atlántico",
  },
  {
    city: "Cota",
    department: "Cundinamarca",
  },
  {
    city: "La Tebaida",
    department: "Quindío",
  },
  {
    city: "Chinchiná",
    department: "Caldas",
  },
  {
    city: "Gachancipá",
    department: "Cundinamarca",
  },
  {
    city: "La Ceja",
    department: "Antioquia",
  },
  {
    city: "Santuario",
    department: "Antioquia",
  },
  {
    city: "Calarcá",
    department: "Quindío",
  },
  {
    city: "Sesquilé",
    department: "Cundinamarca",
  },
  {
    city: "Santo Tomás",
    department: "Atlántico",
  },
  {
    city: "Nobsa",
    department: "Boyacá",
  },
  {
    city: "Málaga",
    department: "Santander",
  },
  {
    city: "Palmira",
    department: "Valle del Cauca",
  },
  {
    city: "Providencia",
    department: "Nariño",
  },
  {
    city: "Candelaria",
    department: "Valle del Cauca",
  },
  {
    city: "Apartadó",
    department: "Antioquia",
  },
  {
    city: "Guateque",
    department: "Boyacá",
  },
  {
    city: "Piendamó",
    department: "Cauca",
  },
  {
    city: "Sahagún",
    department: "Córdoba",
  },
  {
    city: "Marmato",
    department: "Caldas",
  },
  {
    city: "Suan",
    department: "Atlántico",
  },
  {
    city: "Santa Isabel",
    department: "San Andrés y Providencia",
  },
  {
    city: "La Mesa",
    department: "Cundinamarca",
  },
  {
    city: "Villa Rica",
    department: "Cauca",
  },
  {
    city: "Puerto Santander",
    department: "Norte de Santander",
  },
  {
    city: "Granada",
    department: "Meta",
  },
  {
    city: "Sibundoy",
    department: "Putumayo",
  },
  {
    city: "Cotorra",
    department: "Córdoba",
  },
  {
    city: "Cachipay",
    department: "Cundinamarca",
  },
  {
    city: "Gualmatán",
    department: "Nariño",
  },
  {
    city: "Buenos Aires",
    department: "Cauca",
  },
  {
    city: "Belén",
    department: "Nariño",
  },
  {
    city: "Recetor",
    department: "Casanare",
  },
  {
    city: "Coello",
    department: "Tolima",
  },
  {
    city: "Tena",
    department: "Cundinamarca",
  },
  {
    city: "Tibasosa",
    department: "Boyacá",
  },
  {
    city: "Génova",
    department: "Nariño",
  },
  {
    city: "Marquetalia",
    department: "Caldas",
  },
  {
    city: "Peñol",
    department: "Antioquia",
  },
  {
    city: "San Pablo",
    department: "Nariño",
  },
  {
    city: "Guática",
    department: "Risaralda",
  },
  {
    city: "Clemencia",
    department: "Bolívar",
  },
  {
    city: "Contadero",
    department: "Nariño",
  },
  {
    city: "Nilo",
    department: "Cundinamarca",
  },
  {
    city: "La Pintada",
    department: "Antioquia",
  },
  {
    city: "Pupiales",
    department: "Nariño",
  },
  {
    city: "Susa",
    department: "Cundinamarca",
  },
  {
    city: "Ulloa",
    department: "Valle del Cauca",
  },
  {
    city: "Villanueva",
    department: "Bolívar",
  },
  {
    city: "Cicuco",
    department: "Bolívar",
  },
  {
    city: "San Cristóbal",
    department: "Bolívar",
  },
  {
    city: "San Antonio del Tequendama",
    department: "Cundinamarca",
  },
  {
    city: "Andalucía",
    department: "Valle del Cauca",
  },
  {
    city: "Anserma",
    department: "Caldas",
  },
  {
    city: "Prado-Sevilla",
    department: "Magdalena",
  },
  {
    city: "Palocabildo",
    department: "Tolima",
  },
  {
    city: "Cáqueza",
    department: "Cundinamarca",
  },
  {
    city: "Cabrera",
    department: "Santander",
  },
  {
    city: "Cartago",
    department: "Nariño",
  },
  {
    city: "Ospina",
    department: "Nariño",
  },
  {
    city: "Nemocón",
    department: "Cundinamarca",
  },
  {
    city: "Simijaca",
    department: "Cundinamarca",
  },
  {
    city: "El Cerrito",
    department: "Valle del Cauca",
  },
  {
    city: "Carlosama",
    department: "Nariño",
  },
  {
    city: "Aldana",
    department: "Nariño",
  },
  {
    city: "Nuevo Colón",
    department: "Boyacá",
  },
  {
    city: "Nimaima",
    department: "Cundinamarca",
  },
  {
    city: "Palestina",
    department: "Caldas",
  },
  {
    city: "Berruecos",
    department: "Nariño",
  },
  {
    city: "Apía",
    department: "Risaralda",
  },
  {
    city: "Pueblorrico",
    department: "Antioquia",
  },
  {
    city: "Purísima de la Concepción",
    department: "Córdoba",
  },
  {
    city: "Chivatá",
    department: "Boyacá",
  },
  {
    city: "San Sebastián de Mariquita",
    department: "Tolima",
  },
  {
    city: "Restrepo",
    department: "Valle del Cauca",
  },
  {
    city: "San Pedro",
    department: "Antioquia",
  },
  {
    city: "Calamar",
    department: "Bolívar",
  },
  {
    city: "Jenesano",
    department: "Boyacá",
  },
  {
    city: "Florencia",
    department: "Cauca",
  },
  {
    city: "Anapoima",
    department: "Cundinamarca",
  },
  {
    city: "San José",
    department: "Caldas",
  },
  {
    city: "Tópaga",
    department: "Boyacá",
  },
  {
    city: "Venecia",
    department: "Antioquia",
  },
  {
    city: "Cucaita",
    department: "Boyacá",
  },
  {
    city: "Angelópolis",
    department: "Antioquia",
  },
  {
    city: "Santa Rosa de Viterbo",
    department: "Boyacá",
  },
  {
    city: "Padilla",
    department: "Cauca",
  },
  {
    city: "Sutatenza",
    department: "Boyacá",
  },
  {
    city: "Momil",
    department: "Córdoba",
  },
  {
    city: "Risaralda",
    department: "Caldas",
  },
  {
    city: "Ventaquemada",
    department: "Boyacá",
  },
  {
    city: "Caloto",
    department: "Cauca",
  },
  {
    city: "Guachené",
    department: "Cauca",
  },
  {
    city: "Yacuanquer",
    department: "Nariño",
  },
  {
    city: "San Vicente",
    department: "Antioquia",
  },
  {
    city: "Manaure Balcón del Cesar",
    department: "Cesar",
  },
  {
    city: "Pinchote",
    department: "Santander",
  },
  {
    city: "Turbaná",
    department: "Bolívar",
  },
  {
    city: "Hispania",
    department: "Antioquia",
  },
  {
    city: "Nariño",
    department: "Nariño",
  },
  {
    city: "Chinácota",
    department: "Norte de Santander",
  },
  {
    city: "Villanueva",
    department: "La Guajira",
  },
  {
    city: "Vijes",
    department: "Valle del Cauca",
  },
  {
    city: "Cómbita",
    department: "Boyacá",
  },
  {
    city: "Boyacá",
    department: "Boyacá",
  },
  {
    city: "Concordia",
    department: "Magdalena",
  },
  {
    city: "Chachagüí",
    department: "Nariño",
  },
  {
    city: "Viterbo",
    department: "Caldas",
  },
  {
    city: "Soplaviento",
    department: "Bolívar",
  },
  {
    city: "Guachucal",
    department: "Nariño",
  },
  {
    city: "Soracá",
    department: "Boyacá",
  },
  {
    city: "La Vega",
    department: "Cundinamarca",
  },
  {
    city: "San Pedro",
    department: "Valle del Cauca",
  },
  {
    city: "Mompós",
    department: "Bolívar",
  },
  {
    city: "Belalcázar",
    department: "Caldas",
  },
  {
    city: "Ciénega",
    department: "Boyacá",
  },
  {
    city: "Oporapa",
    department: "Huila",
  },
  {
    city: "Sasaima",
    department: "Cundinamarca",
  },
  {
    city: "Santa Catalina",
    department: "Bolívar",
  },
  {
    city: "La Hormiga",
    department: "Putumayo",
  },
  {
    city: "Garagoa",
    department: "Boyacá",
  },
  {
    city: "Jambaló",
    department: "Cauca",
  },
  {
    city: "Tenza",
    department: "Boyacá",
  },
  {
    city: "Nocaima",
    department: "Cundinamarca",
  },
  {
    city: "Toro",
    department: "Valle del Cauca",
  },
  {
    city: "Los Palmitos",
    department: "Sucre",
  },
  {
    city: "Palmito",
    department: "Sucre",
  },
  {
    city: "Subachoque",
    department: "Cundinamarca",
  },
  {
    city: "La Celia",
    department: "Risaralda",
  },
  {
    city: "Morroa",
    department: "Sucre",
  },
  {
    city: "San Jerónimo",
    department: "Antioquia",
  },
  {
    city: "Ancuya",
    department: "Nariño",
  },
  {
    city: "Buenavista",
    department: "Sucre",
  },
  {
    city: "Consacá",
    department: "Nariño",
  },
  {
    city: "Imués",
    department: "Nariño",
  },
  {
    city: "San Pedro",
    department: "Sucre",
  },
  {
    city: "Sutatausa",
    department: "Cundinamarca",
  },
  {
    city: "Cocorná",
    department: "Antioquia",
  },
  {
    city: "González",
    department: "Cesar",
  },
  {
    city: "La Cruz",
    department: "Nariño",
  },
  {
    city: "Ricaurte",
    department: "Cundinamarca",
  },
  {
    city: "Lebrija",
    department: "Santander",
  },
  {
    city: "Monguí",
    department: "Boyacá",
  },
  {
    city: "Sevilla",
    department: "Valle del Cauca",
  },
  {
    city: "Enciso",
    department: "Santander",
  },
  {
    city: "San Juan de Betulia",
    department: "Sucre",
  },
  {
    city: "Ragonvalia",
    department: "Norte de Santander",
  },
  {
    city: "San Estanislao",
    department: "Bolívar",
  },
  {
    city: "Santuario",
    department: "Risaralda",
  },
  {
    city: "Ramiriquí",
    department: "Boyacá",
  },
  {
    city: "Caucasia",
    department: "Antioquia",
  },
  {
    city: "Pital",
    department: "Huila",
  },
  {
    city: "Saldaña",
    department: "Tolima",
  },
  {
    city: "Guaitarilla",
    department: "Nariño",
  },
  {
    city: "Jericó",
    department: "Antioquia",
  },
  {
    city: "Pandi",
    department: "Cundinamarca",
  },
  {
    city: "Úmbita",
    department: "Boyacá",
  },
  {
    city: "Aranzazu",
    department: "Caldas",
  },
  {
    city: "Palestina",
    department: "Huila",
  },
  {
    city: "Betania",
    department: "Antioquia",
  },
  {
    city: "Fúquene",
    department: "Cundinamarca",
  },
  {
    city: "Guachetá",
    department: "Cundinamarca",
  },
  {
    city: "Apulo",
    department: "Cundinamarca",
  },
  {
    city: "Saravena",
    department: "Arauca",
  },
  {
    city: "Capitanejo",
    department: "Santander",
  },
  {
    city: "Turmequé",
    department: "Boyacá",
  },
  {
    city: "Toribío",
    department: "Cauca",
  },
  {
    city: "Lérida",
    department: "Tolima",
  },
  {
    city: "Ráquira",
    department: "Boyacá",
  },
  {
    city: "Sucre",
    department: "Cauca",
  },
  {
    city: "Linares",
    department: "Nariño",
  },
  {
    city: "Tolú Viejo",
    department: "Sucre",
  },
  {
    city: "Ocamonte",
    department: "Santander",
  },
  {
    city: "La Florida",
    department: "Nariño",
  },
  {
    city: "Arroyohondo",
    department: "Bolívar",
  },
  {
    city: "Pacho",
    department: "Cundinamarca",
  },
  {
    city: "Siachoque",
    department: "Boyacá",
  },
  {
    city: "Distracción",
    department: "La Guajira",
  },
  {
    city: "Fosca",
    department: "Cundinamarca",
  },
  {
    city: "Toca",
    department: "Boyacá",
  },
  {
    city: "Buenavista",
    department: "Quindío",
  },
  {
    city: "Cerro de San Antonio",
    department: "Magdalena",
  },
  {
    city: "Venadillo",
    department: "Tolima",
  },
  {
    city: "Guadalupe",
    department: "Antioquia",
  },
  {
    city: "Tuta",
    department: "Boyacá",
  },
  {
    city: "La Apartada",
    department: "Córdoba",
  },
  {
    city: "Somondoco",
    department: "Boyacá",
  },
  {
    city: "San Pablo de Borbur",
    department: "Boyacá",
  },
  {
    city: "Páramo",
    department: "Santander",
  },
  {
    city: "Útica",
    department: "Cundinamarca",
  },
  {
    city: "Valparaíso",
    department: "Antioquia",
  },
  {
    city: "Ubaque",
    department: "Cundinamarca",
  },
  {
    city: "Rivera",
    department: "Huila",
  },
  {
    city: "Nariño",
    department: "Antioquia",
  },
  {
    city: "La Plata",
    department: "Huila",
  },
  {
    city: "Viotá",
    department: "Cundinamarca",
  },
  {
    city: "Chipatá",
    department: "Santander",
  },
  {
    city: "Chipaque",
    department: "Cundinamarca",
  },
  {
    city: "Filadelfia",
    department: "Caldas",
  },
  {
    city: "Cucunubá",
    department: "Cundinamarca",
  },
  {
    city: "Vianí",
    department: "Cundinamarca",
  },
  {
    city: "Cerinza",
    department: "Boyacá",
  },
  {
    city: "Campamento",
    department: "Antioquia",
  },
  {
    city: "Sapuyes",
    department: "Nariño",
  },
  {
    city: "Icononzo",
    department: "Tolima",
  },
  {
    city: "Ansermanuevo",
    department: "Valle del Cauca",
  },
  {
    city: "Cuítiva",
    department: "Boyacá",
  },
  {
    city: "Firavitoba",
    department: "Boyacá",
  },
  {
    city: "La Peña",
    department: "Cundinamarca",
  },
  {
    city: "Quetame",
    department: "Cundinamarca",
  },
  {
    city: "Barranco de Loba",
    department: "Bolívar",
  },
  {
    city: "Armenia",
    department: "Antioquia",
  },
  {
    city: "San José de Miranda",
    department: "Santander",
  },
  {
    city: "Argelia",
    department: "Valle del Cauca",
  },
  {
    city: "Cañasgordas",
    department: "Antioquia",
  },
  {
    city: "Toledo",
    department: "Antioquia",
  },
  {
    city: "Gamarra",
    department: "Cesar",
  },
  {
    city: "Trujillo",
    department: "Valle del Cauca",
  },
  {
    city: "Carmen de Apicalá",
    department: "Tolima",
  },
  {
    city: "Bolívar",
    department: "Cauca",
  },
  {
    city: "El Roble",
    department: "Sucre",
  },
  {
    city: "Cumbitara",
    department: "Nariño",
  },
  {
    city: "Anzoátegui",
    department: "Tolima",
  },
  {
    city: "La Victoria",
    department: "Valle del Cauca",
  },
  {
    city: "Quebradanegra",
    department: "Cundinamarca",
  },
  {
    city: "Floresta",
    department: "Boyacá",
  },
  {
    city: "Buenavista",
    department: "Boyacá",
  },
  {
    city: "Balboa",
    department: "Risaralda",
  },
  {
    city: "Albania",
    department: "La Guajira",
  },
  {
    city: "Liborina",
    department: "Antioquia",
  },
  {
    city: "Arbeláez",
    department: "Cundinamarca",
  },
  {
    city: "Ánimas",
    department: "Chocó",
  },
  {
    city: "Choachí",
    department: "Cundinamarca",
  },
  {
    city: "San Fernando",
    department: "Bolívar",
  },
  {
    city: "Quipile",
    department: "Cundinamarca",
  },
  {
    city: "San Luis",
    department: "Tolima",
  },
  {
    city: "La Sierra",
    department: "Cauca",
  },
  {
    city: "Yotoco",
    department: "Valle del Cauca",
  },
  {
    city: "Viracachá",
    department: "Boyacá",
  },
  {
    city: "Tarqui",
    department: "Huila",
  },
  {
    city: "San Roque",
    department: "Antioquia",
  },
  {
    city: "Falan",
    department: "Tolima",
  },
  {
    city: "La Merced",
    department: "Caldas",
  },
  {
    city: "Barrancas",
    department: "La Guajira",
  },
  {
    city: "Riofrío",
    department: "Valle del Cauca",
  },
  {
    city: "Chimá",
    department: "Córdoba",
  },
  {
    city: "Entrerríos",
    department: "Antioquia",
  },
  {
    city: "Argelia",
    department: "Antioquia",
  },
  {
    city: "Pasca",
    department: "Cundinamarca",
  },
  {
    city: "California",
    department: "Santander",
  },
  {
    city: "Tibacuy",
    department: "Cundinamarca",
  },
  {
    city: "Salamina",
    department: "Magdalena",
  },
  {
    city: "Chalán",
    department: "Sucre",
  },
  {
    city: "Nátaga",
    department: "Huila",
  },
  {
    city: "San Benito",
    department: "Santander",
  },
  {
    city: "Pácora",
    department: "Caldas",
  },
  {
    city: "Tausa",
    department: "Cundinamarca",
  },
  {
    city: "Elías",
    department: "Huila",
  },
  {
    city: "Abejorral",
    department: "Antioquia",
  },
  {
    city: "Caicedo",
    department: "Antioquia",
  },
  {
    city: "Matanza",
    department: "Santander",
  },
  {
    city: "Angostura",
    department: "Antioquia",
  },
  {
    city: "Arenal",
    department: "Bolívar",
  },
  {
    city: "San Rafael",
    department: "Antioquia",
  },
  {
    city: "Leiva",
    department: "Nariño",
  },
  {
    city: "La Cumbre",
    department: "Valle del Cauca",
  },
  {
    city: "El Cairo",
    department: "Valle del Cauca",
  },
  {
    city: "Valle de San José",
    department: "Santander",
  },
  {
    city: "Une",
    department: "Cundinamarca",
  },
  {
    city: "Gachetá",
    department: "Cundinamarca",
  },
  {
    city: "Busbanzá",
    department: "Boyacá",
  },
  {
    city: "San Francisco",
    department: "Putumayo",
  },
  {
    city: "Salamina",
    department: "Caldas",
  },
  {
    city: "Pauna",
    department: "Boyacá",
  },
  {
    city: "El Tablón",
    department: "Nariño",
  },
  {
    city: "Albania",
    department: "Santander",
  },
  {
    city: "Tibirita",
    department: "Cundinamarca",
  },
  {
    city: "San Sebastián de Buenavista",
    department: "Magdalena",
  },
  {
    city: "La Capilla",
    department: "Boyacá",
  },
  {
    city: "Olaya",
    department: "Antioquia",
  },
  {
    city: "El Tambo",
    department: "Nariño",
  },
  {
    city: "El Peñol",
    department: "Nariño",
  },
  {
    city: "Casabianca",
    department: "Tolima",
  },
  {
    city: "La Argentina",
    department: "Huila",
  },
  {
    city: "Quípama",
    department: "Boyacá",
  },
  {
    city: "San Cayetano",
    department: "Norte de Santander",
  },
  {
    city: "Belén",
    department: "Boyacá",
  },
  {
    city: "Caldas",
    department: "Boyacá",
  },
  {
    city: "Paispamba",
    department: "Cauca",
  },
  {
    city: "Gámeza",
    department: "Boyacá",
  },
  {
    city: "Bochalema",
    department: "Norte de Santander",
  },
  {
    city: "San Sebastián",
    department: "Cauca",
  },
  {
    city: "Gómez Plata",
    department: "Antioquia",
  },
  {
    city: "Hobo",
    department: "Huila",
  },
  {
    city: "Nariño",
    department: "Cundinamarca",
  },
  {
    city: "San Andrés",
    department: "Antioquia",
  },
  {
    city: "Policarpa",
    department: "Nariño",
  },
  {
    city: "El Molino",
    department: "La Guajira",
  },
  {
    city: "Giraldo",
    department: "Antioquia",
  },
  {
    city: "Santiago",
    department: "Putumayo",
  },
  {
    city: "Tangua",
    department: "Nariño",
  },
  {
    city: "Miraflores",
    department: "Boyacá",
  },
  {
    city: "Puerto Salgar",
    department: "Cundinamarca",
  },
  {
    city: "Confines",
    department: "Santander",
  },
  {
    city: "Cajamarca",
    department: "Tolima",
  },
  {
    city: "Gramalote",
    department: "Norte de Santander",
  },
  {
    city: "San Miguel de Sema",
    department: "Boyacá",
  },
  {
    city: "Corrales",
    department: "Boyacá",
  },
  {
    city: "Herrán",
    department: "Norte de Santander",
  },
  {
    city: "Íquira",
    department: "Huila",
  },
  {
    city: "Bituima",
    department: "Cundinamarca",
  },
  {
    city: "Guayatá",
    department: "Boyacá",
  },
  {
    city: "Colón",
    department: "Putumayo",
  },
  {
    city: "Vergara",
    department: "Cundinamarca",
  },
  {
    city: "Zambrano",
    department: "Bolívar",
  },
  {
    city: "Sabanalarga",
    department: "Antioquia",
  },
  {
    city: "Lourdes",
    department: "Norte de Santander",
  },
  {
    city: "Villahermosa",
    department: "Tolima",
  },
  {
    city: "La Palma",
    department: "Cundinamarca",
  },
  {
    city: "San Martín de Loba",
    department: "Bolívar",
  },
  {
    city: "Alejandría",
    department: "Antioquia",
  },
  {
    city: "Ortega",
    department: "Tolima",
  },
  {
    city: "Gama",
    department: "Cundinamarca",
  },
  {
    city: "Paz de Río",
    department: "Boyacá",
  },
  {
    city: "La Playa",
    department: "Norte de Santander",
  },
  {
    city: "Valle de San Juan",
    department: "Tolima",
  },
  {
    city: "Puerto Nare",
    department: "Antioquia",
  },
  {
    city: "San Antonio",
    department: "Tolima",
  },
  {
    city: "Algarrobo",
    department: "Magdalena",
  },
  {
    city: "Anzá",
    department: "Antioquia",
  },
  {
    city: "Pachavita",
    department: "Boyacá",
  },
  {
    city: "Agrado",
    department: "Huila",
  },
  {
    city: "Victoria",
    department: "Caldas",
  },
  {
    city: "Coconuco",
    department: "Cauca",
  },
  {
    city: "Yaguará",
    department: "Huila",
  },
  {
    city: "Santa Rita",
    department: "Chocó",
  },
  {
    city: "Potosí",
    department: "Nariño",
  },
  {
    city: "Santa María",
    department: "Huila",
  },
  {
    city: "El Peñón",
    department: "Bolívar",
  },
  {
    city: "Tamalameque",
    department: "Cesar",
  },
  {
    city: "El Dovio",
    department: "Valle del Cauca",
  },
  {
    city: "Supatá",
    department: "Cundinamarca",
  },
  {
    city: "Samaná",
    department: "Caldas",
  },
  {
    city: "San Calixto",
    department: "Norte de Santander",
  },
  {
    city: "Versalles",
    department: "Valle del Cauca",
  },
  {
    city: "Jesús María",
    department: "Santander",
  },
  {
    city: "Guapotá",
    department: "Santander",
  },
  {
    city: "Génova",
    department: "Quindío",
  },
  {
    city: "Cértegui",
    department: "Chocó",
  },
  {
    city: "Suárez",
    department: "Cauca",
  },
  {
    city: "Berbeo",
    department: "Boyacá",
  },
  {
    city: "El Dorado",
    department: "Meta",
  },
  {
    city: "Salahonda",
    department: "Nariño",
  },
  {
    city: "Pamplonita",
    department: "Norte de Santander",
  },
  {
    city: "La Tola",
    department: "Nariño",
  },
  {
    city: "San Andrés",
    department: "Santander",
  },
  {
    city: "Villagómez",
    department: "Cundinamarca",
  },
  {
    city: "Cumaral",
    department: "Meta",
  },
  {
    city: "Machetá",
    department: "Cundinamarca",
  },
  {
    city: "San José de la Montaña",
    department: "Antioquia",
  },
  {
    city: "Jericó",
    department: "Boyacá",
  },
  {
    city: "San Juan de Rioseco",
    department: "Cundinamarca",
  },
  {
    city: "Guadalupe",
    department: "Santander",
  },
  {
    city: "Norcasia",
    department: "Caldas",
  },
  {
    city: "Manta",
    department: "Cundinamarca",
  },
  {
    city: "Aguada",
    department: "Santander",
  },
  {
    city: "Carmen de Carupa",
    department: "Cundinamarca",
  },
  {
    city: "Venecia",
    department: "Cundinamarca",
  },
  {
    city: "Astrea",
    department: "Cesar",
  },
  {
    city: "Paime",
    department: "Cundinamarca",
  },
  {
    city: "Carolina",
    department: "Antioquia",
  },
  {
    city: "San Miguel",
    department: "Santander",
  },
  {
    city: "Briceño",
    department: "Antioquia",
  },
  {
    city: "Mistrató",
    department: "Risaralda",
  },
  {
    city: "Zaragoza",
    department: "Antioquia",
  },
  {
    city: "Mercaderes",
    department: "Cauca",
  },
  {
    city: "Ábrego",
    department: "Norte de Santander",
  },
  {
    city: "Sotaquirá",
    department: "Boyacá",
  },
  {
    city: "Sucre",
    department: "Sucre",
  },
  {
    city: "Pijiño del Carmen",
    department: "Magdalena",
  },
  {
    city: "El Copey",
    department: "Cesar",
  },
  {
    city: "El Carmen de Chucurí",
    department: "Santander",
  },
  {
    city: "Jordán",
    department: "Santander",
  },
  {
    city: "Suárez",
    department: "Tolima",
  },
  {
    city: "Belmira",
    department: "Antioquia",
  },
  {
    city: "San Carlos",
    department: "Antioquia",
  },
  {
    city: "El Peñón",
    department: "Santander",
  },
  {
    city: "Peque",
    department: "Antioquia",
  },
  {
    city: "Beltrán",
    department: "Cundinamarca",
  },
  {
    city: "San Bernardo",
    department: "Cundinamarca",
  },
  {
    city: "Restrepo",
    department: "Meta",
  },
  {
    city: "Morelia",
    department: "Caquetá",
  },
  {
    city: "Saladoblanco",
    department: "Huila",
  },
  {
    city: "Macanal",
    department: "Boyacá",
  },
  {
    city: "Monterrey",
    department: "Casanare",
  },
  {
    city: "Contratación",
    department: "Santander",
  },
  {
    city: "Tello",
    department: "Huila",
  },
  {
    city: "Santa Isabel",
    department: "Tolima",
  },
  {
    city: "San Luis",
    department: "Antioquia",
  },
  {
    city: "Tesalia",
    department: "Huila",
  },
  {
    city: "Topaipí",
    department: "Cundinamarca",
  },
  {
    city: "Caparrapí",
    department: "Cundinamarca",
  },
  {
    city: "Punta de Piedras",
    department: "Magdalena",
  },
  {
    city: "Herveo",
    department: "Tolima",
  },
  {
    city: "Hacarí",
    department: "Norte de Santander",
  },
  {
    city: "Altamira",
    department: "Huila",
  },
  {
    city: "Andagoya",
    department: "Chocó",
  },
  {
    city: "La Llanada",
    department: "Nariño",
  },
  {
    city: "Fuente de Oro",
    department: "Meta",
  },
  {
    city: "Yuto",
    department: "Chocó",
  },
  {
    city: "Charta",
    department: "Santander",
  },
  {
    city: "Buriticá",
    department: "Antioquia",
  },
  {
    city: "Molagavita",
    department: "Santander",
  },
  {
    city: "Coper",
    department: "Boyacá",
  },
  {
    city: "Maceo",
    department: "Antioquia",
  },
  {
    city: "Pijao",
    department: "Quindío",
  },
  {
    city: "Caracolí",
    department: "Antioquia",
  },
  {
    city: "Puerres",
    department: "Nariño",
  },
  {
    city: "Mutiscua",
    department: "Norte de Santander",
  },
  {
    city: "Fómeque",
    department: "Cundinamarca",
  },
  {
    city: "Guaca",
    department: "Santander",
  },
  {
    city: "Ubalá",
    department: "Cundinamarca",
  },
  {
    city: "Castilla La Nueva",
    department: "Meta",
  },
  {
    city: "Otanche",
    department: "Boyacá",
  },
  {
    city: "San Francisco",
    department: "Antioquia",
  },
  {
    city: "San Diego",
    department: "Cesar",
  },
  {
    city: "Mosquera",
    department: "Nariño",
  },
  {
    city: "Vegachí",
    department: "Antioquia",
  },
  {
    city: "Yalí",
    department: "Antioquia",
  },
  {
    city: "Betéitiva",
    department: "Boyacá",
  },
  {
    city: "El Guamo",
    department: "Bolívar",
  },
  {
    city: "Cucutilla",
    department: "Norte de Santander",
  },
  {
    city: "Darién",
    department: "Valle del Cauca",
  },
  {
    city: "La Paz",
    department: "Cesar",
  },
  {
    city: "Prado",
    department: "Tolima",
  },
  {
    city: "Morales",
    department: "Bolívar",
  },
  {
    city: "Guayabetal",
    department: "Cundinamarca",
  },
  {
    city: "Bolívar",
    department: "Valle del Cauca",
  },
  {
    city: "San Martín",
    department: "Cesar",
  },
  {
    city: "Managrú",
    department: "Chocó",
  },
  {
    city: "El Rosario",
    department: "Nariño",
  },
  {
    city: "Paicol",
    department: "Huila",
  },
  {
    city: "Durania",
    department: "Norte de Santander",
  },
  {
    city: "Pueblo Rico",
    department: "Risaralda",
  },
  {
    city: "Chaguaní",
    department: "Cundinamarca",
  },
  {
    city: "Macaravita",
    department: "Santander",
  },
  {
    city: "Cunday",
    department: "Tolima",
  },
  {
    city: "San Cayetano",
    department: "Cundinamarca",
  },
  {
    city: "Cáchira",
    department: "Norte de Santander",
  },
  {
    city: "La Paz",
    department: "Santander",
  },
  {
    city: "Chiriguaná",
    department: "Cesar",
  },
  {
    city: "El Tambo",
    department: "Cauca",
  },
  {
    city: "Río Viejo",
    department: "Bolívar",
  },
  {
    city: "La Esperanza",
    department: "Norte de Santander",
  },
  {
    city: "Chima",
    department: "Santander",
  },
  {
    city: "Carcasí",
    department: "Santander",
  },
  {
    city: "Zetaquira",
    department: "Boyacá",
  },
  {
    city: "Puerto Caicedo",
    department: "Putumayo",
  },
  {
    city: "San Carlos de Guaroa",
    department: "Meta",
  },
  {
    city: "Arboledas",
    department: "Norte de Santander",
  },
  {
    city: "Frontino",
    department: "Antioquia",
  },
  {
    city: "Rondón",
    department: "Boyacá",
  },
  {
    city: "Rionegro",
    department: "Santander",
  },
  {
    city: "Piedras",
    department: "Tolima",
  },
  {
    city: "San Joaquín",
    department: "Santander",
  },
  {
    city: "Sucre",
    department: "Santander",
  },
  {
    city: "Salazar",
    department: "Norte de Santander",
  },
  {
    city: "Teruel",
    department: "Huila",
  },
  {
    city: "La Gloria",
    department: "Cesar",
  },
  {
    city: "Curillo",
    department: "Caquetá",
  },
  {
    city: "Ricaurte",
    department: "Nariño",
  },
  {
    city: "Guamal",
    department: "Meta",
  },
  {
    city: "Yacopí",
    department: "Cundinamarca",
  },
  {
    city: "Bucarasica",
    department: "Norte de Santander",
  },
  {
    city: "Concepción",
    department: "Santander",
  },
  {
    city: "Chámeza",
    department: "Casanare",
  },
  {
    city: "Beté",
    department: "Chocó",
  },
  {
    city: "Gachalá",
    department: "Cundinamarca",
  },
  {
    city: "Cerrito",
    department: "Santander",
  },
  {
    city: "Santiago",
    department: "Norte de Santander",
  },
  {
    city: "Paimadó",
    department: "Chocó",
  },
  {
    city: "Payán",
    department: "Nariño",
  },
  {
    city: "Lloró",
    department: "Chocó",
  },
  {
    city: "Convención",
    department: "Norte de Santander",
  },
  {
    city: "Unguía",
    department: "Chocó",
  },
  {
    city: "Hato",
    department: "Santander",
  },
  {
    city: "San Ángel",
    department: "Magdalena",
  },
  {
    city: "Silos",
    department: "Norte de Santander",
  },
  {
    city: "Cácota",
    department: "Norte de Santander",
  },
  {
    city: "Villavieja",
    department: "Huila",
  },
  {
    city: "Piedrancha",
    department: "Nariño",
  },
  {
    city: "Chivor",
    department: "Boyacá",
  },
  {
    city: "Pulí",
    department: "Cundinamarca",
  },
  {
    city: "Santa María",
    department: "Boyacá",
  },
  {
    city: "Acandí",
    department: "Chocó",
  },
  {
    city: "Villa Caro",
    department: "Norte de Santander",
  },
  {
    city: "Ituango",
    department: "Antioquia",
  },
  {
    city: "Barbacoas",
    department: "Nariño",
  },
  {
    city: "Remolino",
    department: "Magdalena",
  },
  {
    city: "Cantagallo",
    department: "Bolívar",
  },
  {
    city: "Mongua",
    department: "Boyacá",
  },
  {
    city: "Dolores",
    department: "Tolima",
  },
  {
    city: "Santa Bárbara",
    department: "Santander",
  },
  {
    city: "Baraya",
    department: "Huila",
  },
  {
    city: "Bagadó",
    department: "Chocó",
  },
  {
    city: "Campohermoso",
    department: "Boyacá",
  },
  {
    city: "Solita",
    department: "Caquetá",
  },
  {
    city: "Iscuandé",
    department: "Nariño",
  },
  {
    city: "San José del Fragua",
    department: "Caquetá",
  },
  {
    city: "Betulia",
    department: "Santander",
  },
  {
    city: "Murillo",
    department: "Tolima",
  },
  {
    city: "Socotá",
    department: "Boyacá",
  },
  {
    city: "Pore",
    department: "Casanare",
  },
  {
    city: "San Luis de Gaceno",
    department: "Boyacá",
  },
  {
    city: "Becerril",
    department: "Cesar",
  },
  {
    city: "Toledo",
    department: "Norte de Santander",
  },
  {
    city: "Mutis",
    department: "Chocó",
  },
  {
    city: "Abriaquí",
    department: "Antioquia",
  },
  {
    city: "Cabrera",
    department: "Cundinamarca",
  },
  {
    city: "Belén de los Andaquíes",
    department: "Caquetá",
  },
  {
    city: "Villarrica",
    department: "Tolima",
  },
  {
    city: "Alpujarra",
    department: "Tolima",
  },
  {
    city: "Bolívar",
    department: "Santander",
  },
  {
    city: "Puerto Meluk",
    department: "Chocó",
  },
  {
    city: "Albania",
    department: "Caquetá",
  },
  {
    city: "Valparaíso",
    department: "Caquetá",
  },
  {
    city: "Yondó",
    department: "Antioquia",
  },
  {
    city: "Santa Helena del Opón",
    department: "Santander",
  },
  {
    city: "El Guacamayo",
    department: "Santander",
  },
  {
    city: "Onzaga",
    department: "Santander",
  },
  {
    city: "Barranca de Upía",
    department: "Meta",
  },
  {
    city: "Funes",
    department: "Nariño",
  },
  {
    city: "Gámbita",
    department: "Santander",
  },
  {
    city: "San Juanito",
    department: "Meta",
  },
  {
    city: "Suratá",
    department: "Santander",
  },
  {
    city: "Chitagá",
    department: "Norte de Santander",
  },
  {
    city: "Lejanías",
    department: "Meta",
  },
  {
    city: "El Castillo",
    department: "Meta",
  },
  {
    city: "Marulanda",
    department: "Caldas",
  },
  {
    city: "El Carmen",
    department: "Norte de Santander",
  },
  {
    city: "Nunchía",
    department: "Casanare",
  },
  {
    city: "La Salina",
    department: "Casanare",
  },
  {
    city: "Gutiérrez",
    department: "Cundinamarca",
  },
  {
    city: "Piamonte",
    department: "Cauca",
  },
  {
    city: "Nóvita",
    department: "Chocó",
  },
  {
    city: "San Juan de Arama",
    department: "Meta",
  },
  {
    city: "Páez",
    department: "Boyacá",
  },
  {
    city: "Colombia",
    department: "Huila",
  },
  {
    city: "Milán",
    department: "Caquetá",
  },
  {
    city: "Támara",
    department: "Casanare",
  },
  {
    city: "Trinidad",
    department: "Casanare",
  },
  {
    city: "El Calvario",
    department: "Meta",
  },
  {
    city: "Roncesvalles",
    department: "Tolima",
  },
  {
    city: "Paya",
    department: "Boyacá",
  },
  {
    city: "Pizarro",
    department: "Chocó",
  },
  {
    city: "Puerto Rico",
    department: "Meta",
  },
  {
    city: "Sabanalarga",
    department: "Casanare",
  },
  {
    city: "Cubarral",
    department: "Meta",
  },
  {
    city: "Cabuyaro",
    department: "Meta",
  },
  {
    city: "Santa Genoveva de Docordó",
    department: "Chocó",
  },
  {
    city: "Mesetas",
    department: "Meta",
  },
  {
    city: "Vigía del Fuerte",
    department: "Antioquia",
  },
  {
    city: "Puerto Lleras",
    department: "Meta",
  },
  {
    city: "Mapiripán",
    department: "Meta",
  },
  {
    city: "Sácama",
    department: "Casanare",
  },
  {
    city: "Maní",
    department: "Casanare",
  },
  {
    city: "Murindó",
    department: "Antioquia",
  },
  {
    city: "Santa Rosa",
    department: "Cauca",
  },
  {
    city: "Sipí",
    department: "Chocó",
  },
  {
    city: "Hato Corozal",
    department: "Casanare",
  },
  {
    city: "Bellavista",
    department: "Chocó",
  },
  {
    city: "Pisba",
    department: "Boyacá",
  },
  {
    city: "San José del Palmar",
    department: "Chocó",
  },
  {
    city: "Curbaradó",
    department: "Chocó",
  },
  {
    city: "Puerto Leguízamo",
    department: "Putumayo",
  },
  {
    city: "Puerto Gaitán",
    department: "Meta",
  },
  {
    city: "Miraflores",
    department: "Guaviare",
  },
  {
    city: "Carurú",
    department: "Vaupés",
  },
  {
    city: "Calamar",
    department: "Guaviare",
  },
  {
    city: "Taraira",
    department: "Vaupés",
  },
  {
    city: "San José de Uré",
    department: "Córdoba",
  },
];

const sortCities = ciudades.sort((a: any, b: any) => {
  let nombreA = a.city.toUpperCase(); // convierte los nombres a mayúsculas para evitar problemas de mayúsculas/minúsculas
  let nombreB = b.city.toUpperCase();

  if (nombreA < nombreB) {
    return -1;
  }

  if (nombreA > nombreB) {
    return 1;
  }

  // si los nombres son iguales, no hace falta cambiar la posición
  return 0;
});

export const cities = sortCities;
