function entrar() {
  // aguardar();
  // event.preventDefault();

  var emailVar = email_login_input.value;
  var senhaVar = senha_login_input.value;

  if (emailVar == "" || senhaVar == "") {
    // cardErro.style.display = "block";
    // mensagem_erro.innerHTML =
    //   "(Mensagem de erro para todos os campos em branco)";
    // 
    return false;
 
  }

  console.log("FORM LOGIN: ", emailVar);
  console.log("FORM SENHA: ", senhaVar);

  fetch("/usuarios/autenticar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      emailServer: emailVar,
      senhaServer: senhaVar
    }),
  })
    .then(function (resposta) {
      console.log("ESTOU NO THEN DO entrar()!");

      if (resposta.ok) {
        console.log(resposta);

        resposta.json().then((json) => {
          console.log(json);
          console.log(JSON.stringify(json));

          console.log(json.idUsuario);
          console.log(json.email);
          sessionStorage.ID_USUARIO = json.idUsuario;
          sessionStorage.EMAIL_USUARIO = json.email;

          setTimeout(function () {
            window.location = "./hallowGuess.html";
          }, 500 ); // apenas para exibir o loading
        });
      } else {
        console.log("Houve um erro ao tentar realizar o login!");

        resposta.text().then((texto) => {
          console.error(texto);
        });
      }
    })
    .catch(function (erro) {
      console.log(erro);
    });


  return false;
}

function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.SENHA_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
    } else {
        window.location = "../login.html";
    }
}

// function sumirMensagem() {
//   cardErro.style.display = "none";
// }

// Array para armazenar empresas cadastradas para validação de código de ativação
// let listaEmpresasCadastradas = [];


function cadastrar() {
  // aguardar();
    // event.preventDefault();
  //Recupere o valor da nova input pelo nome do id
  // Agora vá para o método fetch logo abaixo
  var nomeVar = nome_cadastrar_input.value;
  var emailVar = email_cadastrar_input.value;
  var senhaVar = senha_cadastrar_input.value;

  console.log("Começo cadastrar");

  // Verificando se há algum campo em branco
  if (
    nomeVar == "" ||
    emailVar == "" ||
    senhaVar == ""
  ) {
    return false;
  }
  // Enviando o valor da nova input
  fetch("/usuarios/cadastrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      nomeServer: nomeVar,
      emailServer: emailVar,
      senhaServer: senhaVar
    }),
  })

.then(function (resposta) {
  console.log("resposta: ", resposta);

  if (resposta.ok) {
    return resposta.json(); // Converte a resposta para JSON se ainda não estiver
  } else {
    throw "Houve um erro ao tentar realizar o cadastro!";
  }
})
.then(function (dados) {
  // Agora trabalhamos com os dados JSON
  console.log("Dados da resposta:", dados);
  
  sessionStorage.setItem("EMAIL_USUARIO", emailVar);
  
  // Aqui você precisa adaptar conforme a estrutura real da sua resposta
  const userId = dados.insertId || dados.id || dados.usuario?.id;
  
  if (!userId) {
    throw "ID do usuário não encontrado na resposta";
  }
  
  sessionStorage.setItem("ID_USUARIO", userId);
  
  setTimeout(() => {
    window.location = "#login";
  }, 2000);
})
.catch(function (erro) {
  console.error(`#ERRO: ${erro}`);
  // Aqui você pode adicionar tratamento de erro mais elaborado
});


// function limparSessao() {
//     sessionStorage.clear();
//     window.location = "../login.html";
// }

// carregamento (loading)
// function aguardar() {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "flex";
// }

// function finalizarAguardar(texto) {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "none";

//     var divErrosLogin = document.getElementById("div_erros_login");
//     if (texto) {
//         divErrosLogin.style.display = "flex";
//         divErrosLogin.innerHTML = texto;
//     }
// }

// Listando empresas cadastradas
// function listar() {
//   fetch("/empresas/listar", {
//     method: "GET",
//   })
//     .then(function (resposta) {
//       resposta.json().then((empresas) => {
//         empresas.forEach((empresa) => {
//           listaEmpresasCadastradas.push(empresa);

//           console.log("listaEmpresasCadastradas");
//           console.log(listaEmpresasCadastradas[0].codigo_ativacao);
//         });
//       });
//     })
//     .catch(function (resposta) {
//       console.log(`#ERRO: ${resposta}`);
//     });
// }

// function sumirMensagem() {
//   cardErro.style.display = "none";
}
