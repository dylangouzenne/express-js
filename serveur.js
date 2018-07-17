var express = require('express')
var app = express()
var bodyParser = require('body-parser');


//commende qui permet de définir sur quel port écoute le serveur
app.listen(3300, function () {
	console.log("le serveur écoute sur le port 3300 a l'adresse http://localhost:33OO !")
})

app.use(express.static('public')); // commande pour utiliser le dossier public pour envoyer les doc static html, css et js au client
app.use(bodyParser.urlencoded({ extended: false })); //commande pour utiliser body-parse pour retrouver les valu des input envoyer par le client

var user ={
	login: 'dylan',
	password: 'azerty',
}


app.post('/auth', function (req, res) {
	console.log(req.body);
	if (user.login === req.body.login && user.password === req.body.password) {
		console.log(req.body.login);
		console.log(req.body.password);
		res.send('success')
	}
	res.send('error');


});



