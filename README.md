# Backend challenge storydots

Este challenge es un backend de ecommerce de zapatillas, con 3 marcas, se puede ingresar como "admin" y mirar la lista de productos, solo el admin puede crear, modificar o eliminar.

Agregue algunos extras pero sin desviarme de la consigna original, cosas que podia agregar las deje comentadas (login de user, entre otras validaciones)

## Tecnologias aplicadadas en este challenge

- Nodejs
- Express
- Typescript
- Postgres
- Git
- jsonwebtoken

## Pattern design y estructura utilizados

Para este challege ulitice dos patrones de diseño:

- Para construir objectos (marcas y shoes) utilice builder, cada uno con el contexto base, builder y director
- Para el login aplique strategy para aplicar un login simple con un solo admin ya pre-establecido

Para estructura aplique:

- clases abstractas
- Estructura de micro-servicios.

## Instalacion de dependecias

- npm i
- npx tsc
- tsc --init

## schema de variables de entornos

PORT=
DB_NAME=
DB_USERNAME=
DB_DIALECT=
DB_HOST=
DB_PORT=
DB_PASSWORD=
JWT_KEY=
