const express = require('express');
const app = express();

const React = require('react')
const ReactDOMServer = require('react-dom/server')

const Component = require('./component.jsx')

app.get('/' , function(req, res){
    // retorna un string que será renderizado por el cliente
    let html = ReactDOMServer.renderToString(
        React.createElement(Component)
    );
    //  enviamos el string
    res.send(html)
})

app.listen(3000, function(){
    console.log(`listenting to on port 3000`)
});
