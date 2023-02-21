let squares = document.getElementsByClassName("square");
let winnerDiv = document.getElementById("winner")
let counter = 0;

const verificaVencedor = () => {
// POSSIBILIDADES DE VITÓRIA...
  let h1 = [squares[0].textContent, squares[1].textContent, squares[2].textContent];
  let h2 = [squares[3].textContent, squares[4].textContent, squares[5].textContent];
  let h3 = [squares[6].textContent, squares[7].textContent, squares[8].textContent];
  let v1 = [squares[0].textContent, squares[3].textContent, squares[6].textContent];
  let v2 = [squares[1].textContent, squares[4].textContent, squares[7].textContent];
  let v3 = [squares[2].textContent, squares[5].textContent, squares[8].textContent];
  let x1 = [squares[0].textContent, squares[4].textContent, squares[8].textContent];
  let x2 = [squares[2].textContent, squares[4].textContent, squares[6].textContent];
  let winnerPossibilities = [h1, h2, h3, v1, v2, v3, x1, x2];

// MAP NO ARRAY DAS POSSIBILIDADES VERIFICANDO SE...
  winnerPossibilities.map((array)=>{
    console.log(array)
    console.log(counter)
// SE TODOS OS QUADRADOS FORAM PREENCHIDOS E NÃO HOUVE VENCEDOR... DEU VÉIA.
    if (counter === 9 && array[0] + array[1] + array[2] != "❌❌❌" && array[0] + array[1] + array[2] != "⭕⭕⭕"){
      winnerDiv.classList.add("endGame")
        winnerDiv.innerHTML = "Deu véia 👵"
    }
// SE ALGUMA POSSIBILIDADE DO ARRAY DAS POSSIBILIDADES DE VITÓRIAS FOR "XXX" ELE GANHA.
    if(array[0] + array[1] + array[2] == "❌❌❌"){
      winnerDiv.classList.add("endGame")
      winnerDiv.innerHTML = "❌ Ganhou!"
    } 
// SE ALGUMA POSSIBILIDADE DO ARRAY DAS POSSIBILIDADES DE VITÓRIAS FOR "OOO" ELE GANHA.
    if(array[0] + array[1] + array[2] == "⭕⭕⭕"){
      winnerDiv.classList.add("endGame")
      winnerDiv.innerHTML = "⭕ Ganhou!"
    }
  })
};

// ADICIONA EVENT LISTENER DE CLICK EM TODOS OS QUADRADOS
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", (event) => {
    // Verifica se o player não está tentando clicar em um quadrado já selecionado.
    if (event.target.outerText === "❌" || event.target.outerText === "⭕") {
      alert("Jogue em um quadrado vazio!");
      // Se não...
    } else {
      // se for um click com o contador em número par, conta o "X"
      if (counter % 2 == 0) {
        event.target.innerHTML = "❌";
        counter += 1;
        // se não... conta o "O"
      } else {
        event.target.innerHTML = "⭕";
        counter += 1;
      }
      // E executa a função de verificação das possibilidades de vitória a cada novo click.
      verificaVencedor();
    }
  });
}