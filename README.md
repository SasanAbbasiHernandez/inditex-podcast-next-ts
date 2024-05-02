Proyecto PODCAST INDITEX con Next.js y TypeScript

¡Bienvenido/a!

Este proyecto es una aplicación web desarrollada utilizando Next.js, ya que es la mejor forma de crear una SSR con React.js.

- Descripción:

Este proyecto es una prueba técnica que simula la búsqueda de los mejores podcast.

- Funcionalidades:

Buscar Podcasts
Ver detalle de los Podcasts
Escuchar los Episodios

- Requisitos:

Para ejecutar este proyecto localmente, necesitarás tener instalado:

Node.js
Instalación:

Clona este repositorio en tu máquina local utilizando el siguiente comando:

    git clone https://github.com/SasanAbbasiHernandez/inditex-podcast-next-ts

Navega a la carpeta del proyecto e instala las dependencias utilizando npm o yarn:

    npm install

- Uso:

Modo Desarrollo:

Una vez que hayas instalado todas las dependencias, puedes ejecutar el proyecto localmente utilizando el siguiente comando:

    npm run dev

Esto iniciará el servidor de desarrollo de Next.js y podrás acceder a la aplicación en tu navegador visitando http://localhost:3000.

Modo Simulación Producción:

    npm run build
    npm run start

Esto iniciará el servidor de Next.js y podrás acceder a la aplicación en tu navegador visitando http://localhost:3000.

- Información RELEVANTE:

Estructura del proyecto: dividido en diferentes carpetas con la finalidad de que el proyecto sea escalable.

Estilos: Se utiliza Sass para los estilos globales en la carpeta src/styles la cual tiene los colores y el responsive parametrizados para que los scss de las vistas y componentes puedan reutilizarlos.

Interfaces: conjunto de interfaces para la correcta utilización de TypeScript.

Hooks: (UseData) es un hook que nos ayuda a la recolección de datos del Contexto de manera más simple.

Context: Elegí utilizar Context ya que era una app pequeña.

Components: Conjunto de componentes para cada una de las vistas y header.

App: contiene la raíz de la aplicación que muestra a través de los layouts el header y cada una de las vistas.

Api: contiene todas las funciones propias de llamada a la API de Podcast.

- Palabras finales:

La verdad es que me he divertido mucho haciendo este proyecto, le he dedicado muchas horas y me gustaría recibir feedback del mismo, sobre todo lo negativo.

Un saludo,
Sasan.