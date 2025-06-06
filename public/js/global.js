  const idUsuario = sessionStorage.getItem("ID_USUARIO")
  
function perguntar(){

  validarSessao()

  const texto = document.getElementById("input_texto").value;

    console.log(texto);

  fetch("/pergunta/ideia", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        
        texto,
        idUsuario
        
    }),
  })
    .then((result) => {
      if (result.ok) {
        console.log("Texto enviado com sucesso!");
      } else {
        console.log("Erro ao enviar o texto", result.status);
      }
    })
    .catch((erro) => {
      console.log("Erro: Não foi possível enviar o texto", erro);
    });

}


function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var id_usuario = sessionStorage.ID_USUARIO;

    if (email != null && id_usuario != null) {
        console.log(id_usuario);
    } else {
        window.location = "./cadastro-login.html#login";
    }
}