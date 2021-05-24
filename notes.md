# Notas de la aplicación

## Agregando react

Para agregar react a nuestra aplicación, lo que podemos hacer es installar como cualquier otra librería. el código se vería de la siguiente manera
```bash
npm add react react-dom
```
Algo importate a **tener en cuenta** es que se usa **npm add**, pero basicamente es lo msimo que utilizar:
```bash
npm install react react-dom
```

## problemas con el ignorado de node_modules

Este problema fue solucionado vía los siguientes comandos:
```bash
git rm -rf --cached .
```
Posteriormente, elimitar el .gitignore. Después, crear el gitignore y colocar los archivos de nuevo que se quieren ignorar
