// Lesson 6
// Ralph Godkin

// Select the section with an id of container without using querySelector.
const container1 = document.getElementById('container');

// Select the section with an id of container using querySelector.
const container2 = document.querySelector('#container');

// Select all of the list items with a class of “second”.
const secondList = document.getElementsByClassName('second');

// Select a list item with a class of third, but only the list item inside of the ol tag.
const thirdOl = document.querySelector('ol .third');

// Give the section with an id of container the text “Hello!”.
const container3 = document.getElementById('container');

// Add the class main to the div with a class of footer.
const divFooterMain = document.getElementsByClassName('footer');
divFooterMain.classList.add('main'); 

//  Remove the class main on the div with a class of footer.
divFooterMain.classList.remove('main');

//  Create a new li element.
const newLi = document.createElement('li');

//  Give the li the text “four”.
newLi.textContent = 'four';

//  Append the li to the ul element.
const newItem = document.querySelector('ul');
newItem.append(newLi);

//  Loop over all of the lis inside the ol tag and give them a background color of “green”.
const ul = document.querySelector('ul');
const olItems = ul.children;

for (let lis of olItems) {
    lis.style.backgroundColor = 'green';
}

// Remove the div with a class of footer
const removeMe = document.getElementsByClassName('footer');
removeMe.remove();