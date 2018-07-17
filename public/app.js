$('#valider').click(function(){
	var login= $('input[name=login]').val();
	console.log(login);
	var password= $('input[name=password]').val();
	console.log(password);
	$.ajax({
		method: "POST",
		url: "/auth",
		data: { login: login, password: password }
	}).done(function(rep) {
			//console.log( "success" );  
			//console.log(rep); // afficher message if / else en fonction de la reponse du serveur
		if(rep="success"){
			console.log("rèp du serveur : vos id et mdp sont correct");
		}
		}).fail(function(rep) {
			//console.log( "error" );
		if(rep="error"){
			console.log("rèp du serveur : vos id et mdp sont incorrect");
		}
	});
});



