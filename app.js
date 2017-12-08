function formulaire(){

	var obj = {
	prenom : $("#first_name").val(),
	nom : $("#last_name").val(),
	ville : $("#city").val(),
};
		console.log(obj.prenom, obj.nom, obj.ville);

$('#username').html(obj.prenom + ' ' + obj.nom + ' de ' + obj.ville);
}
$("button").click(formulaire);




	//	$("#first_name").text(e.which);
	//	$("#last_name").text(e.which);
	//	$("#city").text(e.which);



	//		$('#first_name').text(firstname);


	











$(document).ready(function(){

});