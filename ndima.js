var myButton = document.getElementById('red');
var count = 0;
var mySquare = document.getElementById('square1');




myButton.addEventListener('click', function() {
	count += 1;
switch(count) {
case 1 :

mySquare.style.backgroundColor = 'red';
myButton.value = 'make green';

break;

case 2 :
mySquare.style.backgroundColor = 'green';
myButton.value = 'make green';

break;
case 3 :
mySquare.style.backgroundColor = 'scarlet';
myButton.value = 'make scarlet';

break;
case 4 :
mySquare.style.backgroundColor = 'white';
myButton.value = 'make white';

break;
case 5 :
mySquare.style.backgroundColor = 'pink';
myButton.value = 'make pink';

break;
case 6 :
mySquare.style.backgroundColor = 'black';
myButton.value = 'make black';

break;
case 7 :
mySquare.style.backgroundColor = 'grey';
myButton.value = 'make grey';
break;
case 8 :
mySquare.style.backgroundColor = 'purple';
myButton.value = 'make purple';

break;
case 9 :
mySquare.style.backgroundColor = 'orange';
myButton.value = 'make orange';

break;
case 10 :
mySquare.style.backgroundColor = 'yellow';
myButton.value = 'make yellow';
break;
count += 9;
}
})
