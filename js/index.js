// Your code goes here
//#1//
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('click', e => {
logoHeading.style.color = 'red';
});
console.log(logoHeading);
/////
//#2//
// const navA = document.querySelector('a');
// navA.addEventListener('mouseover', e => {
//   navA.style.border = '1px solid black';
// });
const navA = document.querySelectorAll('a');
navA.forEach(item => {
  item.addEventListener('mouseover', e => {
    item.style.color = 'purple';
    item.style.border = '1px solid orange';
  });
});
/////
//#3//
const bodyColor = document.querySelector('body');
bodyColor.addEventListener('keydown', e => {
  bodyColor.style.backgroundColor = 'palevioletred';
});
/////
//#4//
const introImg = document.querySelector('.intro img');
introImg.addEventListener('dblclick', e => {
  alert('You just double clicked on the Yellow bus pictures!!');
});
/////
//#5//
const header2 = document.querySelectorAll('h2');
header2.forEach(item => {
  item.addEventListener('mouseenter', e => {
    item.style.color = 'gold';
    item.style.backgroundColor = 'black';
  });
});
/////
//#6//
const firstP = document.querySelector('p');
firstP.addEventListener('mousemove', e => {
  firstP.style.fontSize = '5rem';
});
/////
//#7//
const secondP = document.querySelector('.text-content');
secondP.addEventListener('mouseup', e => {
  secondP.style.color = 'white';
  secondP.style.background = 'black';
});
/////
//#8//
 const thirdP = document.querySelector('.text-content:nth-child(2) p');
 thirdP.addEventListener('wheel', e => {
   thirdP.style.color = 'green';
   thirdP.style.backgroundColor = 'navy';
 });
 /////
 //#9//
 const childP = document.querySelectorAll('.btn');
childP.forEach(item => {
  item.addEventListener('click', e => {
  item.style.color = 'coral';
  });
});
/////
//#10//



const footerP = document.querySelector('.footer p');
footerP.addEventListener('dblclick', e => {
  footerP.style.color = 'gold';
  footerP.style.fontSize = '2rem';
  footerP.style.borderBottom = '2px solid black';
});


 




