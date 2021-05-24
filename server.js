const express = require('express');
const app = express();

app.get('/' , function(req, res){
    res.send('Hello word Express')
})

app.listen(3000, function(){
    console.log(`listenting to on port 3000`)
});
