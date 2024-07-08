const textareaElement = document.getElementById("decrypt");
const showText = document.querySelector(".container_result_text");
const imgFound = document.querySelector(".img_result");

const vowelsEncrypt = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

const vowelsDecrypt = {
  ai: "a",
  enter: "e",
  imes: "i",
  ober: "o",
  ufat: "u",
};

const getTransformText = (vowelReference, text) => {
  for (const [key, value] of Object.entries(vowelReference)) {
    text = text.replace(new RegExp(key, "g"), value);
  }
  return text;
};

// Función para mostrar el mensaje predeterminado
const showDefaultMessage = () => {
  
  showText.innerHTML = `
  <figure>
    <img src="./assets/Muñeco.jpg" alt="buscando" class="img_result">
  </figure>
  <div class="container_result_text">
    <p class="text_result">Ningún mensaje fue encontrado</p>
    <p class="text_result_description">
      Ingresa el texto que desees encriptar o desencriptar.
    </p>
  </div>`; // Limpiar el texto transformado
};

const textAreaVlue = () => {
  if (textareaElement.value == "") {
    imgFound.remove();
    showDefaultMessage();
  }
};



document.querySelectorAll(".encrypt, .decrypt").forEach((element) => {
  element.addEventListener("click", () => {
    let text = textareaElement.value.toLowerCase();
    const isEncrypt = element.textContent.trim().toLowerCase() === "encriptar";
    const transformText = getTransformText(
      isEncrypt ? vowelsEncrypt : vowelsDecrypt,
      text
    );
    imgFound.remove();
    showText.textContent = transformText; // Muestra el texto transformado en el contenedor
  });
});

document.querySelector(".copy_button").addEventListener("click", () => {
  const textToCopy = showText.textContent;
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      console.log("Texto copiado al portapapeles:", textToCopy);
    })
    .catch((err) => {
      console.error("Error al copiar el texto al portapapeles:", err);
    });
});

textareaElement.addEventListener("input", textAreaVlue);

