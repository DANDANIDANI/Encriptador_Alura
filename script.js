const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada) {
  const matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replace(new RegExp(matrizCodigo[i][0], "g"), matrizCodigo[i][1]);
    }
  }
  return stringEncriptada;
}
function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
    const matrizCodigo = [
      ["enter", "e"],
      ["imes", "i"],
      ["ai", "a"],
      ["ober", "o"],
      ["ufat", "u"],
    ];
    stringDesencriptada = stringDesencriptada.toLowerCase();
  
    for (let i = 0; i < matrizCodigo.length; i++) {
      if (stringDesencriptada.includes(matrizCodigo[i][0])) {
        const regex = new RegExp(matrizCodigo[i][0], "g");
        stringDesencriptada = stringDesencriptada.replace(regex, matrizCodigo[i][1]);
      }
    }
    return stringDesencriptada;
  }

  function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    
    if (textoEncriptado === "") {
        document.querySelector(".mensaje-vacio").style.display = "block";
        document.querySelector(".mensaje-ayuda").style.display = "none";
    } else {
        document.querySelector(".mensaje-vacio").style.display = "none";
        document.querySelector(".mensaje-ayuda").style.display = "block";
    }
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    
    if (textoEncriptado === "") {
        document.querySelector(".mensaje-vacio").style.display = "block";
        document.querySelector(".mensaje-ayuda").style.display = "none";
    } else {
        document.querySelector(".mensaje-vacio").style.display = "none";
        document.querySelector(".mensaje-ayuda").style.display = "block";
    }
}


  function btnCopiar() {
    const texto = mensaje.value.trim();
  
    if (texto !== "") {
      navigator.clipboard.writeText(texto)
        .then(() => {
          console.log("Texto copiado al portapapeles");
        })
        .catch((error) => {
          console.error("Error al copiar el texto: ", error);
        });
    } else {
      console.log("El campo de texto está vacío. No se copió nada.");
    }
  }
  
  document.querySelector(".copiar").addEventListener("click", btnCopiar);
  
  



