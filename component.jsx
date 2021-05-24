const React = require('react');

class App extends React.Component{
    render(){
        return(
            React.createElement('h1', null, 'Hola mundo con react')
        )
    }
}

module.exports = App;