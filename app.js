const xMen = document.getElementById(`x-men`)
console.log(xMen);
console.dir(xMen)

const centered = document.getElementsByClassName(`center`)
console.dir(centered)

const batman = document.querySelector()
console.dir(batman)

const h3s = document.querySelectorAll(h3)
console.dir(h3s)

const h1 = document.querySelector(h1)
console.dir(h1)

const h1 = document.querySelector(`h1`);
console.dir(h1);
console.log(h1.innerText); 
h1.innerText = `The Best Animated Superhero TV Shows Ever!`;
console.log(h1.innerText); 

const honorableMentions = document.getElementById(honorable-mentions)
console.dir(honorableMentions)
console.log(honorableMentions.innerText);
console.log(honorableMentions.innerHTML);
honorableMentions.innerHTML = `OTHER GREAT SHOWS`
console.log(honorableMentions.innerHTML);


const aTag = document.querySelector(`aTag`)
console.dir(aTag)
console.log(aTag.href);
aTag.href = `https://fandomwire.com/15-greatest-animated-superhero-shows-ever-made-ranked/`
console.log(aTag.href);

h1.classList.add(`Text-color`, `background`)
console.log(h1.classList);

h1.classList.remove(`background`)


const h4 = document.createElement(`h4`)
console.dir(h4)
console.log(h4.innerText);
h4.innerText = `Is Avatar: The Last Airbender A Superhero Show?`
console.log(h4.innerText);

const body = document.querySelector(`#Is Avatar: The Last Airbender A Superhero Show?`)
body.prepend(h4)

const h5 = document.createElement(h5)
console.dir(h5)
console.log(h5.innerText);
h5.innerText = `Heroes in a half shell Turtle Power!`
console.log(h5.innerText);

h5.insertAdjacentElement(`afterend`, aTag)

h5.classList.remove(`Superman`)