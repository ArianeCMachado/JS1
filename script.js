const titulo = document.getElementById("titulo");
const listaNaoOrdenada = document.querySelector("ul");
const link = document.getElementById("link");
const listaOrdenada = document.getElementById("lista-ordenada");

titulo.innerText = "Páginas que te ajudam a estudar Programação!";
link.innerText = "Link para o ProZeducação";

listaNaoOrdenada.innerHTML = "<li>HTML</li><li>CSS</li><li>Javascript</li>";

listaOrdenada.innerHTML = "<li><a href='https://alura.com.br'>Alura</a></li><li><a href='https://laboratoria.la'>Laboratoria</a></li><li><a href='https://pt-pt.khanacademy.org/'>Khan Academy</a></li>";
