let app = require('./config/custom-express')();

app.listen(3001, function() {
  console.log('Servido cardfast funcionando');
})
