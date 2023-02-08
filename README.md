# Sebas-Shop

## Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar

```
yarn install
```

3. Levantar base de datos

```
docker-compose up -d
```

4. Clonar el archivo `.env.template` y renombrar la copia a `.env`

5. Llenar la variables de entorno definidas en el `.env`

6. Ejecutar la aplicación de dev:

```
yarn dev
```

7. Reconstruir la base de datos con la semilla

```
http://localhost:3000/api/seed
```

### Despliegue:

1. Crear el build de producción el comando `yarn build`, verificar que no tenga errores.

2. Correr el proyecto en producción con el comando `yarn start`.
