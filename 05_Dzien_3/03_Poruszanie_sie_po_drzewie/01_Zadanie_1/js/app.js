const first = document.querySelector('.first');
console.log(first);

const second = document.querySelector('#second');
console.log(second);

const dataEx = document.querySelector('[data-ex="third"]');
console.log(dataEx);

const forth = document.querySelector('.forth');

/** 1 */

// pierwsze dziecko ->
console.log(first.firstElementChild);

// -> trzecie dziecko
console.log(first.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling);
console.log(first.firstElementChild.children[2]);

/** 2 */

//rodzic ->
console.log(second.parentElement);

// -> czwarte dziecko
console.log(second.parentElement.children[3]);

/** 3 */

//dziadek ->
console.log(dataEx.parentElement.parentElement);

// -> ostatnie dziecko ->
console.log(dataEx.parentElement.parentElement.lastElementChild);

// -> pierwsze dziecko
const toMiddle = dataEx.parentElement.parentElement.firstElementChild.children.length;
console.log(dataEx.parentElement.parentElement.lastElementChild.children[Math.floor(toMiddle/2)]);

/** 4 */

// rodzic ->
console.log(forth.parentElement);

// -> pierwsze dziecko o tagu article -->
console.log(forth.parentElement.getElementsByTagName('article'));

// -> drugie dziecko o tagu p
console.log(forth.parentElement.getElementsByTagName('article')[0].getElementsByTagName('p')[1]);
