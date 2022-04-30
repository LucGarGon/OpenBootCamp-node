# Dependencias
    dotenv -> permite cargar variables de entorno desde un fichero .env

    express -> framework de node que facilita el desarrollo de aplicaciones web.


    @types/express -> tipos para trabajar con typescript con express.

    @types/jest -> tipos para trabajar con jest con 
    typescript

    @types/node -> tipos para trabajar con node con 
    typescript

    @typescript-eslint/eslint-plugin -> plugin de Eslint para trabajar con typescript.

    @typescript-eslint/parser -> permite trabajar con el parseador de Babel.

    concurrently -> permite ejecutar un comando en la terminal tras haber ejecutado otro anteriormente.

    eslint -> permite definir un estilo comun en toda la aplicación.

    eslint-config-standard -> configuración estandar de estilos para Eslint.

    jest -> framework de testing.

    nodemon -> permite que cuando se realice cualquier
    cambios sobre los archivos que hayamos configurado, el servidor node se autoreinicie.

    serve -> permite servir un sitio estático.
    
    supertest -> facilita el testeo de llamadas http

    ts-jest -> necesario para hacer test con typescript.

    ts-node -> permite ejecutar typescript en node sin precopilar, para ello transforma typescript en javascript directamente.

    typescript -> necesario para utilizar typescript.

    webpack -> permite configurar el empaquetado de los ficheros js

    helmet -> permite configurar los http headers.

    cors -> permite configurar el cors, Access-Control-Allow-Origin.
  
# Scripts

    1. "build": "npx tsc"
        compila los archivos typescript a javascript.

    2. "start": "node dist/index.js",
        inicia el servidor node, a través de los archivos de typescript precompilados.

    3. "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\"",
        permite iniciar el servidor con typescript, de tal modo que si se ejecuta algún cambio el servidor se autoreinicia. 

    4. "test": "jest",
        Ejecuta los test.

    5. "serve:coverage":"npm run test && cd coverage/lcov-report && npx serve"
        Iniciar los test y sirve la página estática que informa sobre el coverage de los test.

# Variables de entorno

    PORT -> especificar el puerto en el que se servira
    el servidor node.