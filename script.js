axios.defaults.headers.common["Authorization"] = "7TjN3WPcE7vfK9tZ9x4UQqXS";
axios.get("https://mock-api.driven.com.br/api/vm/uol/messages")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });

// Guarda a variavel nome e chama a função para trocar de tela

function Nome() {
  const nome = document.getElementById("NomeInput").value;
  console.log(nome);
  Join();
  return nome;
}

function Join(){
  const TelaIncial = document.querySelector(`.Start`);
  TelaIncial.style.display = "none";
  const Corpo = document.querySelector('.corpo');
  Corpo.style.display = "block";
}
