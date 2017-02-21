$.ajax({
  url: "http://localhost:4000/",
  context: document.body
}).done(function(data) {
	$("#iden").val(data.id);
	$("#nome").val(data.nome);
  console.log(data);
});