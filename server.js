var express = require ('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req,res){
  res.render('index');
});

app.get('/dataCarousel', function(req,res){
  res.json(dataCarousel); // res.json ne génère pas de rafraichissement de la page
});

app.get('/dataSlider', function(req,res){
  res.json(dataSlider); // res.json ne génère pas de rafraichissement de la page
});

app.listen(8080, function(){
  console.log("Server listening on port 8080");
})
