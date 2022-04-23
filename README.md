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
  
# Scripts

        "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\"",
    "test": "jest",
    "serve:coverage":"npm run test && cd coverage/lcov-report && npx serve"