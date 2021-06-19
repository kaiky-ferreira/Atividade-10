let header = document.querySelector('header');
let h1 = document.createElement('h1');
let texto = document.createTextNode("Hollow Knight");
let img1 = document.createElement('img');
let img2 = document.createElement('img');
let img3 = document.createElement('img');
let imagem1 = document.createAttribute('src');
let imagem2 = document.createAttribute('src');
let imagem3 = document.createAttribute('src');
imagem1.value = "HK.jpg";
img1.setAttributeNode(imagem1);
imagem2.value = "QuirrelDance.gif";
img2.setAttributeNode(imagem2);
imagem3.value = "QuirrelDance.gif";
img3.setAttributeNode(imagem3);

let main = document.querySelector('main');
let div1 = document.createElement('div');
let div2 = document.createElement('div');
let h21 = document.createElement('h2');
let h22 = document.createElement('h2');
let p1 = document.createElement('p');
let p2 = document.createElement('p');
let tituloh21 = document.createTextNode("O Jogo");
let tituloh22 = document.createTextNode("Desenvolvimento");
let textop1 = document.createTextNode("Hollow Knight é um jogo metroidvania de exploração, onde você explora o velho reino de Hollownest e seus mistérios. Com uma história que é contada aos poucos ao explorar o mundo e conversar com os NPCs.");
let textop2 = document.createTextNode("No começo de Hollow Knight, você pode estar perdido e sem saber direito por onde começar, mas isso é totalmente normal, pois esse é assim que o jogo quer que você se sinta, a curiosidade sobre o desconhecido te leva cada vez mais além nesse jogo. Em algum momento tudo se encaixa e faz sentido.");


header.appendChild(h1);
h1.appendChild(img2);
h1.appendChild(texto);
h1.appendChild(img3);
main.appendChild(div1);
main.appendChild(div2);
div1.appendChild(h21);
div2.appendChild(h22);
h21.appendChild(tituloh21);
h22.appendChild(tituloh22);
div1.appendChild(p1);
div2.appendChild(p2);
p1.appendChild(textop1);
p2.appendChild(textop2);
main.appendChild(img1);

img1.classList.add("HK");
img2.classList.add("Quirrel");
