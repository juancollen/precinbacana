// Validar Campo

window.onload=carregaTela;
function carregaTela() {

  document.getElementById("button_login").onclick = btnButtonLogin;
  async function btnButtonLogin() {
    var Email = document.getElementById("caixa-email").value;
    var Senha = document.getElementById("caixa-senha").value;
  
    if (Email == "") {
      alert("Coloque o Email");
      return false;
    }

    if (!validarEmail(Email)) {
      alert("Email inválido");
      return false;
    }

    if (Senha == "") {
      alert("Coloque a Senha");
      return false;
    }

    if (Senha.length < 8) {
      alert("A senha deve ter pelo menos 8 caracteres.");
      return false;
    }
    var usuario=Email + ";" + Senha;
    document.getElementById("frm_login").value =usuario; 
    //document.getElementById("frm_post-criar").submit();
    
    // montando a lista de variaveis p/ fazer o POST
    var lista = new FormData();
    lista.append("frm_login",usuario);    
    let retorno = await fetch("http://localhost:3000/api_precin-bacana.php", { method: "POST", body: lista });
    // mostrando o retorno                                    
    var msg = await retorno.json();
    //alert(JSON.stringify(msg));
    //alert(msg.status);
    if (msg.status == "ok") {
      alert("Parabéns, você conseguiu efetuar seu cadastro!");
    } else {
      alert("Usuario Já Existe");
    }
  
  }
}

function validarEmail(email) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}


// Login

document.getElementById("button_login-entrar").onclick = btnLoginEntrar;
async function btnLoginEntrar() {
  var Email = document.getElementById("caixa-email-login").value;
  var Senha = document.getElementById("caixa-senha-login").value;

  if (Email == "") {
    alert("Coloque o Email");
    return false;
  }

  if (!validarEmail(Email)) {
    alert("Email inválido");
    return false;
  }

  if (Senha == "") {
    alert("Coloque a Senha");
    return false;
  }

  if (Senha.length < 8) {
    alert("A senha deve ter pelo menos 8 caracteres.");
    return false;
  }

  var usuario=Email+";"+Senha;
  document.getElementById("frm_usuario").value=usuario; 
  //document.getElementById("frm_post-login").submit();
  
  let retorno = await fetch("http://localhost:3000/api_precin-bacana.php?frm_usuario="+usuario);
  // mostrando o retorno                                    
  var msg = await retorno.json();
  //alert(JSON.stringify(msg));
  //alert(msg.status);
  if (msg.status == "ok") {
    alert("Seja Bem Vindo");
  } else {
    alert("Usuario Invalido");
  }
}

// Cupons e Dialog

        const meuDialogo_shein = document.getElementById('meuDialogo-shein');
        const abrirDialogoBtn_shein = document.getElementById('btn-shein');
        const meuDialogo_shopee = document.getElementById('meuDialogo-shopee');
        const abrirDialogoBtn_shopee = document.getElementById('btn-shopee');
        const meuDialogo_ali = document.getElementById('meuDialogo-ali');
        const abrirDialogoBtn_ali = document.getElementById('btn-aliexpress');
        const meuDialogo_amazon = document.getElementById('meuDialogo-amazon');
        const abrirDialogoBtn_amazon = document.getElementById('btn-amazon');
        const fecharDialogo_shein = document.getElementById('fecharDialogo_shein');
        const fecharDialogo_shopee = document.getElementById('fecharDialogo_shopee');
        const fecharDialogo_ali = document.getElementById('fecharDialogo_ali');
        const fecharDialogo_amazon = document.getElementById('fecharDialogo_amazon');


        abrirDialogoBtn_shein.addEventListener('click', () => {
            meuDialogo_shein.showModal();
        });

        fecharDialogo_shein.addEventListener('click', () => {
            meuDialogo_shein.close();
        });

        abrirDialogoBtn_shopee.addEventListener('click', () => {
          meuDialogo_shopee.showModal();
      });

      fecharDialogo_shopee.addEventListener('click', () => {
          meuDialogo_shopee.close();
      });

      abrirDialogoBtn_ali.addEventListener('click', () => {
        meuDialogo_ali.showModal();
    });

    fecharDialogo_ali.addEventListener('click', () => {
        meuDialogo_ali.close();
    });

    abrirDialogoBtn_amazon.addEventListener('click', () => {
      meuDialogo_amazon.showModal();
  });

  fecharDialogo_amazon.addEventListener('click', () => {
      meuDialogo_amazon.close();
  });

  // Login

  const Criar = document.getElementById("dialog-criar");
  const AbrirCriar = document.getElementById("abrir-criar");
  const FecharCriar = document.getElementById("fechar-criar");
  const Login = document.getElementById("dialog-login");
  const AbrirLogin = document.getElementById("abrir-login");
  const FecharLogin = document.getElementById("fechar-login");
  
  AbrirCriar.addEventListener('click', () => {
      Criar.showModal();
  });
  
  FecharCriar.addEventListener('click', () => {
      Criar.close();
  });
  
  AbrirLogin.addEventListener('click', () => {
      Login.showModal();
  });
  
  FecharLogin.addEventListener('click', () => {
      Login.close();
  });
  